// const a = "Nahid";
// console.log(a.split('i'));
// console.log(a.slice(1));
// let b = '/echo?input=limon';
// console.log(b.split('?'));
// console.log(b.split('?').slice(1));
// console.log(b.split('?').slice(1).join(''));
// console.log(typeof(b.split('?').slice(1).join('')));
// console.log('-------------');
// const cc = ['Limon', 'Rimon', 'Rafat', 'Rakib'];
// console.log(cc.slice(0));
// console.log(cc.slice(0).join(' '));
// console.log(a.split('').reverse());
// console.log(a.split('').reverse().join(''));
// const bb = [10,20,30];
// console.log(bb.reverse());
// console.log(bb.join(''));
// const x = [4,5,5,6];
// console.log(x.slice(2));

const a = "Limon";
if (a == "Limon") console.log("Hi");
console.log("Okay Cool");

// const querystring = require('querystring');
// const {input = ''} = querystring.parse('input=Limon');
// console.log(input);
// const year = querystring.parse('age=5544');
// console.log(year);
// const {age} = querystring.parse('age=5544');
// console.log(age);

// Array dest.
// const myArr = ["Limon", "Bangla", "Math"];
// const [x, y, z] = myArr;
// const [p, ...q] = myArr;
// console.log(p);
// console.log(q);
// console.log(x, y, z);
// --
// const [p,q,r] = "Nahid Hasan Limon".split(' ');
// console.log(p);
// console.log(q);
// console.log(r);
// --
// Ignore elements using commas
// const arr = [1,2,3,4];
// const [a, b, , c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);


// Works with any iterable on the right-side:
// const [a, b, c] = 'Limon';
// console.log(a);
// console.log(b);
// console.log(c);
// --
// const p = new Set([100,300,500]);
// console.log(p);
// const [x, y, z] = new Set([100,300,500]);
// console.log(x);
// console.log(y);
// console.log(z);


// Default values;
// const [a,b,c,d,e = "Hey",f = 'Bye'] = [100,200,300,400];
// console.log(a,b,c,d,e,f);




// Object destructuring:
// const myObject = {
//     name : "Limon",
//     roll : 135735,
//     age : 20
// }
// const {name, roll} = myObject;
// console.log(name);
// console.log(roll);
// console.log(age);
// --
// Single value taken:
// const {name} = myObject;
// console.log(name);
// Default value:
// const {name2 = "NH Limon", roll} = myObject;
// console.log(name2);
// console.log(roll);
// Using different variable name for property:
// const {name : n, age : a} = myObject;
// console.log(n);
// console.log(a);
// Use of rest param. in obj, des.
// const {name : aa, ...bb} = myObject;
// console.log(aa);
// console.log(bb);
// Use of colon and default value at once:
// const {name2 : ee = "Hi there", age} = myObject;
// console.log(ee);
// console.log(age);