const fs = require('fs');
console.log("Hello There!");
fs.writeFileSync('myfile.py', 'print("Hello Limon")');
console.log("Hello Limon");
fs.writeFileSync("myfile.txt", "This is a data");
fs.appendFileSync('myfile.txt', " which is written by NH Limon");
const d = fs.readFileSync('myfile.txt');
console.log(d.toString());


// Async way
fs.writeFile('myfile.txt', "Hi there", (err, data) => {
    console.log('File write successfully');
});
console.log("hey!");
fs.appendFile('myfile.txt', ", NH Limon", (err, data) => {
    console.log(err);
});
fs.readFile("myfile.txt", (err, data) => {
    if(err) {
        console.log("An error occured");
    } else {
        console.log(data.toString());
    }
});


fs.mkdir('/media/nh_limon/New Volume1/Programming World/Node JS/Practices/Mission_NodeJS/Node_JS/FS/NH_Limon', (err) => {
    console.log(err);
});

const myPath = '/media/nh_limon/New Volume1/Programming World/Node JS/Practices/Mission_NodeJS/Node_JS/FS/NH_Limon';
fs.rmdir(myPath, (err) => {
    console.log(err);
});

fs.mkdir('Hello', (err) => {
    console.log(err);
});
fs.rmdir('Hello', (err) => {
    console.log(err);
});


fs.rm('myfile.py', (err) => {
    console.log(err);
});

fs.rename('Hi', 'Hey', (err) => {
    console.log(err);
});

fs.renameSync('Hey', 'Limon');


// Practices:
// Writing a file in sync and async way:
fs.writeFile('hello.txt', 'This is hello.txt file', (err, data) => {
    if(err) {
        console.log('An error occured!😀');
    } else {
        console.log('File created successfully');
    }
});
--
fs.writeFileSync('hi.txt', 'Hi. I am Limon');


// Append data to the file in sync and async way:
fs.appendFile('hello.txt', ' This is NH Limon from BD', (err) => {
    console.log(err);
});
fs.appendFileSync('hi.txt', 'Hey Hey Hey! How are you?');


// Read data from the file in sync and async way:
const data = fs.readFileSync('hello.txt');
console.log(data.toString());
fs.readFile('hi.txt', (err, data) => {
    console.log(data.toString());
});


// Creating directory in sync and async way:
fs.mkdir('NH_Limon', (err) => {
    console.log(err);
});
fs.mkdirSync('Limon2');


// Removing directory in sync and async way:
fs.rmdir('NH_Limon', (err) => {
    console.log(err);
});
fs.rmdirSync('Limon2');


// Removing file in sync and async way:
fs.rm('hi.txt', (err) => {
    console.log(err);
});
fs.rmSync('hello.txt');


// Rename file in sync and async way:
fs.rename('1.js', 'app.js', (err) => {
    console.log(err);
});
fs.renameSync('myfile.txt', 'my_file.txt');