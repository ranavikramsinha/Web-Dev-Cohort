//* .map polyfill

//* Return -> new array, element iteration , userFunction

const arr = [1, 2, 3, 4, 5];

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFunction){
        const result = [];

        for(let i = 0; i < this.length; i++){
            const value = userFunction(this[i], i);
            result.push(value);
        }

        return result;
    }
}

const mapArr1 = arr.myMap((value) => value * 5);
const mapArr2 = arr.map((value) => value * 10);

console.log(mapArr1);
console.log(mapArr2);