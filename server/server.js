const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello world from server.")
});

app.get('/about', (req, res) => {
    res.send("Hello world from about.")
});

app.get('/contact', (req, res) => {
    res.send("Hello world from contact.")
});

app.get('/signin', (req, res) => {
    res.send("Hello world from signin.")
});

app.get('/signup', (req, res) => {
    res.send("Hello world from signup.")
});

app.listen(3000, () => {
    console.log("server is listening at port 3000");
})

console.log("some random changes to see git");