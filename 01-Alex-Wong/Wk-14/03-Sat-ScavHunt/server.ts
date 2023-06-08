import express from "express";
import mongodb, { MongoClient } from 'mongodb'
import 'dotenv/config'
import assert from "assert"

import ScavHuntMongo from "./ScavHuntMongo.ts"

const port = 3000;
const app = express();
const clientRouter = express.Router();
const apiRouter = express.Router();
const mongo = new ScavHuntMongo();

clientRouter.use(express.static("client"));
app.use("/", clientRouter);

(async()=>{
    await mongo.client.connect();
    await mongo.regenChallenges();
    await mongo.listChallenges();
})()

apiRouter.get("/",function(req,res){
    res.render("index",{msg: "asdf!"});
});

app.listen(port, function(){
    console.log("App started...");
})

