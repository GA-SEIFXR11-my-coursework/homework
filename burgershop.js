
var burger1="Cheese";
let Cheese=9;
        var  burger2="DoubleCheese";
        let DoubleCheese=12.5;

        var burger3= "BaconCheese";
        let baconCheese=15;


        let S=5;
        let M=7;
        let L=9;

let burgerChoice = prompt("What burger would you like?  Cheese/DoubleCheese/BaconCheese");
let friesAnswer = prompt("Would you like fries with that? (Yes/No)");

if (friesAnswer==="Yes"){
    
    let friesChoice = prompt("Which size? (S/M/L)");
    let quantitiesBurger=Number(prompt("How many burgers?"));
    let quantitiesFries=Number(prompt("How many fries?"));
console.log("So That's" + burgerChoice + "Burger" + quantitiesBurger + "with" + friesChoice + "size fries" + quantitiesFries);
alert("Your total is $"+ (burgerChoice * quantitiesBurger) + (friesChoice * quantitiesFries));
}
if (friesAnswer==="No"){
        console.log("So That's"+ burgerType +"no fries");
        let quantitiesBurger=Number(prompt("How many burgers?"));
        alert("Your total is $"+ burgerChoice*quantitiesBurger);}

        
       
        
  

 


