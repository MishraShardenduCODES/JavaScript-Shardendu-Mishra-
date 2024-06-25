"use strict"

const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let NoError = true;
        if(NoError){
            resolve({User : "Shardendu Mishra",Pass : "2244"});
        }else{
            reject("Error : Request has Errors");
        }
    },1000);
})

async function ConsumePromiseFive(){
    const Response =  await PromiseFive;
    console.log(Response);
};

ConsumePromiseFive();