//* Deep Copy Object

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

const convertObj1ToString = JSON.stringify(obj1);
const obj2 = JSON.parse(convertObj1ToString);

obj2.firstName = 'Rana Vikram';
obj2.address.countryCode = 'Japan';

console.log(obj2.firstName);
console.log(obj1.firstName);

console.log(obj2.address.countryCode);
console.log(obj1.address.countryCode);
