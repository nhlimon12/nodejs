const http = require('http');
const port = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const myObject = {name : "Nahid Hasan Limon", age : 20, numbers : [10,20,30]};
    res.end(JSON.stringify(myObject));
});
server.listen(port);
console.log(`Server is listening on port: ${port}.`);
// const myObject = {name : "Nahid Hasan Limon", age : 20};
// console.log(myObject);
// const a = JSON.stringify(myObject);
// console.log(a);