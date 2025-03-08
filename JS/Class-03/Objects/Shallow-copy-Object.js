//* Shallow Copy Object

const obj1 = {
    firstName: 'Aryan',
    lastName: 'Sinha',
    age: 23,
    address: {
        houseNumber: 7,
        streetNumber: 7,
        countryCode: 'IN',
        state: 'PB',
    }
};

const obj2 = {...obj1}; //* Shallow Copy (...) Shallow Copy

console.log(obj2);

obj2.firstName = 'Rana Vikram';
obj2.address.countryCode = 'Japan';

console.log(obj2.firstName);
console.log(obj1.firstName);

console.log(obj2.address.countryCode);
console.log(obj1.address.countryCode);