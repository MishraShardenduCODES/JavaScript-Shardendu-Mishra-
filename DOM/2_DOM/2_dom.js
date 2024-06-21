// ONLY FOR BROWSER //
// ONLY FOR BROWSER //
// ONLY FOR BROWSER //
// ONLY FOR BROWSER //
// ONLY FOR BROWSER //
// ONLY FOR BROWSER //
// ONLY FOR BROWSER //
// ONLY FOR BROWSER //
// ONLY FOR BROWSER //
// ONLY FOR BROWSER //
// ONLY FOR BROWSER //
// ONLY FOR BROWSER //
// ONLY FOR BROWSER //
// ONLY FOR BROWSER //
// ONLY FOR BROWSER //


"use strict"

const clog = console.log;
const nl = "\n";

// get element by Id
document.getElementById('heading')

// show their id ,class etc
document.getElementById('heading').id
document.getElementById('heading').className
/*
Property: className is a property of the DOM element object.
Purpose: It is specifically designed to get or set the class attribute of an element.
*/

// getAttribute is used to get various 
document.getElementById('heading').getAttribute('class')
/*
Method: getAttribute is a general method available on all DOM elements to get the value of any attribute, not just the class attribute.
Purpose: It is used to retrieve the value of a specified attribute on the element.
*/

// setAttribute is used to set attribute
// set always overwrites
document.getElementById('heading').setAttribute('class' , 'sample_class')

// saving an id as const
const title =  document.getElementById('heading')
title.style.backgroundColor = 'purple'
title.style.padding = '10px'
title.style.borderRadius = '15px'
title.style.textAlign = 'center'
title.style.borderWidth = '5px'
title.style.borderStyle = 'solid'
title.style.borderColor = 'yellow'

// to get the text content 3 always
const title_text = document.getElementById('first-title')

// gives all the text written removing HTML tags
title_text.textContent

// gives all the text written including the HTML tags
title_text.innerHTML

// gives all the text written removing the hidden text
title_text.innerText

// selects first with attribute h2
document.querySelector('h2')

// selects first with all attribute 
document.querySelectorAll('h2')

// to get all ordered list
const MyURL = document.querySelector('ol')
console.log(MyURL)

MyURL.style.backgroundColor = 'black'
MyURL.style.borderRadius = '15px'
MyURL.style.fontSize = '2rem'
MyURL.style.padding = '2rem'

// const List = document.querySelectorAll('li')
// List[0].style.color = 'orange'
// List[1].style.color = 'red'
// List[2].style.color = 'green'
// List[3].style.color = 'blue'
// List[4].style.color = 'purple'
// List[5].style.color = 'yellow'
// List[6].style.color = 'grey'
 
const List = document.querySelectorAll('li') 
const myNewArray = Array.from(List)

myNewArray.forEach( (val) => {
    val.style.color = val.innerText;
});

// class are extracted by using .
const MyClass = document.querySelectorAll('.sub_class');
MyClass.forEach((element) => {
    element.style.fontSize = '2rem'; 
});

// change all h2 attribute
const _h2 = document.querySelectorAll('h2');

_h2.forEach( (heading2) => {
    heading2.style.fontSize = '2rem';
    heading2.style.color = 'red';
    heading2.style.textAlign = 'center';
})

// change all p attribute
const para = document.querySelectorAll('p')

para.forEach( (ParaElm) => {
    ParaElm.style.fontSize = '2rem'
    ParaElm.style.color = 'purple'
    ParaElm.style.textAlign = 'center'
});

// ONLY FOR BROWSER //
// ONLY FOR BROWSER //
// ONLY FOR BROWSER //
// ONLY FOR BROWSER //
// ONLY FOR BROWSER //
// ONLY FOR BROWSER //
// ONLY FOR BROWSER //
// ONLY FOR BROWSER //
// ONLY FOR BROWSER //
// ONLY FOR BROWSER //
// ONLY FOR BROWSER //
// ONLY FOR BROWSER //
// ONLY FOR BROWSER //
// ONLY FOR BROWSER //
// ONLY FOR BROWSER //