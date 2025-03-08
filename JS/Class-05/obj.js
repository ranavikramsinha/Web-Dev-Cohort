const obj1 = {
    firstName: "Aryan",
    lastName: "Sinha",
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const obj2 = {
    firstName: "Ashi",
    lastName: "Singh",
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

//* DRY -> Do repeat yourself (rule)

console.log(obj1);
console.log(obj2);

console.log(obj1.getFullName);
console.log(obj2.getFullName);