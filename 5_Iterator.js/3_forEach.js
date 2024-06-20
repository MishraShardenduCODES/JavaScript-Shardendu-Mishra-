"use strict"

const clog = console.log;
const nl = "\n";


// const coding = [1,2,3,4,5,6,7,8,9];
// coding.forEach( function(val){
//     clog(val);
// });


// coding.forEach( (val) => {
//     clog(val);
// });

// coding.forEach( (val,idx,arr) => {
//     clog(`The value at index of ${idx} in the [ ${arr} ] is ${val}`);
// });

// const itm = [
//     {
//         LangName : "Python",
//         LangFile : "py",
//     },
//     {
//         LangName : "JavaScript",
//         LangFile : "js",
//     },
//     {
//         LangName : "Java",
//         LangFile : "jv",
//     },
//     {
//         LangName : "C++",
//         LangFile : "cpp",
//     },
// ]


// const values = itm.forEach( (val) => {
//     clog(`The Langauge name is ${val.LangName} and the file name is ${val.LangFile}`);
// });

// clog(values);

// const arr = [1,2,3,4,5,6,7,8,9,10];

// // const a = arr.filter( (val) => {
// //     return val > 5;
// // });

// const a = arr.filter( (val) => (
//     val > 5
// ));

// clog(a);

// const arr = [1,2,3,4,5,6,7,8,9,10];

// const MyNums = [];

// arr.filter( (val) => {
//     if(val % 2 === 0 ){
//         MyNums.push(val);
//     }
// });

// clog(MyNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// using if statement
// books.filter( (i) => {
//     if(i.genre === 'History'){
//         clog(`The available book is ${i.title} published in year ${i.publish}`);
//     }
// });

// saving in a cosntant
// const hstry = books.filter( (i) => i.genre === 'History');
// clog(hstry);

// direct printing
// clog(books.filter( (i) => i.genre === 'History'));

// const FltrBooks = books.filter( (i) => (i.publish > 1900 && i.edition < 2010));
// clog(FltrBooks);

// const FltrBooks = books.filter( (i) => { return i.publish > 1900 && i.edition < 2010});
// clog(FltrBooks);


const Number = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100
];

// const NewNumber = Number.map( (i) => i * 10 );
// clog(NewNumber);

// let flg = function prime(val){
//     for(let i = 2;i <= Math.sqrt(val);i++){
//         if(val % i == 0){
//             return false;
//         }
//         return true;
//     }
// };

// const NewNumber1 = Number.map( (i) => i * 10 ).map( (i) => i + 1).filter( (i) => prime(i) === true); 
// clog(NewNumber1);

// return odd numbers 
// const NewNumber1 = Number.map( (i) => i * 10 ).map( (i) => i + 1).filter( (i) => (i & 1)); 
// clog(NewNumber1);

// let flg = function prime(val){
//     for(let i = 2;i <= Math.sqrt(val);i++){
//         if(val % i == 0){
//             return false;
//         }
//         return true;
//     }
// };

// const NewNumber1 = Number
//                 .map( (i) => i * 10 )
//                 .map( (i) => i + 1)
//                 .filter( (i) => prime(i) === true);

// clog(NewNumber1);


// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const MyTotal = nums.reduce(function(acc,curr) {
//     return acc + curr;
// },/* acc = 0 initially */ 0);

// clog(MyTotal);

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const MyTotal = nums.reduce( (acc,curr) => curr + acc ,0);

// clog(MyTotal);


const List = [
    {   ItemName  : "iPhone", 
        ItemPrice :  99999,
    },
    {   ItemName  : "iPad", 
        ItemPrice :  89999,
    },
    {   ItemName  : "MacBooks", 
        ItemPrice :  179999,
    },
    {   ItemName  : "iPod", 
        ItemPrice :  19999, 
    },
];

const FinalPrice = List.reduce( (acc,curr) => acc + curr.ItemPrice,0);
clog(FinalPrice.toLocaleString('en-IN'));