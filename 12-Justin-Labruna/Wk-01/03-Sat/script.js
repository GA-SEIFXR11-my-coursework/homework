let burgerType = prompt('what burger do you want');
let burgNum = prompt('how many burgers?');
let fries = prompt('want fries with that yes/no');
if (fries === "yes") {
    let frySize = prompt('what size? small/large');
    let fryQuant = prompt('how many fries you want?');
    alert("So that's " + burgNum + " " + burgerType + " with " + fryQuant + " " + frySize + " fries");
} else {
    alert("So that's " + burgNum + " " + burgerType + " without fries");
};
if (burgerType === "Cheese") {
    let burgPrice = (burgNum * 5);
} else if (burgerType === "Double") {
    let burgPrice = (burgNum * 10);
} else if (burgerType === "Kahuna") {
    let burgPrice = (burgNum * 15);
}

if (frySize === "small") {
    let fryPrice = (fryQuant * 4);
} else if (frySize === "small") {
    let fryPrice = (fryQuant * 6);
};
if (fries === "yes") {
    alert("price with fries");
} else {
    alert("price without fries");
};