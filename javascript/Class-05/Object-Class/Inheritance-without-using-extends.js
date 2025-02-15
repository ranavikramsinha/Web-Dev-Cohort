//* Using without extends keyword for inheritance

class A {
    funInsideA() {
      console.log('Function inside A');
    }
  }
  
  class B {
    funInsideB() {
      console.log('Function inside B');
    }
  }
  
  Object.setPrototypeOf(B.prototype, A.prototype);
  Object.setPrototypeOf(B, A);
  
  const p1 = new B();
  p1.funInsideA();
  p1.funInsideB();
  