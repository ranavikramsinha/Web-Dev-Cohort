//* 

let teas = ["green tea", "black tea", "white tea", "earl grey tea", "herbal tea"];

//* 

teas.push("oolong tea");

//*

// teas.splice(2, 1);

let index = teas.indexOf("white tea");

if(index !== -1){
    teas.splice(index, 1);
}

console.log(teas);

//* 

// teas.filter(function(tea){
//     return tea !== "herbal tea";
// });

const caffinatedTeas = teas.filter(tea => tea !== "herbal tea");

console.log(caffinatedTeas);

//* 

teas.sort((a, b) => a.localeCompare(b));

console.log(teas);

//* 

// for(let i = 0; i < teas.length; i++){
//     console.log(teas[i]);
// }

teas.forEach(tea => console.log(tea));

//* 

let caffinatedMyTeas = 0;

teas.forEach(tea => {
    if(tea !== "herbal tea"){
        caffinatedMyTeas++;
    }
});

console.log(caffinatedMyTeas);

//* 

let newTeas = [];

for(let i = 0; i < teas.length; i++){
    newTeas.push(teas[i].toUpperCase());
}

console.log(newTeas);

//* 

// let longestTea = "";

// for(let i = 0; i < teas.length; i++){
//     if(teas[i].length > longestTea.length){
//         longestTea = teas[i];
//     }
// }

// console.log(longestTea);

longestTea = teas.reduce((a, b) => a.length > b.length ? a : b);

console.log(longestTea);

//* 

let reverseTeas = [];

for(let i = teas.length - 1; i >= 0; i--){
    reverseTeas.push(teas[i]);
}

console.log(reverseTeas);
