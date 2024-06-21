"use strict"

const clog = console.log ;
const nl = "\n" ;

/////////////////////////////////////////////////////////////////


// Browser at Windows object
console.log(window);

// At the next level is document
console.log(window.document);

// we can also access by 
console.dir(document);

// to get base URL of this page
console.log(document.baseURI);

// to get links 
console.log(document.links);

// to get a specific link
console.log(document.links[2]);


// to get the id of an element
document.getElementById('catlinks');

// to get element using class
document.getElementsByClassName('catlinks');

// <h1 id="firstHeading" class="firstHeading mw-first-heading"><span class="mw-page-title-main">Guido van Rossum</span></h1>
// to change HTML
document.getElementById('firstHeading').innerHTML = "<h1>Shardendu Mishra Malum h naaaaaaaaaaaaaaaaaa</h1>";

/////////////////////////////////////////////////////////////////