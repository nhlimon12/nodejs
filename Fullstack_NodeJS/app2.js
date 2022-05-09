const http = require('http');
process.env.PORT = 3000;
const port = process.env.PORT || 7000;
const server = http.createServer((req, res) => {
    let content = `
    <h1>My first node js web server</h1>
    <h2>Node JS is a JavaScript runtime</h2>
    <button>Click Me</button>
    `;
    res.end(content);
});
server.listen(port);
console.log(`Server is listening on port : ${port}`);