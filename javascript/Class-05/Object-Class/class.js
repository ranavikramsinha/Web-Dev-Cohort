class Person1{
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }

    getFullName(){
        return `${this.fname} ${this.lname}`;
    }
}

const p1 = new Person1('Aryan', 'Sinha');
const p2 = new Person1('Ashi', 'Singh');

console.log(p1);
console.log(p2);

console.log(p1.getFullName());
console.log(p2.getFullName());

//* Default Constructor

class Person2{
    //* No constructor defined, so a default constructor is used.
}
  
const p3 = new Person2();
console.log(p3); //* Person {}

//* Parameter Constructor

class Person3{
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }

    getFullName(){
        return `${this.fname} ${this.lname}`;
    }
}

const p4 = new Person3('Sourav', 'Pandey');
console.log(p4);
console.log(p4.getFullName());
  