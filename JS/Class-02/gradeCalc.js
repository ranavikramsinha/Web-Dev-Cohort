function calculateGrade(score){
    if(score >= 90 && score <= 100){
        return 'A';
    }
    else if(score >= 80){
        return 'B';
    }
    else if(score >= 70){
        return 'C';
    }
    else if(score >= 60){
        return 'D';
    }
    else{
        return 'F';
    }
}

// console.log(calculateGrade(95));

let grade = calculateGrade(95);
console.log(grade);