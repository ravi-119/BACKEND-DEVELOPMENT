const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url == '/') {
        res.write('<h1>hello everyone this is my firsr server </h>');
    } else if (req.url == '/about') {
        res.write('<h1> About page!</h>')
    }
    res.end();

})

server.listen(5001);

console.log('server is running successfully on 5001 port');


