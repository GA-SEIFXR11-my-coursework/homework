import mongodb, { MongoClient } from 'mongodb'
import 'dotenv/config'

const dbname = "scavenger_hunt"

const defaultChallenges = [
    { name: "Human Harbour Bridge" , description: "Make a human bridge and take a photo with the Sydney Harbour Bridge in the background.", address: "1 Bennelong Point, Sydney NSW 2000" },
    { name: "Botanic Gardens" , description: "Take a photo of the weirdest looking plant you can find in the Royal Botanic Gardens.", address: "4A Macquarie St, Sydney NSW 2000" },
];

export default class ScavHuntMongo{
    client: MongoClient;
    collections: {[k: string]: mongodb.Collection<mongodb.BSON.Document>};
    connection: Promise<mongodb.MongoClient>;
    lastPromise: Promise<any>;
    sanityLogging: boolean = false;

    constructor(){
        this.client = new MongoClient(process.env["MONGO_URI"] as string);
        this.connection = this.client.connect()
        this.lastPromise = this.connection;
        this.collections = {};
        this.collections = {
            ...this.collections,
            challengesCollection: this.client.db(dbname).collection("challenges"),
        };
    }

    errorHandler(e: unknown){
        if(typeof e == "string"){ throw (new Error(e as string)); }
        else if(e instanceof Error){ throw (new Error(e.message)); }
        return <never>{};
    }

    async asyncWrapper(promise: Awaited<Promise<any>>){
        return(async()=>{
            if(this.sanityLogging){console.log("1: asynWrap start")};
            this.connection = this.client.connect().then((res)=>{
                if(this.sanityLogging){console.log("connect client")};
                return res;
            });
            await this.connection;
            let ret = promise()
                .then((resolve: any)=>{
                    return resolve;
                })
                .then(async(resolve:any)=>{
                    if(this.sanityLogging){console.log(`grabbed: ${resolve}`)}
                    return this.client.close().then(()=>{
                        if(this.sanityLogging){console.log("closed client")};
                        return resolve;
                    });
                })
                .catch((e:any)=>{this.errorHandler(e)})
            if(this.sanityLogging){console.log(`ret: ${ret}`)}
            return(ret);
        })
    }

    async asyncWrappedCall(promise: Awaited<Promise<any>>){
        // usage: 
        //  return this.asyncWrappedCall(async()=>{ /* your function*/ })
        //  primitive chaining safety here, but race conditions can still break it
        await this.lastPromise;
        let asyncCall = await this.asyncWrapper(promise);
        this.lastPromise = asyncCall();
        return(this.lastPromise);
    }

    // Testing use only
    async sanityTest_asyncWrapper(){
        this.sanityLogging = true;
        console.log("0: Sanity start");
        let result = await this.asyncWrappedCall(async()=>{
            console.log("2: Sanity inside");
            return("inner retval");
        })
        this.sanityLogging = false;
        return result;
    }
    // Testing use only
    async sanityTest_doubleWrap(){
        return this.sanityTest_asyncWrapper().then(()=>{
            this.sanityTest_asyncWrapper();
        })
    }
    // Testing use only
    async sanityTest_asyncWrappedCall(){
        return this.asyncWrappedCall(async()=>{
            return this.sanityTest_doubleWrap();
        })
    }
    
    // Functional Methods:

    async regenChallenges(){return( 
        this.asyncWrappedCall(async()=>{
            let challengesCollection = this.collections.challengesCollection!;
            await challengesCollection.insertOne({});
            await challengesCollection.drop();
            await challengesCollection.insertMany(defaultChallenges);
            return true
        })
        .catch((e:any)=>{this.errorHandler(e)})
    )}

    async getAllChallenges(){return(
        this.asyncWrappedCall(async()=>{
            let challengesCollection = this.collections.challengesCollection!;
            return challengesCollection
                .find({})
                .toArray()
                .then(res=>{
                    return res
                })
            ;
        })
        .catch((e:any)=>{this.errorHandler(e)})
    )}
    
}