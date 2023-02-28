const myButton = document.querySelector('button');

function Order() {
    let burger = prompt("What burger would you like?");
    let burgerAmt = prompt("How many would you like?")
    let fries = prompt("Would you like fries with that? Y/N");
    let totalOrder;
    let totalBurger;
    let totalFries = 0;
    let friesAmt = 0;
    if (fries === "Y") {
    friesAmt = prompt("How many fries would you like with that?");
    totalFries = 10 * friesAmt;
        }
    if (burger === "The Byte Burger") {
        totalBurger = 20 * burgerAmt;
    } else if (burger === "The Syntax Smash" || burger === "The Debugger Deluxe") {
        totalBurger = 19 * burgerAmt;
    } else if (burger === "The Git Burger") {
        totalBurger = 19 * burgerAmt;
    }
    
    totalOrder = totalBurger + totalFries;


let content = `For the ${burger}, you'd like a quantity of ${burgerAmt}. For the fries, you'd like a quantity of ${friesAmt}. That comes to a total of $${totalOrder}.`

alert(content);
}
document.querySelector('button').addEventListener('click', Order);

