const express = require('express');
const app = express();
const dotenv = require('dotenv');

// Database
dotenv.config({path:'./config.env'})
const PORT = process.env.PORT
require('./db/conn')

// Adding middleware
const middleware = (req, res, next) =>{
    console.log(`Hello from middleware`);
    // About will only load when next() function will be called, (used for authentication)
    next(); 
} 


app.get('/', (req, res) => {
    res.send("Hello world from server.")
});

app.get('/about', middleware,(req, res) => {
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

app.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}`);
})
