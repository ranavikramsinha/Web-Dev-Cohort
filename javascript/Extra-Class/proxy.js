//* Proxy

const arr = [10, 20, 30, 40];

const customProxy = new Proxy(arr,{
  get(target, prop){

    const index = Number(prop);

    if (!isNaN(index) && index < 0){
      return target[Math.abs(index)];
    }

    return target[prop];
  },
});

console.log(customProxy[-1]); //* 20
