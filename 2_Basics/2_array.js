"use strict"

const clog = console.log

const a = ["Sha", "rdendu" ];
const b = ["Mis", "ra"];

// push
a.push(b);
// clog(a); // [ 'Sha', 'rdendu', [ 'Mis', 'ra' ] ]

// concat
const c = a.concat(b);
// clog(c); // [ 'Sha', 'rdendu', 'Mis', 'ra' ]


// Spread
const d = [...a,...b];
// clog(d);


// Flat
const e = [1,2,3,[4,5,6],[7,[8,9,10]]];
const f = e.flat(Infinity);
// clog(f);

// isArray()
// clog(Array.isArray("Hitesh"));
// clog(Array.isArray(f));

// Array.from()
clog(Array.from("Shardendu Mishra"));
clog(Array.from({name : "Shardendu Mishra"}));
clog(Array.of("Shardendu Mishra","I am","You are",1));
