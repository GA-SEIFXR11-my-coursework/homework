import express from "express";

import { challengesRouter } from "./controllers/ChallengesController.ts";

const port = 3000;
const app = express();

const clientRouter = express.Router();
const apiRouter = express.Router();

apiRouter.use("/challenges", challengesRouter);
clientRouter.use(express.static("./src/client"));

app.use("/", clientRouter);
app.use("/api", apiRouter);

app.listen(port, function(){
    console.log(`App started... http://127.0.0.1:${port}`);
})
