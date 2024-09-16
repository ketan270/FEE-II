function sum (a, b) { //a,b are parameters
    return a + b;
}

let a = 5; //a,b are arguments
let b = 10; //a,b are arguments

//function call
console.log(sum(a, b)); // 15 //a,b are arguments

//2. Default arguments
function sum (a = 1, b = 2) {
    return a + b;
}

let c = 5;
let d = 10;

console.log(sum(c)); // 7
console.log(sum()); // 3