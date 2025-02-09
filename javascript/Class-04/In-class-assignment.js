//* 

const teas = {
    name: 'Masala Tea',
    type: 'Green',
    caffine: 'none',
}

//* 

console.log(teas.name);;
console.log(teas.type);
console.log(teas["type"]);

//* 

teas.origin = 'India';

//* 

teas.caffine = "null";

//* 

delete teas.type;

//* 

console.log("origin" in teas);

//* 

for(let key in teas){
    console.log(`Key : ${teas[key]}`);
}

//* 

const myTeas = {
    masalaTea: {
        name: 'Masala Tea',
    },

    lemonTea: {
        name: 'Lemon Tea'
    },
}

//* 

const teaDeepCopy = JSON.parse(JSON.stringify(myTeas));
const teaCopy = {...myTeas}; //* create new object
const anotherTeaCopy = myTeas; //* point same object

myTeas.lemonTea.name = "Orange Tea";

console.log(teaCopy);
console.log(anotherTeaCopy);
console.log(teaDeepCopy);



