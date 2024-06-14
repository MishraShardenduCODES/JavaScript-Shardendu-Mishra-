const str = "I am Shardendu Mishra I am from Kanpur";

//Iterator : str[Symbol.iterator]();

let it = str[Symbol.iterator]();
let ch = it.next();

while(!ch.done){
    console.log(ch.value);
    ch = it.next();
}

//At : str.at(idx);

let idx1 = 3;
let idx2 = -1;

console.log(`The string at ${idx1} index is ${str.at(idx1)}`);
console.log(`The string at ${idx2} index is ${str.at(idx2)}`);

//CharAt : .charAt(idx);

const str2 = "I am";
console.log(`The string is = ${str2.charAt(-1)}`); // ""
console.log(`The string is = ${str2.at(6)}`); // "undefined"
console.log(`The ASCII is  = ${str2.charCodeAt(0)}`);


// const icons = '☃★♲';
// console.log(icons.codePointAt(1));

// Concat
const a = "I am";
const b = "Shardendu Mishra";

console.log(a.concat(" ",b));
console.log(a.concat(", ",b));

// Ends With
const s1 = 'Cats are the best!';
const s2 = 'Is this a question?';

console.log(s1.endsWith('best!'));
console.log(s1.endsWith('best', 17));
console.log(s2.endsWith('question'));

// const str = "I am Shardendu Mishra I am from Kanpur";

// Includes
console.log(str.includes("Shardendu Mishra"));

// Index Of

const paragraph = "I think Ruth's dog is cuter than your dog!";
const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);

// Last Index 
const paragraph1 = "I think Ruth's dog is cuter than your dog!";
const searchTerm1 = 'dog';

console.log(`Index of the last ${searchTerm1} is ${paragraph1.lastIndexOf(searchTerm)}`);

// replace 
const paragraph2 = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph2.replace("Ruth's", 'my'));

// split
const str3 = 'The quick brown fox jumps over the lazy dog.';

const words1 = str3.split(' ');
console.log(words1[3]);

const chars = str3.split('');
console.log(chars[8]);

// Substr
const str4 = 'Mozilla';
console.log(str4.substring(1, 3));

// uppercase lowercase
const dotted = 'ISTanbuL';
console.log(`${dotted.toLowerCase()}`);
console.log(`${dotted.toUpperCase()}`);

// Length
const str5 = 'Life, the universe and everything. Answer:';
console.log(`${str} ${str5.length}`);