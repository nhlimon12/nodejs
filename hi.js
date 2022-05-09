// #!/usr/bin/node
// console.log("This is Limon");
// console.log(process.argv);
// console.log(process.argv[0]);
// console.log(process.argv[1]);
// console.log(process.argv[2]);


// Looping over process.argv
// process.argv.forEach((value, index) => {
//     console.log(`Value: ${value}, Index : ${index}.`);
// });
// --
// process.argv.forEach((val) => {
//     console.log(val);
// });


// Explicitly get the extra args from command line:
// const args = process.argv.slice(2);
// console.log(args);
// console.log('---------');
// args.forEach((value) => {
//     console.log(value);
// });


// Practice::
// console.log(process.argv);
// process.argv.forEach((val, ind) => {
//     console.log(`Index : ${ind}, Value : ${val}`);
// });
// console.log("------------");
// const args = process.argv.slice(2);
// args.forEach((val) => {
//     console.log(val);
// });


// Use of minimist package:
// const args = require('minimist')(process.argv.slice(2));
// console.log(args.name);
// const args = require('minimist')(process.argv.slice(2));
// console.log(args.name);
// console.log(args.age);

// Testing:
// console.log(process.argv[2]);
// process.argv.forEach((val, ind) => {
//     console.log(`Value: ${val}, Index: ${ind}.`);
// });
// const args = require('minimist')(process.argv.slice(2));
// console.log(args);
// console.log(args.name);
// console.log(args.age);
// console.log(args.address);
// console.log(args._);


// const args = process.argv.slice(2);
const args = require('minimist')(process.argv.slice(2));
console.log(args);
console.log(`Name: ${args.name}`);
console.log(`Address: ${args.address}`);
console.log(`Roll: ${args.roll}`);
console.log(`Id: ${args.id}`);