let myArray = [1, 4, 2, 3, 5, 6];

function sum(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum;
}

console.log(sum(myArray));