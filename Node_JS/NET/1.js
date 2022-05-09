const net = require('net');
const server = net.createServer();
// server.listen(8000, () => {
//     console.log('Server is listening on port 8000');
// });
// console.log(server);

server.listen(9000,() => {
    console.log(`Server is listening on ${server.address().port}`);
})