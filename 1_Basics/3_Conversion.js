"use strict"

let scr = true;
console.log(typeof(scr));

let num = Number(scr);
console.log(typeof(num));

// let a = "33";
// let b = Number(a);

// console.log(typeof(a));
// console.log(typeof(b));

let a = "33b";
let b = Number(a);

console.log(typeof(a)); // string

console.log(typeof(b)); // number
console.log(b); // NaN

console.log(Number(true));
// true  => 1 => true
console.log(Number(false));
// false => 0 => false

let str = "";
console.log(Boolean(str));
// false

let str1 = "aba";
console.log(Boolean(str1));
// true