// const http = require('http');
// const port = 3021;
// const hostname = 'localhost';
// const server = http.createServer((req, res) =>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Node Server is created by Ravi Yadav!');
// });

// server.listen(port, () =>{
//     console.log('server running at ${hostname}: ${port}');
// })





// const http = require('http');
// const port = 3022;
// const hostname = 'localhost';
// const server = http.createServer((req, res) =>{
//     res.statusCode = 500;
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify({error: "server error!"}));
// });

// server.listen(port, () =>{
//     console.log('server running at ${hostname}:${port}');
// })



// const http = require('http');
// const { json } = require('stream/consumers');
// const port = 3030;
// const hostname = 'localhost';
// const server = http.createServer((req, res) =>{
//     // Home page 
//     // About page 
//     // Contact page 
//     // Product page 
//     // Rest.......> Error 

//     if (req.url =='/'){
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Welcome to Nodejs Server by Ravi Yadav!');

//     } else if (req.url =='/home'){
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('About us page');

//     } else if (req.url =='/about'){
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Contact page');

//     } else if (req.url == '/product'){
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end(JSON.stringify({ ProductName: "Product 1"}));
//     } else {
//         res.statusCode = 500;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('server Error!');
//     }
// });

// server.listen(port, () =>{
//     console.log('server running at ${hostname}: ${port}');
// })







const http = require('http');
const { json } = require('stream/consumers');
const port = 3032;
const hostname = 'localhost';
const server = http.createServer((req, res) =>{
    // Home page 
    // About page 
    // Contact page 
    // Product page 
    // Rest.......> Error 

    if (req.url =='/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to Nodejs Server by Ravi Yadav!');

    } else if (req.url =='/home'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('About us page');

    } else if (req.url =='/about'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Contact page');

    } else if (req.url == '/product'){

        const options = {
            hostname: 'fakestoreapi.com',
            path: '/products/1',
            method: 'GET'
        }
        
        const apiReq = http.request(options, (apiRes) => {
            apiReq.on("data", (data) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end(data.toString());
            })
        
        });
        
        apiReq.on("error", () => {
            console.log(e);
        });
        
        apiReq.end();

    } else {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('server Error!');
    }
});

server.listen(port, () =>{
    console.log('server running at ${hostname}: ${port}');
})