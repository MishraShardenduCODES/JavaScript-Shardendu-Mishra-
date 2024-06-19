"use strict"

const clog = console.log;
const nl = "\n";


// Return Statement
// num1 and 2 are not fixed to be numnbers they can be null string etc
// keep in mind 
function addNum(num1,num2){
    return num1+num2;
}


function addTwoNumbers(number1, number2){
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);


// rest parameter
function CalculationList(...num1){
    return num1;
}

// console.log(CalculationList(1,2,3,4,5,6,7,8));


// passing objects


const user = {
    name : "Shardendu Mishra",
    age : 18,
    college : "IIIT Dharwad",
}


function GreetStudent (obj){
    return `Hi ${obj.name} ,you are ${obj.age} years old and you are studying CSE in ${obj.college}`
}

// clog(GreetStudent(user));

