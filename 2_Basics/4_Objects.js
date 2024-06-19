"use strict"
const clog = console.log


const usr1 = new Object(); // singelton
const usr2 = {}; // non singelton
 
// clog(usr1);
// clog(usr2);

const user = {};

user.id = 122 ;
user.name  = "Shardendu Mishra";
user.isLogged = true;

// clog(user);
// clog(user.hasOwnProperty('id'));        // true
// clog(user.hasOwnProperty('name'));      // true
// clog(user.hasOwnProperty('isLogged'));  // true


// clog(user.hasOwnProperty('NotRealId')); // false


const NewUser = {
    email : "shardendumishra01@google.com",
    fullname : {
        nickname : {
            n_name : "Krishna",
        },
        actualname : {
            firstname : "Shardendu",
            lastname : "Mishra",
        },
    }
}

// clog(NewUser.fullname.nickname.n_name);


const obj1 = {1 : "a" , 2 : "b"};
const obj2 = {3 : "c" , 3 : "d"};
const obj3 = {4 : "e" , 5 : "f"};

// spread method 90% we use this
const obj4 = {...obj1,...obj2,...obj3};
// clog(obj4);

// treats all as different objects
const obj5 = {obj1,obj2,obj3};
// clog(obj5);

// Object.assign(target,source)

// The result is stored in obj1 and obj6 both
// const obj6 = Object.assign(obj1,obj2,obj3);
// clog(obj1);
// clog(obj6);

// The result is stored in obj6 and obj1 remains unchanged
// const obj6 = Object.assign({},obj1,obj2,obj3);
// clog(obj1);
// clog(obj6);


// passing objects in array
const Users = [
    {
        id: 1,
        email_id: "h@gmail.com",
    },
    {
        id: 2,  
        email_id: "h2@gmail.com",
    },
    {
        id: 3,  
        email_id: "h3@gmail.com", 
    }
];

// console.log(Array.isArray(Users)); // true

// console.log(Users[0]); // Output: { id: 1, email_id: "h@gmail.com" }
// console.log(Users[1]); // Output: { id: 2, email_id: "h2@gmail.com" }
// console.log(Users[2]); // Output: { id: 3, email_id: "h3@gmail.com" }

// console.log(Users[0].email_id); // Output: "h@gmail.com"
// console.log(Users[1].email_id); // Output: "h2@gmail.com"
// console.log(Users[2].email_id); // Output: "h3@gmail.com"

// console.log(Users);


// clog(Object.keys(Users));
// clog(Object.values(Users));
// clog(Object.entries(Users));



