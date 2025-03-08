//* Lexical Scoping & Closures

function outer(){
    let count = 0;

    function inner(){
        count++;
        return count;
    }

    return inner;
}

let num = outer();
console.log(num());
console.log(num());
console.log(num());