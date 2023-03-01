



let burger = prompt ('What burger would you like?')
let amount = prompt ('How many?')
let fries = prompt ('Would you like fries with that (yes/no)?')

let output = document.getElementById('output')



if (fries === 'yes' && amount > 1) {
    let size = prompt ('What size?')
    output.textContent = `So that's ${amount} ${burger}'s with ${size} fries`;
}   else if (fries === 'yes' && amount <= 1) {
    size = prompt ('What size?')
    output.textContent = `So that's ${amount} ${burger}, with ${size} fries`;
}   else if (fries === 'no' && amount > 1) {
    output.textContent = `So that's ${amount} ${burger}'s, no fries`
}   else if (fries === 'no' && amount <= 1) {
    output.textContent = `So that's ${amount} ${burger}, no fries`
}