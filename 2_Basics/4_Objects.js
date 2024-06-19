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

const NewUser = {
    email : "shardendumishra01@google.com";
    fullname : {
        nickname : {
            n_name = "Krishna",
        },
        actualname : {
            firstname = "Shardendu",
            lastname = "Mishra",
        },
    }
}

clog();