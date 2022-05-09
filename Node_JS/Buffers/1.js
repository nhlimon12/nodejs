// > Different methods of creating buffers in Node JS 🙃
// const buf = new Buffer(20);
// const buf2 = new Buffer([1,2,3,4,5]);
// const buf3 = new Buffer("NH Limon");
// Preferred Ways:
// const buf4 = Buffer.alloc(20);
// const buf5 = Buffer.from([21,42,36,74,125]);
// const buf6 = Buffer.from("NH Limon");


// > Printing buffers and it's length 🙃
// console.log(buf);
// console.log(buf2);
// console.log(buf3);
// console.log(buf4);
// console.log(buf5);
// console.log(buf6);
// console.log(buf4.length);
// console.log(buf5.length);
// console.log(buf6.length);


// > Writing data to a buffer 🙃
// buf4.write("This is buf4");
// console.log(buf4);
// const len = buf4.write('NH');
// console.log(len);
// const len = buf4.write("My name is Nahid Hasan Limon");
// console.log("My name is Nahid Hasan Limon".length); // 28
// console.log(len); // 20


// > Reading data from a buffer 🙃
// buf4.write("Node JS");
// console.log(buf4.toString("utf-8"));
// buf4.write("This is NH Limon");
// const data = buf4.toString();
// console.log(data);


// > Convert Buffer to JSON 🙃
// buf4.write("Nahid Hasan Limon");
// const jsonData = buf4.toJSON(buf4);
// console.log(jsonData);
// console.log(jsonData.type);
// console.log(jsonData.data);


// > Checking if an instance is a buffer or not 🙃
// const x = [10,20];
// console.log(Buffer.isBuffer(buf4)); // true
// console.log(Buffer.isBuffer(buf5)); // true
// console.log(Buffer.isBuffer(buf6)); // true
// console.log(Buffer.isBuffer(x)); // false


// > Copying buffer 🙃
// const buf7 = Buffer.from("Nahid Hasan Limon");
// const buf8 = Buffer.alloc(25);
// buf7.copy(buf8);
// console.log(buf8.toString());
// const buf9 = Buffer.alloc(4);
// const buf10 = Buffer.alloc(10);
// buf10.write("Hello there!")
// buf10.copy(buf9);
// console.log(buf9);
// console.log(buf10);
// console.log(buf9.toString());
// console.log(buf10.toString());
// const buf11 = Buffer.from([10,100,1000]);
// const buf12 = Buffer.alloc(100);
// const buf13 = buf11.copy(buf12);
// console.log(buf11);
// console.log(buf12);


// > Slicing data from a buffer 🙃
// const buf14 = Buffer.from('NH Limon');
// const buf15 = buf14.slice(0,4);
// console.log(buf15.toString());
// const buf16 = Buffer.from([10,20,30,40,50]);
// const buf17 = buf16.slice(0,3);
// console.log(buf17[0]); // 10
// console.log(buf17[2]); // 30
// const buf18 = Buffer.alloc(5);
// const buf19 = buf18.slice(0,2);
// console.log(buf18); // <Buffer 00 00 00 00 00>
// console.log(buf19); // <Buffer 00 00>


// > Concatenate two or more buffers 🙃
// const buf20 = Buffer.from("Hello ");
// const buf21 = Buffer.from("there!");
// const buf22 = Buffer.concat([buf20, buf21]);
// console.log(buf22.toString());
// const buf23 = Buffer.alloc(4);
// const buf24 = Buffer.alloc(3);
// const buf25 = Buffer.alloc(13);
// const buf26 = Buffer.concat([buf23, buf24, buf25]);
// console.log(buf26);
// console.log(buf26.length);