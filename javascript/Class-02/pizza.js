let numberOfGuest = 0;

let pizzaSize;

if(numberOfGuest <= 0){
    pizzaSize = "No pizza needed";
}
else if(numberOfGuest <= 2){
    pizzaSize = "Small";
}
else if(numberOfGuest <= 5){
    pizzaSize = "medium";
}
else{
    pizzaSize = "large";
}

console.log(pizzaSize);