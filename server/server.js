const express = require('express');
const app = express();
const dotenv = require('dotenv');

// Database
dotenv.config({path:'./config.env'})
const PORT = process.env.PORT
require('./db/conn')
const User = require('./model/userSchema')
app.use(express.json());
app.use(require('./router/auth'))

app.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}`);
})
