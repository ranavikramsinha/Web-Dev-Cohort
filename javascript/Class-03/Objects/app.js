const person = {
    firstName: 'Aryan',
    lastName: 'Sinha',
    hobbis: ['Coding', 'Walking'],
    getFullName: function(){
        return 'Aryan Sinha';
    },
    address: {
        houseNumber: 7,
        streetNumber: 7,
        countryCode: 'IN',
        state: 'PB',
    }
    
}

// console.log(person.firstName);
// console.log(person.getFullName());
// console.log(person.address.countryCode);

const remote = {
    brand: 'Amazon',
    color: 'Black',
    dimensions: {height: 5, width: 2},
    turnOff: function(){
        
    },
    volumeUp: function(){

    },
    volumeUp: function(){

    },
}

let p1 = {
    name: "Aryan Sinha",
}

let p2 = p1;

console.log(p1.name);
console.log(p2.name);

p2.name = "Rana Vikram Sinha";

console.log(p1.name);
console.log(p2.name);