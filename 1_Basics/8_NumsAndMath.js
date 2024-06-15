"use strict"
const clog = console.log;

const num = 400;
// console.log(typeof(num));
// console.log((num));

const n = new Number(500); 
// console.log(typeof(n));
// console.log((n));

const a = 12333.893;
// console.log(a.toFixed(3)); // 12333.893
// console.log(a.toFixed(2)); // 12333.89
// console.log(a.toFixed(1)); // 12333.9
// console.log(a.toFixed());  // 12334

const b = 1234.896;
// console.log(b.toPrecision(7));
// console.log(b.toPrecision(6));
// console.log(b.toPrecision(5));
// console.log(b.toPrecision(4));
// console.log(b.toPrecision(3));
// console.log(b.toPrecision(2));

const c = 10000000;
// clog(c.toLocaleString('en-IN'));
// clog(c.toLocaleString('en-US'));


// Maths - Methods

// Number.isFinite()
// clog(Number.isFinite(1  / 0)); // false
// clog(Number.isFinite(10 / 5)); // true
// clog(Number.isFinite(0  / 0)); // fasle

// Number.isNaN() = only true for NaN 
let d = "Hello ";

// clog(Number.isNaN(d));        // false
// clog(Number.isNaN(NaN));      // true


// isNan() only false for actual numbers
let e = "Hello ";

// clog(isNaN(e));        // true
// clog(isNaN(NaN));      // true

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Math

// clog(Math.E);
// clog(Math.PI);
// clog(Math.sqrt(4));
// clog(Math.sqrt(8));
// clog(Math.ceil(4.1));
// clog(Math.floor(4.9));


// clog(Math.log10(10));
// clog(Math.log(Math.E));
// clog(Math.max(2,3,4,5,6,7));
// clog(Math.min(2,3,4,5,6,7));
// clog(Math.round(4.6))
// clog(Math.round(4.5))
// clog(Math.round(4.4))


// Math.random()

// const max = 20;
// const min = 10;

// clog(Math.floor(Math.random() * (max - min + 1)) + min);

