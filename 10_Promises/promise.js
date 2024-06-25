"use strict"

// Promsie One 
// const PromiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Promise One");
//         console.log("Request Completed");
//         resolve();
//     },1000);
// });

// PromiseOne.then(function(){
//     console.log("Promise Completed And Request Passed");
// }).catch(function(){
//     console.log("Promise Completed And Request Failed");
// });



///////////////////////////////////////////////////////////////



// Promise Two
// const PromiseTwo = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Promise Two");
//         console.log("Request Completed");
//         resolve();
//     },1000);
// }).then(function(){
//     console.log("Promise Completed And Request Passed");
// }).catch(function(){
//     console.log("Promise Completed And Request Failed");
// });



///////////////////////////////////////////////////////////////


// Promise Three
// const PromiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(error){
//             resolve({UserName : "Shardendu Mishra", email : "shardendumishra02@gmail.com"})
//             console.log("Promise Three (No Error)");
//         }else{
//             reject("The Request Was Rejected Due To An Error");
//             console.log("Promise Three (There are Errors)");
//         }
//     },1000);
// });

// PromiseThree.then(function(User) {
//     console.log(`The Name of the user is ${User['UserName']} and his e-mail is ${User['email']}`);
// }).catch(function(error){
//     console.log("There has been an error in the assessment, please try again");
//     console.log(error); 
// });

// Promise Four
const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!false){
            resolve({UserName : "Shardendu Mishra",PassWord : "IAmShardenduMishra@44"});
            console.log("Promise Four (No Error)");
        }else{
            reject("There is an Error in this receving Promise.");
            console.log("Promise Four (There are Errors)");
        }
    },1000);
});

// PromiseFour.then(function(User){
//     console.log(`The Name of the user is ${User['UserName']} and his e-mail is ${User['email']}`); 
// }).catch(function(error){
//     console.log("There has been an error in the assessment, please try again");
//     console.log(error); 
// });

PromiseFour.then((User) => {
    console.log("The Request Has Been Graned !!");
    console.log(User); 
    return User.UserName; 
}).then((UserName) => {
    console.log(UserName); 
}).catch((error) => { 
    console.log(error); 
}).finally(() => {
    console.log("The Task Has Been Completed And The Request Was Either Rejected or Completed.");
});