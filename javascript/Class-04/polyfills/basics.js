Object.prototype.rana = function(){
    console.log("Rana");
}

const arr = [1, 2, 3];

if(!Array.prototype.fill){
    Array.prototype.fill = function(){
        
    }
}

arr.fill();

const str = "Aryan Sinha";

arr.length;

const obj = {
    firstName: 'Aryan',
    lastName: 'Sinha',
    gender: 'Male',
}

obj.rana();