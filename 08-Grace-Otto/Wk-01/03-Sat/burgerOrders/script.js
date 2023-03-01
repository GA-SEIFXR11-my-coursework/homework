let orderTotal = 0;
var addButtons = document.querySelectorAll(".add");
var decButtons = document.querySelectorAll(".dec");
let clickCount = 0;

decButtons.forEach((decButton) => {
    decButton.addEventListener("click", function(e) {
        if(e.target.previousElementSibling.value > 0){
            e.target.previousElementSibling.value--;
            orderTotal = Number(orderTotal) - Number(e.target.id);
            orderTotal = Number(orderTotal).toFixed(2);
            totalPrice = `$ ${orderTotal}`;
            document.getElementById("total").innerText = totalPrice;
        }
    })
})

addButtons.forEach((addButton) => {
    addButton.addEventListener("click",function(e) {
        clickCount = clickCount + 1;
        console.log(clickCount);
        e.target.nextElementSibling.value++;
        if (clickCount === 10) {
            alert("*BIG SPENDER*\n10% discount applied to previous items.");
            orderTotal = (Number(orderTotal) + Number(e.target.id)) * 0.9;
        } else {
            orderTotal = Number(orderTotal) + Number(e.target.id);
        }
        orderTotal = Number(orderTotal).toFixed(2);
        totalPrice = `$ ${orderTotal}`;
        document.getElementById("total").innerText = totalPrice;
    })
  })



