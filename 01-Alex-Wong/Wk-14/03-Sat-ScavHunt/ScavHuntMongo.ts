import mongodb, { MongoClient } from 'mongodb'
import assert from "assert"
import 'dotenv/config'

const dbname = "scavenger_hunt"

const defaultChallenges = [
    { name: "Human Harbour Bridge" , description: "Make a human bridge and take a photo with the Sydney Harbour Bridge in the background.", address: "1 Bennelong Point, Sydney NSW 2000" },
    { name: "Botanic Gardens" , description: "Take a photo of the weirdest looking plant you can find in the Royal Botanic Gardens.", address: "4A Macquarie St, Sydney NSW 2000" },
];

export default class ScavHuntMongo{
    client: MongoClient;
    collections: {[k: string]: mongodb.Collection<mongodb.BSON.Document>};

    constructor(){
        this.client = new MongoClient(process.env["MONGO_URI"] as string);
        this.client.connect();
        this.collections = {};
    }

    errorHandle (e: unknown){
        console.log("ERROR HANDLE");
        if(typeof e == "string"){ throw (new Error(e as string)); }
        else if(e instanceof Error){ throw (new Error(e.message)); }
        return <never>{};
    }

    async regenChallenges(){
        this.collections = {
            ...this.collections,
            challengesCollection: this.client.db(dbname).collection("challenges"),
        };
        let { challengesCollection } = this.collections;
        await challengesCollection.insertOne({});
        await challengesCollection.drop();
        await challengesCollection.insertMany(defaultChallenges);
        return this
    }

    async listChallenges(){
        let challengesCollection = this.collections.challengesCollection!;
        return challengesCollection
            .find({})
            .toArray()
            .then(res=>{
                return res
            })
    }
    
}