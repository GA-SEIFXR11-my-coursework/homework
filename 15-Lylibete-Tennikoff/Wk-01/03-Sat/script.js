// VERSION 1

// let mainsOrder = prompt("What burger would you like?");
// console.log(mainsOrder);
// let sideOrder = prompt("Would you like fries with that?");
// console.log(sideOrder);
// if (sideOrder === "no") {
//   alert("So that's 1 ${mainOrder}, no fries.");
// } else if (sideOrder === "yes") {
//   let sizeChips = prompt("What size fries? Small, Medium or Large?");
//   console.log(sizeChips);
//   alert(`So that's 1 ${mainsOrder} with ${sizeChips} fries.`);
// }

// VERSION 2
// Variables
let mainOrder;
let sideOrder;
let sizeChips;

// Ordering Function (Tried both standard and arrow functions)
function orderCollector() {
  let mainsOrder = prompt("What burger would you like?");
  console.log(mainsOrder);
  let sideOrder = prompt("Would you like fries with that?");
  console.log(sideOrder);
  // Control Flow
  if (sideOrder === "no") {
    alert(`So thats 1 ${mainOrder}, no fries.`);
  } else if (sideOrder === "yes") {
    let sizeChips = prompt("What size fries? Small, Medium or Large?");
    console.log(sizeChips);
    alert(`So that's 1 ${mainsOrder} with ${sizeChips} fries.`);
    // alert(`Your total bill comes to ${priceCalc(mainsOrder, sizeChips)}`);
  }
}
// Button Click
document.getElementById("order").addEventListener("click", orderCollector);

// VERSION 3
// Prices

//Prices Calc (WIP)
// function priceCalc(mainsOrder, sizeChips) {
//   const og = 12.5;
//   const cheeseburger = 14;
//   const aussie = 16.95;
//   const american = 20.99;
//   const chipsSmall = 9.99;
//   const chipsMedium = 10.99;
//   const chipsLarge = 11.99;
// //   if (mainsOrder === og)

// //   let totalPrice = mainsOrder + sideOrder;
// //   return totalPrice;
// }
// //integer vs float two decimals
