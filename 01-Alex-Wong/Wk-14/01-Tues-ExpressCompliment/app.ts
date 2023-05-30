import express from "express"

const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

const compliments = [
    "You have a captivating smile.",
    "Your kindness and compassion are truly inspiring.",
    "Your positive energy is contagious.",
    "You always know how to make others feel comfortable and welcome.",
    "Your intelligence and wit make conversations with you incredibly enjoyable.",
    "You have a remarkable sense of style and always look effortlessly put together.",
    "Your creativity knows no bounds; you have a unique perspective on everything.",
    "Your perseverance and determination are truly admirable.",
    "Your sense of humor never fails to bring a smile to my face.",
    "You have are incredibly talented.",
    "Your voice is soothing and enchanting.",
    "Your thoughtfulness and attentiveness make you an amazing friend.",
    "Your ability to listen and understand others is a rare and valuable quality.",
    "You have a beautiful soul that shines through in everything you do.",
    "Your strength and resilience in the face of challenges inspire me.",
    "Your generosity and willingness to help others are truly commendable.",
    "You have an infectious enthusiasm that lights up any room you enter.",
    "Your intelligence and quick thinking make you a valuable asset to any team.",
    "Your dedication and hard work never go unnoticed.",
    "You have an incredible eye for detail and notice things others may overlook."
];

function randomColourRGBstr(){
    let rand255 = () => {
        return(Math.floor(Math.random() * 256))
    }
    return(`rgb(${rand255()}, ${rand255()}, ${rand255()})`)
}

function randItem(list: any[]){
    return(list[Math.floor(Math.random() * list.length)])
}


app.get("/", (_req, _res) => {
    let date = new Date();
    let now = date.toString()
    _res.render("index", { now });
});

app.get("/compliment", (_req, _res)=>{
    let name = _req.query["name"];
    let compliment: string = randItem(compliments)
    if(name != undefined && name != ""){
        compliment = compliment.slice(0,compliment.length-1)
        compliment = `${compliment}, ${name}.`
    }
    _res.render("compliment", { bgcolour: randomColourRGBstr(), compliment })
});

// binds port to app (3000 is commonly used)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


// used for parsing url encoded bodies in requests
app.use(express.urlencoded({ extended: true }));