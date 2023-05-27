// [ -e script.js ] && rm script.js; tsc; mv main.js script.js; node script.js
// Using .forEach() or .filter()
// Write a function named onlyEven that returns evens numbers in an array.
function onlyEven(num_array) {
    let even_nums = num_array
        .filter(function (val) {
        val % 2 == 0;
    });
    return even_nums;
}
console.log("onlyEven([1,2,3,4,5,6,7]) => Expect [2,4,6]", onlyEven([1, 2, 3, 4, 5, 6, 7]) // => [2,4,6]
);
console.log();
// countIntegers – counts how many integers there are in an array
function countIntegers(num_array) {
    let count = num_array
        .reduce(function (accumulator, next) {
        if (Number.isInteger(next)) {
            return (accumulator + 1);
        }
        return accumulator;
    }, 0);
    return count;
}
console.log("countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4]) => expect 4", countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4]) // => 4
);
console.log();
// .map() oldie but goodie
// Write a function lengths that accepts a single parameter as an argument, namely an array of strings. 
// The function should return an array of numbers where each number is the length of the corresponding string. use .map
function lengths(str_array) {
    let lengths_array = str_array
        .map(function (val) {
        return val.length;
    });
    return lengths_array;
}
console.log("lengths(['my', 'cake', 'pudding']) => expect [2,4,7]", lengths(['my', 'cake', 'pudding']));
console.log();
// Write code using .map() to have the following input and output:
// getSquares – takes in an array of numbers and returns an array of their squares
function getSquares(num_array) {
    let squares = num_array
        .map(function (val) {
        return val ** 2;
    });
    return squares;
}
console.log("getSquares([1, 2, 3, 4, 5]) => expect [1, 4, 9, 16, 25]", getSquares([1, 2, 3, 4, 5]));
console.log();
// .map(), .filter() & .reduce()
var inventory = [
    { type: "machine", value: 5000 },
    { type: "machine", value: 650 },
    { type: "duck", value: 10 },
    { type: "furniture", value: 1200 },
    { type: "machine", value: 77 }
];
// 1. Write an expression using array iterator methods (like filter and reduce) to compute the total value of the machines in the inventory array.
var machines = inventory.filter(function (val) {
    return (val["type"] == "machine");
});
let totalValueOfMachines = machines
    .map(function (val) {
    return val["value"];
})
    .reduce(function (accumulator, next) {
    return (accumulator + next);
});
console.log("1. total value of machines => expect 5727", totalValueOfMachines);
console.log();
// 2. Get an array of all the machines with value over 500.
let machinesOver500 = machines
    .filter(function (val) {
    return (val["value"] > 500);
});
console.log("2. Machines over 500 => expect machine:5000, machine:650", machinesOver500);
console.log();
// 3. Get total value for each type printed on console separately or as an object(whatever you prefer).
var types = new Set();
inventory.forEach(function (val) {
    types.add(val["type"]);
});
let totalByType = Array.from(types)
    .map(function (type) {
    let typedTotal = inventory
        .filter(function (val) {
        return (val["type"] == type);
    })
        .reduce(function (accumulator, next) {
        accumulator["value"] += next["value"];
        return accumulator;
    }, { "type": type, "value": 0 });
    return typedTotal;
});
console.log("typed totals => expect [{machine:5727},{duck:10},{furniture:1200}]", totalByType);
console.log();
