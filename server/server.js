const mongoose = require('mongoose')
const express = require('express');
const app = express();
const dotenv = require('dotenv');
// Database
dotenv.config({path:'./config.env'})
const DB = process.env.DATABASE

mongoose.connect(DB).then(() => {
    console.log("connection successful");
}).catch((err) => console.log("Connection failed"))

// Adding middleware
const middleware = (req, res, next) =>{
    console.log(`Hello from middleware`);
    console.log("Some ranfpdmasd");
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

app.listen(3000, () => {
    console.log("server is listening at port 3000");
})
