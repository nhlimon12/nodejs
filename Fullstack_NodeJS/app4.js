// Basic Routing
// const http = require('http');
// const port = process.env.PORT || 8080;
// const server = http.createServer((req, res) => {
//     if (req.url == '/') {
//         res.setHeader('Content-Type', 'application/json')
//         res.end(JSON.stringify({name : "Limon", numbers : [100,200,300]}));
//     } else if (req.url == '/plain') {
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('This is a plain text');
//     } else {
//         res.writeHead(404, {'Content-Type' : 'text/html'});
//         res.end('<center><h1>404 Not Found</h1><center>');
//     }
// });
// server.listen(port);
// console.log(`Server is listening on port: ${port}.`);




// const http = require('http');
// const port = process.env.PORT || 8000;
// const sendPlainText = (req, res) => {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hi there!');
// };
// const sendJsonData = (req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify({name : "Limon", roll : 135735, numbers : [1,2,3,4,5]}));
// };
// const responseNotFound = (req, res) => {
//     res.writeHead(404, {'Content-Type' : 'text/html'});
//     res.end('<center>404 Not Found<center>');
// }
// const server = http.createServer((req, res) => {
//     if (req.url === '/') return sendPlainText(req, res);
//     if (req.url === '/json') return sendJsonData(req, res);
//     responseNotFound(req, res);
// });
// server.listen(port);
// console.log(`Server is running on port: ${port}.`);