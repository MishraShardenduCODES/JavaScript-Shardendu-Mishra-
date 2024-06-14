// "use strict"

// // Data Types =>
// //     1.) Primitive      (not passed by reference)  
// //     2.) Non-Primitive  (passed by reference)

// // 1.) Primitive (7 Data Types)
// let a = 34; // number
// let b = 12323344353234435323344353223n // big number
// let c = 'string'// string
// let d = true // bool
// let e = null // null
// let f = undefined // undefined
// let g = Symbol('123') // Symbol

// // let h = Symbol('123') 
// // console.log(h === g) 

// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(e));
// console.log(typeof(f));
// console.log(typeof(g));


// //2.) Non - Primitive (3 Data Types)


// let x = ["Shardendu","Mishra"]

// let y = 
// {
//     name: "Shardendu Mishra",
//     class: "12 S6"
// }

// let z = function(){
//     console.log("I am Shardendu Mishra")
// }


// console.log(typeof(x));
// console.log(typeof(y));
// console.log(typeof(z));


// let func = function(){
//     console.log("I am Shardendu Mishra")
// }
// let func2 = func
// func2 = function(){
//     console.log("I am Shardendu Mishra I am from Kanpur and imma beat you up g")
// }
// func() // I am Shardendu Mishra


// Objects : By reference
let userOne = {
    email : "abcd1234@gmail.com",
    name  : "Shardendu Mishra",
}

let userTwo = userOne;
userTwo.name = "Mishra Shardendu"

console.log(userOne);

// Array : By reference 
let arr = [1,2,3,4,5,6];

let arr2 = arr;
arr2[0] = 0;

console.log(arr);