button.addEventListener("click", myFunction);

function myFunction(){
    let selection = document.getElementById("selection")
    let costTotal = document.getElementById("costTotal")
    let friesSize = "none";

    let burgerPrice = {
        cheeseburger: 2,
        chickenburger: 3,
        veganburger: 5,
    }

    let friesPrice = {
        small: 2,
        medium: 3,
        large: 4,

    }

    const burgerChoice = prompt("What burger would you like?");
    const burgerQuantity = prompt(`How many ${burgerChoice}(s) would you like?`);

    let totalCost = burgerPrice[burgerChoice]*burgerQuantity;

    const friesChoice = prompt("Would you like fries with that (yes/no)?");
    if (friesChoice === "yes"){
        friesSize = prompt("What size fries would you like?");
        selection.textContent = `So thats ${burgerQuantity} ${burgerChoice}(s) with ${friesSize} fries`
        totalCost += friesPrice[friesSize];
    } else if (friesChoice === "no") {
        selection.textContent = `So thats ${burgerQuantity} ${burgerChoice}, no fries`
    }
    
    costTotal.textContent = `Your total is $ ${totalCost}`;
}