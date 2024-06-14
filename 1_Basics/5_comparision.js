"use strict"

// js converts string to number
// console.log("2" > 0);
// console.log("02" > 0);

// == is not strict comparision operator   // it doesent check data type 
// === is strict comparision operator      // it checks data type too 

// true 
// console.log(null >= 0);
// console.log(null <= 0);
// because '< and >' do type conversion and convert null to 0 

//false
// console.log(null == 0);
// '==' doesent convert

// all false
console.log(undefined >= 0);
console.log(undefined <= 0);
console.log(undefined == 0);