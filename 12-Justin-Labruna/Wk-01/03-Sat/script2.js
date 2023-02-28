let burgPrice=0;
let cheesePrice=5;
let doublePrice=10;
let kahunaPrice=15;
let burgerType = prompt('what burger do you want');
let burgNum = prompt('how many burgers?');
let fries = prompt('want fries with that yes/no');
if (burgerType === "Cheese") {
    burgPrice = (cheesePrice*burgNum);
} else if (burgerType === "Double") {
    burgPrice = (doublePrice*burgNum);
} else if (burgerType === "Kahuna") {
    burgPrice = (kahunaPrice*burgNum);
};
console.log(burgPrice);

if (fries === "yes") {
    let frySize = prompt('what size? small/large');
    let fryQuant = prompt('how many fries you want?');
    if (frySize === "small") {
        alert("So that's " + burgNum + " " + burgerType + " with " + fryQuant + " " + frySize + " fries, costing a total of $" + (burgPrice+(fryQuant*4)));
    } else if (frySize === "large") {
        alert("So that's " + burgNum + " " + burgerType + " with " + fryQuant + " " + frySize + " fries, costing a total of $" + (burgPrice+(fryQuant*6)));
    };
} else {
    alert("So that's " + burgNum + " " + burgerType + " without fries, costing a total of $" + burgPrice);
};
