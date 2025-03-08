//* Using extends keyword for inheritance

class A{
    funInsideA(){
        console.log(`Function inside A`);
    }
}

class B extends A{
    funInsideB(){
        console.log(`Function inside B`);
    }
}

const p1 = new B();
p1.funInsideA();
p1.funInsideB();