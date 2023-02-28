let burgerOrder = document.querySelector("button");
burgerOrder.addEventListener("click", placeOrder);

function placeOrder() {
  let choice = prompt("What burger would you like?");
  let friesChoice = prompt("Would you like fries with that? 'Yes' or 'No'");

  if (friesChoice === "No") {
    alert("So that's a " + choice + " and no fries.");
    alert("Thanks for ordering!");
  } else if (friesChoice === "Yes") {
    let friesSize = prompt("What size fries would you like?");
    alert("So that's a " + choice + ", and a " + friesSize + " fries.");
    alert("Thanks for ordering!");
  } else if (choice !== null || friesChoice !== null) {
    alert("Please try ordering again.");
  }
}
