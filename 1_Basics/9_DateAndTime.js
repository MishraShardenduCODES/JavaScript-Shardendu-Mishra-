"use strict"
const clog = console.log

// Date and Time 

// clog(date);                     // confusing date
// clog(date.toString());          // better format 
// clog(date.toLocaleDateString()) // only date
// clog(date.toLocaleTimeString()) // only time
// clog(date.toTimeString())       // universal time
// clog(date.toUTCString())        // date and time

// let date = new Date(2023,0,12);
// clog(date.toDateString());      // only date , you can change format

// let date_time = new Date("2023-01-14");
// clog(date_time.toLocaleString());    // date and time , you can change format

// let currentTime = Date.now();
// console.log(currentTime);

// let date = new Date();
// console.log(date.getTime());

// let newDate = new Date();

// clog(newDate); // prints current date and universal time
// clog(newDate.getDate()); // returns date
// clog(newDate.getMonth() + 1); // returns month
// clog(newDate.getFullYear()); // returns year
// clog(newDate.get); // returns date


// let newDate = new Date();

// let formattedDate = newDate.toLocaleString('default', {
//     weekday: "long",
//     year: '2-digit',
//     month: "long",
// });

// console.log(formattedDate);