alert('esta funcionando')

let checkoutButton= false; //Users cant add more items to order after the checkout button is toggled.
let prices ={'cheeseBurger':20,'chickenBurger':18,'veggieBurger':14,'haloumiBurger':16,'mushroomBurger':15,'onionRings':5,'chips':4};
let sumOfOrder=0;


function checkoutButtonToggle(){// when checkout button is pressed, delivery option is presented. and total order is alerted.
    let final=confirm('Would you like to add delivery for $10? or is your order pick up?');
    if (final){
        sumOfOrder=addTotal(10,sumOfOrder) 
        checkoutButton=true;
        alert(`your total is ${sumOfOrder}`);
    }
}


function handleClick(event){ // gets the ID of the image that was clicked and obtains the price of such order and passes to add total function.
    let id =event.target.id;
    sumOfOrder= addTotal(prices[id],sumOfOrder);
}


function addTotal(price,currentOrder){// adds order items to the menu
    if (checkoutButton===false){
        return currentOrder + price; 
    }
}

