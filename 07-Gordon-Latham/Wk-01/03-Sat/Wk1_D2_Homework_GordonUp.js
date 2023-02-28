//Wk1_D3_Homework

setTimeout(function() {
//start with the burger tinks
let burgerChoice = prompt("Name the burger you would like.  There is no filter here, so be specific & polite.  It's a family web restaurant");
let burgerQuant = prompt("How many of those do you want?");
let burgerPrice = (14.50 * burgerQuant).toFixed(2);

///And now for the fries input & output tinks
let friesChoice = prompt ("You want friiiiiiiies with that? [Y, Yes, y accepted answers]");
    if (friesChoice === "Y" || friesChoice === "Yes" || friesChoice === "y" ) {
            let sizeOfFries = prompt("What size of fries would you like?");
            let friesQuant = prompt("cool, and how many of those do you want?")
            let friesPrice = (2.50 * friesQuant).toFixed(2);
            let totalPrice = ((Number(burgerPrice)+Number(friesPrice))).toFixed(2);
        const para = document.createElement("div");
            para.innerText = "So that's "+burgerQuant+" "+burgerChoice+" and "+ friesQuant +" "+sizeOfFries+" fries. That comes to: $"+totalPrice+".";
            document.body.appendChild(para);

    ///what happens if User doesn't want fries
    } else {
        const para2 = document.createElement("div");
        para2.innerText = "So that's "+burgerQuant+" "+burgerChoice+". That comes to: $"+burgerPrice+".";
        document.body.appendChild(para2);
    }
}, 200)