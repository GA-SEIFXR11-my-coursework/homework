import express from "express";

import ScavHuntMongo from "./ScavHuntMongo.ts"

const port = 3000;
const app = express();
const clientRouter = express.Router();
const apiRouter = express.Router();
const mongo = new ScavHuntMongo();

apiRouter.use(express.json());
apiRouter.use(express.urlencoded({extended: true}));

// testing purposes only
// mongo.sanityTest_doubleWrap(); 
// mongo.sanityTest_asyncWrappedCall();
apiRouter.get("/challenges",function(req,res){
    mongo.getAllChallenges().then((result)=>{
        res.json(result);
    })
});

clientRouter.use(express.static("client"));
app.use("/", clientRouter);
app.use("/api", apiRouter);
app.listen(port, function(){
    console.log("App started...");
})

