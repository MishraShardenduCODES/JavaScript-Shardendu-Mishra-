"use strict"

const clog = console.log;
const nl = "\n";


// const user = {
//     username : "Shardendu Mishra",
//     price : "$10,000",
    
//     welcome : function(){
//         clog(`I am ${this.username} and The price of course is ${this.price}`);
//     }
// };

// user.welcome();
// clog(this.username); // undefined
// clog(this); // referencing nothing 


// function chai(){
//     let username = "Shardendu Mishra";
//     clog(this.username);
// };

// chai()

// const chai = function (){
//     let username = "Shardendu Mishra";
//     clog(this.username);
// };

// chai()

// const chai = () => {
//     let username = "Shardendu Mishra";
//     clog(this.username);
// };

// chai()

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()