const express = require("express");

const app = express();
const PORT = 4011;
const HOSTNAME  = 'localhost'; 


app.get('/', (req, res) => {
    res.send("<h1> hello world! <h1/>");
});

app.get('/about', (req, res) => {
    res.send("About page!");
});

app.listen(PORT, () => {
    console.log('server running at ${HOSTNAME}: ${PORT}');
});