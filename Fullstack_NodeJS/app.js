// Dynamic Routing:
// const http = require('http');
// const querystring = require('querystring');
// const port = process.env.PORT || 8000;
// const sendPlainText = (req, res) => {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hi there!');
// };
// const sendJsonData = (req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify({name : "Limon", roll : 135735, numbers : [1,2,3,4,5]}));
// };
// const respondEcho = (req, res) => {
//     const {input = ''} = querystring.parse(
//         // '/echo?input=limon'
//         // 'input=limon'
//         req.url.split('?').slice(1).join('') // http://localhost:8000/echo?input=limon
//     );
//     res.setHeader('Content-Type', 'application/json');
//     res.end(
//         JSON.stringify(
//             {
//                 normal : input,
//                 shouty : input.toUpperCase(),
//                 lengthCount : input.length,
//                 backwards : input.split('').reverse().join('')
//             }
//         )
//     );
// }
// const responseNotFound = (req, res) => {
//     res.writeHead(404, {'Content-Type' : 'text/html'});
//     res.end('<center>404 Not Found<center>');
// }
// const server = http.createServer((req, res) => {
//     if (req.url === '/') return sendPlainText(req, res);
//     if (req.url === '/json') return sendJsonData(req, res);
//     if (req.url.match(/^\/echo/)) return respondEcho(req, res);
//     responseNotFound(req, res);
// });
// server.listen(port);
// console.log(`Server is running on port: ${port}.`);




// const http = require('http');
// const querystring = require('querystring');
// const port = process.env.PORT || 3000;
// const sendPlainText = (req, res) => {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello there. I am Nahid Hasan Limon');
// };
// const sendJsonData = (req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify({name : "Nahid Hasan Limon", age : 20, address : "Barishal, Bangladesh"}));
// };
// const echoData = (req, res) => {
//     const {input = ''} = querystring.parse(
//         req.url.split('?').slice(1).join('')
//     );
//     res.setHeader('Content-Type', 'application/json')
//     res.end(JSON.stringify(
//         {
//             normal : input,
//             upperCase : input.toUpperCase(),
//             length : input.length,
//             backwards : input.split('').reverse().join('')
//         }
//     ))
// };
// const errorData = (req, res) => {
//     res.writeHead(404, {'Content-Type' : 'text/html'});
//     res.end('<center><h1>404 Not Found!</h1></center>');
// };

// const server = http.createServer((req, res) => {
//     if (req.url === '/') return sendPlainText(req, res);
//     if (req.url === '/json') return sendJsonData(req, res);
//     if (req.url.match(/^\/echo/)) return echoData(req, res);
//     errorData(req, res);
// });
// server.listen(port);
// console.log('Your server is running on port : ' + port);

console.log("Hi"); 