import express from "express"
import { pokemon } from "./pokemon"

const app = express();
const port = 3000;
app.set("view engine", "pug");
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

type Pkmn = {
    name: string;
    img: string;
} 
function validatePkmn(obj: any): obj is Pkmn{
    return(obj instanceof Object &&
        'name' in obj && typeof obj.name === 'string' &&
        'img' in obj && typeof obj.img === 'string'
    )
}

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/pokemon", (req,res)=>{
    res.json(pokemon)
});

app.get("/pokemon/:id", (req,res)=>{
    let index = Number(req.params["id"])
    res.json(pokemon[index])
});

app.post("/pokemon", (req,res)=>{
    let received = req.body
    console.log(received)
    if(validatePkmn(received)){
        // res.send("OK!: Parsed payload body")
        res.json({response: "OK", payload: received})
    }else{
        res.json({response: "BAD", payload: received})
    }
    return
});

// binds port to app (3000 is commonly used)
app.listen(port, () => {
    console.log(`App started...`);
});

