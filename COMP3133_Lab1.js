
//First Question
function capitlizeFirstLetter(inputString){
    return inputString.replace(/\w\S*/g, function(str){return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();})
}



// Second Question
function largestInteger(num1,num2,num3){
    return num1 > num2 && num1 > num3 ? num1
            : num2 > num1 && num2 > num3 ? num2
            : num3 > num1 && num3 > num2 ? num3
            : "The numbers provided are all equal";
}



// Third Question
function moveLast3Char(inputString){
    return inputString.substr(-3, 3) + inputString.substr(0, inputString.length - 3);
}

// Fourth Question
function getAngleType(angle){
    return angle >= 0 && angle < 90 ? "Acute angle"
         : angle == 90 ? "Right angle"
         : angle > 90 && angle < 180 ? "Obtuse angle"
         : angle == 180 ? "Straight"
         : "Please enter a valid Degree input";
}


console.log(capitlizeFirstLetter('Testing'));
console.log(largestInteger(5,5,5));
console.log(moveLast3Char('Python'));
console.log(getAngleType(180));

