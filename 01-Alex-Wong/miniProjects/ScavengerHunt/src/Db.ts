import mongodb, { Db, MongoClient } from 'mongodb';
import 'dotenv/config';

import {errorHandler} from "./ErrorHelper.ts";

const dbname = "scavenger_hunt"
const mongoUri = process.env["MONGO_URI"];

class DbConn{
  db: mongodb.Db;
  ready: Promise<boolean>;
  collections: {[key: string]: mongodb.Collection};

  constructor(){
    this.db = {} as mongodb.Db;
    this.collections = {};
    this.ready = this.init();
  }

  async init(){
    try{
      const client = new MongoClient(mongoUri as string);
      await client.connect();
      this.db = client.db(dbname);
      this.collections = {
        challenges: this.db.collection("challenges")
      }
      return true
    }catch(e){
      errorHandler(e);
      return false;
    }
  }
}

const dbConn = new DbConn();
export { dbConn };
