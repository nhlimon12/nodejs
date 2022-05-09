// Method 1 Of Creating Buffer:
// const buf = new Buffer(20);
// console.log(buf);

// Method 2 Of Creating Buffer:
// const buf2 = new Buffer([10,20,30,40]);
// console.log(buf2);

// Method 3 Of Creating Buffer:
// const buf3 = new Buffer("Nahid Hasan Limon", "utf-8");
// console.log(buf3);


// Writing data to a buffer:
// const buf = Buffer.alloc(10);
// const len = buf.write("Nahid Hasan Limon");
// console.log(buf.length);
// console.log(buf);
// console.log(len);


// Convert Buffer To JSON
// const buf = new Buffer("Nahid Hasan Limon");
// const bufToJSON = buf.toJSON(buf);
// console.log(bufToJSON);
// console.log(bufToJSON.type);
// console.log("------");
// console.log(bufToJSON.data); 
/*
[
    78,  97, 104, 105, 100, 32,
    72,  97, 115,  97, 110, 32,
    76, 105, 109, 111, 110
  ]
*/


// Different methods of creating buffers in NODE JS

// First method: Uninitiated octates:
// const buf = Buffer.alloc(12);
// console.log(buf);

// Second method : Using an array:
// const buf2 = Buffer.from([100,200,300,400]);
// console.log(buf2);

// Third method : Using a string:
// const buf = Buffer.from("Bangladesh is a nice country to look at...");
// console.log(buf);


// Writing data into a buffer
// const buf = Buffer.alloc(20);
// console.log(buf); // <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
// console.log(buf.length);
// buf.write("This is a text");
// const len = buf.write("I am writing");
// console.log(len);
// console.log(buf); // <Buffer 54 68 69 73 20 69 73 20 61 20 74 65 78 74 00 00 00 00 00 00>


// Convert Buffer Into JSON Data
// const myBuffer = Buffer.alloc(50);
// myBuffer.write("Buffer is an important concept in node js.");
// const bufToJSON = myBuffer.toJSON(myBuffer);
// console.log(bufToJSON);
// console.log(bufToJSON.type);
// console.log(bufToJSON.data);


// Reading data from a buffer:
// const buf = Buffer.alloc(50);
// buf.write("This is a string");
// buf.write("This is a string also😃");
// const reading = buf.toString("utf-8");
// console.log(reading);


// Checking if an object is a buffer or not:
// const a = "Hello";
// console.log(Buffer.isBuffer(buf)); // true
// console.log(Buffer.isBuffer(a)); // false


// console.log(buf.length);


// Copy buffer:
// const buf = Buffer.from("Hello there!");
// const buf2 = Buffer.alloc(20);
// buf.copy(buf2);
// const data = buf2.toString("utf-8");
// console.log(data);
// const firstBuffer = Buffer.alloc(30);
// const dlen = firstBuffer.write("I am writing to the buffer.");
// console.log(dlen);
// console.log(firstBuffer);
// console.log(firstBuffer.length);
// const firstData = firstBuffer.toString("utf-8");
// console.log(firstData);
// console.log('Copying process starting............');
// // Copying process
// const secondBuffer = Buffer.alloc(firstBuffer.length);
// firstBuffer.copy(secondBuffer);
// console.log(secondBuffer);
// console.log(secondBuffer.length);
// const secondData = secondBuffer.toString("utf-8");
// console.log(secondData);


// Slicing data from a buffer:
// const buf1 = Buffer.alloc(50);
// buf1.write("Node js is a javascript runtime environment.");
// const buf2 = buf1.slice(0,4);
// console.log(buf2.toString());


// Concatenate two buffers:
// const b1 = Buffer.from("Nahid Hasan Limon ");
// const b2 = Buffer.from("is a good boy.");
// const b3 = Buffer.concat([b1, b2]);
// console.log(b3.toString("utf-8")); // Nahid Hasan Limon is a good boy.