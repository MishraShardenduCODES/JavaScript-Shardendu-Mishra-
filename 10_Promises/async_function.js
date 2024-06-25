"use strict"

// const PromiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let NoError = true;
//         if(NoError){
//             resolve({User : "Shardendu Mishra",Pass : "2244"});
//         }else{
//             reject("Error : Request has Errors");
//         }
//     },1000);
// })
// async function ConsumePromiseFive(){
//     try {
//         const response = await PromiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// async function ConsumePromiseFive(){
//     const Response =  await PromiseFive;
//     console.log(Response);
//     console.log(Response.User);
//     console.log(Response.Pass);
// };

// ConsumePromiseFive();


const ExtractDataFromDataBase = new Promise((resolve, reject) => {
    setTimeout(function() {
        let NoError = true;
        if (NoError) {
            resolve({ username: "Shardendu Mishra", age: 20 });
        } else {
            reject("The Request Has Been Rejected!");
        }
    }, 1000);
});

async function DataExtracted() {
    try {
        const databaseData = await ExtractDataFromDataBase;
        console.log(databaseData);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(`There has been an error: ${error}`);
    }
}

DataExtracted();