const path = require('path');
// console.log(path.basename(__dirname));
// console.log(path.basename(__filename));
const myPath = '/media/nh_limon/New Volume/Programming World/Node JS/Practices/Mission_NodeJS/Node_JS/Paths/1.js';
// console.log(path.basename(myPath));
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
// console.log(__dirname);
// console.log(path.parse(myPath));
// console.log(path.sep); // /
const myData = path.parse(myPath);
console.log(myData.root);
console.log(myData.base);
console.log(myData.dir);
console.log(myData.ext);
console.log(myData.name);