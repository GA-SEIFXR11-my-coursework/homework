import express from "express";
import { dbConn } from "../Db.ts";
type T_Challenge = {
  name: string;
  description: string;
  address: string;
};
const defaultChallenges: T_Challenge[] = [
  {
    name: "Human Harbour Bridge",
    description:
      "Make a human bridge and take a photo with the Sydney Harbour Bridge in the background.",
    address: "1 Bennelong Point, Sydney NSW 2000",
  },
  {
    name: "Botanic Gardens",
    description:
      "Take a photo of the weirdest looking plant you can find in the Royal Botanic Gardens.",
    address: "4A Macquarie St, Sydney NSW 2000",
  },
];

const challengesRouter = express.Router();
challengesRouter.use(express.json());

async function regenDefaultChallenges(){
  await dbConn.ready;
  await dbConn.collections.challenges.drop();
  await dbConn.collections.challenges.insertMany(defaultChallenges);
  return true;
}
challengesRouter.get("/regenChallenges", async (req,res)=>{
  try{
    await regenDefaultChallenges();
    res.status(200).json({message: "OK"});
  }catch(e){
    res.status(400).json({error: e});
  }
})
async function getChallenges(){
  await dbConn.ready;
  var result = await dbConn.collections.challenges.find({}).toArray();
  return result;
}
challengesRouter.get("/all", async (req,res)=>{
  try{
    var result = await getChallenges();
    res.status(200).json({message: result});
  }catch(e){
    res.status(400).json({error: e});
  }
})

export { challengesRouter };
