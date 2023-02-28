let total = 0;
let burgerQuestion = prompt("What burger would you like?\n-Cheeseburger\n-Chicken Burger\n-Fish burger").toUpperCase();
if (burgerQuestion === "CHEESEBURGER" || burgerQuestion === "CHEESE BURGER" || burgerQuestion ==="CHICKEN BURGER" || burgerQuestion === "FISH BURGER") {
    let burgerSize  = prompt(`What size ${burgerQuestion} would you like? Your options are:\nLarge - $12\nMedium- $10\nSmall- $8`).toUpperCase();
    if (burgerSize === "LARGE") {
        total = 12;
    } else if (burgerSize === "MEDIUM"){
        total = 10;
    } else if (burgerSize === "SMALL") {
        total = 8;
    } else {
        alert ("Invalid size. Order will default to MEDIUM. Please refresh the page if you would like to have a different sized burger");
        total = 10;
        burgerSize = "MEDIUM"
        
    }
    let friesQuestion = prompt("Would you like fries with that? (yes/no)").toUpperCase();
    if (friesQuestion === "YES") {
        let sizeFries = prompt("What size fries would you like?\nYour options are:\nLarge - $5\nMedium - $3\nSmall - $2").toUpperCase();
        if (sizeFries === "LARGE") {
            total = total + 5;
            displayOrder(burgerSize, burgerQuestion, sizeFries, total);

        } else if (sizeFries === "MEDIUM") {
            total = total + 3;
            displayOrder(burgerSize, burgerQuestion, sizeFries, total);

        } else if (sizeFries === "SMALL") {
            total = total + 2;
            displayOrder(burgerSize, burgerQuestion, sizeFries, total);
        } else {
            alert ("Invalid size. Order will default to MEDIUM. Please refresh the page if you would like to have different sized fries");
            total = total + 3;
            sizeFries = "MEDIUM"
            displayOrder(burgerSize, burgerQuestion, sizeFries, total);

        }
    
    } else if (friesQuestion === "NO") {
        displayOrderNoFries(burgerSize, burgerQuestion, total);
    }
}
else {
    alert ("Your order could not be completed. Please refresh the page and enter a valid menu item");

}
function displayOrder (burgerSize, burgerQuestion, sizeFries, total){
    let getPara = document.getElementById("final-order").textContent = `Your final order is:`;
    let getBurger = document.getElementById("burger-element").textContent = `1 x ${burgerSize} ${burgerQuestion}`;
    let getFries = document.getElementById("fries-element").textContent = `1 x ${sizeFries} FRIES`;
    let totalPrice = document.getElementById("total-price").textContent = `TOTAL: $${total}`;
}
function displayOrderNoFries (burgerSize, burgerQuestion, total){
    let getPara = document.getElementById("final-order").textContent = `Your final order is:`;
    let getBurger = document.getElementById("burger-element").textContent = `1 x ${burgerSize} ${burgerQuestion}`;
    let totalPrice = document.getElementById("total-price").textContent = `TOTAL: $${total}`;
}

