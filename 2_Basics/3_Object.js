"use strict"
const clog = console.log

const mySym = Symbol("key1");

const usr = {
    name: "Shardendu",
    "full name": "Shardendu Mishra",
    [mySym]: "This is a symbol and it cant be normally passed",
    age: 18,
    location: "Jaipur",
    email: "Shardendu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// correct but it's doesnt work always
// clog(usr.name);

// always work
// clog(usr["name"]);

// clog(user.full name) or clog(user."full name") are both wrong

// work when the key is a given string too 
// clog(usr["full name"]);

// works with symbol too
// clog(usr[mySym]);

usr.email = "shardendumishra01@gmail.com";
// clog(usr["email"]);

usr.email = "shardendu02@gmail.com";
// clog(usr["email"]);

// gives error 
// Object.freeze(usr);
// usr.email = "MeghanaBKLhai@gmail.com";
// clog(usr["email"]);


usr.greeting = function(){
    clog("Hello I am Shardendu Mishra");
};

usr.greetingTwo = function(){
    clog(`I am ${this["full name"]}`);
};

usr.greeting();    
usr.greetingTwo(); 

// both return Function Anonymous
// clog(usr.greeting);
// clog(usr.greetingTwo);