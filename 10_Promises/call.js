// "use strict"

// function SetUserName(username){
//     if(typeof(username) === 'string'){
//         this.username = username;
//         console.log("Perfect UserName !!");
//     }else{
//         console.log("ImPerfect UserName !!");
//     }
// }

// function CreateUser(username,email,pass){
//     SetUserName.call(username);
//     this.email = email;
//     this.pass = pass;
// }

// const User1 = new CreateUser("Shardendu Mishra",'shardendumishra@gmail.com',"abcd1234");
// console.log(User1);

////////////////////////////////////////////////////////////

// class User {
//     constructor (username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `123${this.password}abc`;
//     }

//     setterusername(){
//         return `I am ${this.username}`;
//     }
// }

// const User1 = new User("Shardendu Mishra","sm@gmail.com","iamshar22");

// console.log(User1);


// console.log(User1.username);
// console.log(User1.setterusername());

// console.log(User1.password);
// console.log(User1.encryptPassword());




// // // // // // can also be written as // // // // // //
// using prototyeps is better as it is more memory efficient
// it is felxible and it is a clear seperation 


function User(username,age,pass){
    this.username = username;
    this.age = age;
    this.pass = pass;
}

User.prototype.EncryptPass = function(){
    return `123${this.password}321`;
}

const Shardendu = new User("Shardendu Mishra","sm@gmail.com","1234abcd");

console.log(Shardendu);