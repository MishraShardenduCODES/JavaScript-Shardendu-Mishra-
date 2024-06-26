"use strict"

// constant value cant be changed , but why ????
// let pi = Math.PI;
// console.log(pi);


// because 
// console.log(Object.getOwnPropertyDescriptor(Math,'PI'));

// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }
  
// writable: false thus it cant be overwritten 
// its too hard codded in system



const  Shardendu_Mishra = {
    name  : "Shardendu Mishra",
    class : "12th",
    IsAlive : true,
    Blocker : function(){
        console.log("Make it so this isnt printed");
    }
}

// console.log(Object.getOwnPropertyDescriptor(Shardendu_Mishra,"name"));

Object.defineProperty(Shardendu_Mishra,"name",{
    writable : false,

});


console.log(Object.getOwnPropertyDescriptor(Shardendu_Mishra,"name"));

for (let [key, value] of Object.entries(Shardendu_Mishra)) {
    if (typeof value === 'function') {   
        continue;
    }
    console.log(`${key} : ${value}`);
}
