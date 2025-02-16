Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`); //* function name
}

function greet(name){ //* name is parameter
    console.log(`Hello ${name}`);
    return greet;
}

greet('Aryan').describe(); //* Aryan is argument

//* normal function declaration

function add(a, b){ 
    return a + b;
}

//* function expression

const subtract = function(a, b){
    return a - b;
}

//* arrow function

const multiply = (a, b) => a * b;

//* high - order or first class function

function applyOperation(a, b, operation){
    return operation(a, b);
}

const result = applyOperation(5, 4, (x, y) => x / y);