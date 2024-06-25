"use strict"

// let str = "iamshardendumishra@22";
// console.log(str.toUpperCase());

// const User = {
//     username : "Shardendu Mishra",
//     age : 20,
//     school : "DPS Kalyanpur",
//     greeting : function(){
//         console.log(`Hi ${this.username}, how are you ?`);
//     }
// }

// console.log(User.username);

// the reason why undefined is printed is because greeeting doesent return anything 
// console.log(User.greeting());

//this doesent return anything as its just a fucntion call
// User.greeting();

/*
THE REASON WE USE OOPS IS BECUASE 
NOW IF WE WANT TO STORE THE DATA 
OF ANOTHER USER WE WILL HAVE TO 
INITIALISE ANOTHER USER LIKE IN 
LINE 6 BUT WITH OOPS WE CAN DO IT 
EASILY USING THIS KEYWORD
*/


// function User(UserName, UserAge, isLoggedIn) {
//     this.UserName = UserName;
//     this.UserAge = UserAge;
//     this.isLoggedIn = isLoggedIn;
// }

// const user1 = new User("Shardendu Mishra", 20, false);
// const user2 = new User("Shivika Mishra", 21, true);

// console.log(user1);
// console.log(user2);

function User(UserName, UserAge, isLoggedIn) {
    this.UserName = UserName;
    this.UserAge = UserAge;
    this.isLoggedIn = isLoggedIn;
}

const user1 = new User("Shardendu Mishra",20,true);
console.log(user1.constructor);

