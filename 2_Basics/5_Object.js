"use strict"

const clog = console.log;
const nl = "\n";


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}


// de - constructing 
// course.courseInstructor


const {courseInstructor} = course
// console.log(courseInstructor);


const {courseInstructor : istr} = course
// console.log(istr);

// API looks like 

// {
//     a : "123";
//     b : "456";
//     c : "789";
// }

// {
//     "a" : "123",
//     "b" : "456",
//     "c" : "789",
// }