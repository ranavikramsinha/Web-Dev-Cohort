//* forEach prototype

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFunction){
        const originalArr = this; //* this -> pointing to current object

        for(let i = 0; i < originalArr.length; i++){
            userFunction(originalArr[i], i);
        }
    }
}

const arr = [1, 2, 3, 4, 5];

//* Error: forEach function does not exist on arr variable

//* Real Signture ko samjo -> No return, function input, value, index
//* calls my function for every value

// const returning = arr.forEach(function (value, index){
//     console.log(`Value at Index ${index} is ${value}`);
// });


// console.log(`Return is ${returning}`);

arr.myForEach(function (value, index){
    console.log(`(myForEach) Value at Index ${index} is ${value}`);
});

