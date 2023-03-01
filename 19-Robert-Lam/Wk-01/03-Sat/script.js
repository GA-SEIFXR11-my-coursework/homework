document.addEventListener("DOMContentLoaded", function(event) { 

let main = prompt("What burger would you like?");
let burger = null;
let addOn = null;
let fries = null;
let sizeFries = null;
let numFries = null;
let burgerQuantity = null;

while (main ==="") {
    main = prompt("What burger would you like?");
}

burger = main.toLowerCase();

if (burger === "cheeseburger" || burger === "classic chicken" || burger === "the lot" || burger === "veggie supreme" || burger === "lamb lovers") {
   burgerQuantity = prompt("How many burgers would you like?");
   if (burgerQuantity > 1) {
        burgerQuantity;
   } else {
        burgerQuantity = 1;
   }
} else {
    throw alert("We do not sell what you're after at this store.");
}

addOn = prompt("Would you like fries with that (yes/no)?")
    addOn = addOn.toLowerCase();
    if (addOn === "yes") {
        fries = prompt("What size fries would you like? Small, medium or large");
        sizeFries = fries.toLowerCase();
        numFries = prompt("How many fries would you like?");
        if (numFries > 1) {
            numFries;
        } else {
            numFries = 1;
        }
        if (sizeFries === "small" || sizeFries === "medium" || sizeFries === "large") {
            document.getElementById("return").textContent = `So that's ${burgerQuantity} ${burger} with ${numFries} ${sizeFries} fries.`
        } else {
            document.getElementById("return").textContent = `So that's ${burgerQuantity} ${burger} with fries.`
        }
    } else {
        document.getElementById("return").textContent = `So that's ${burgerQuantity} ${burger}, no fries.`
    }

let burgCost = null;

if (burger === "cheeseburger") {
    burgCost = document.getElementById("cheese").textContent * burgerQuantity;
} else if (burger === "classic chicken") {
    burgCost = document.getElementById("chicken").textContent * burgerQuantity;
} else if (burger === "the lot") {
    burgCost = document.getElementById("lot").textContent * burgerQuantity;
} else {
    burgCost = document.getElementById("veggie").textContent * burgerQuantity;
} 

let friesCost = null;

if (sizeFries === "small") {
    friesCost = 4 * numFries;
} else if (sizeFries === "medium") {
    friesCost = 6 * numFries;
} else { 
    friesCost = 8 * numFries;
}

const totalCost = burgCost + friesCost;
document.getElementById("total").textContent = `So the total cost of your meal is $${totalCost}.`

console.log(burgCost);
console.log(friesCost);

});