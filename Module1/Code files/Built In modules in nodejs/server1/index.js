const http = require('http');

const PORT = 3020;
const HOSTNAME = "localhost";

const server = http.createServer((req, res) => {
    res.end('node server is created by ravi');
});

server.listen(PORT, () => {
    console.log('server running at ${HOSTNAME}:${PORT}');
})

