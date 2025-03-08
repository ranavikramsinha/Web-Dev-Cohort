//* .filter polyfill

//* Return -> new array, element iteration , userFunction

const arr = [1, 2, 3, 4, 5];

if(!Array.prototype.myFilter){
    Array.prototype.myFilter= function(userFunction){
        const result = [];

        for(let i = 0; i < this.length; i++){
            if(userFunction(this[i])){
                result.push(this[i]);
            }
        }

        return result;
    }
}

const myArr1 = arr.filter((value) => value > 2);
const myArr2 = arr.myFilter((value) => value < 5);

console.log(myArr1);
console.log(myArr2);