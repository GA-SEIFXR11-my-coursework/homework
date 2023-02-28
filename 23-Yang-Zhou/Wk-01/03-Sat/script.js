let burger = prompt("What burger would you like?");
let fries;
let order;
let numOfBurgers;
let haveFries;
let FriesSize;
let totalPrice;

if (burger) {
  numOfBurgers = prompt(`How many ${burger} would you like?`);
  fries = prompt("Would you like fries with that (yes/no)?");

  if (fries === "yes") {
    haveFries = "with";
    FriesSize = prompt("what size fries? (large/medium/small)");
    order = `So that's ${numOfBurgers} ${burger} ${haveFries} ${FriesSize} fries.`;
  } else {
    haveFries = ", no";
    order = `So that's ${numOfBurgers} ${burger} ${haveFries} fries.`;
  }
}

const pricing = {
  beefburger: 16,
  chickenburger: 14,
  cheeseburger: 12,
  small: 3,
  medium: 4.5,
  large: 6,
};

totalPrice = numOfBurgers * pricing[burger] + pricing[FriesSize];

document.querySelector(".orderText").textContent = order;
document.querySelector(".priceText").textContent = totalPrice;
