const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello world from server auth.js .");
});

// this is registration route, since we are getting data from from end, we use POST method.
router.post("/register", async (req, res) => {
    console.log(req.body);
    // res.json({message : req.body});
  
    // object destructuring
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
      return res.status(422).json({ Error: "Please fill all fields." });
    }
    try{
        const userExist = await User.findOne({ email: email }) 
        if (userExist) {
            return res.status(422).json({ Error: "Email Id already exists." });
          }
        const user = new User({ name, email, phone, work, password, cpassword });  
        const userRegister = await user.save();
        res.status(201).json({ Message: "User registered succesfully." });  

    }catch(err){
        console.log(err);
    }

  });

// Now to validate login creds

router.post("/signin", async (req, res) => {
    // console.log(req.body);
    // res.send({message : "Awesome"})
    try {
        const { email, password } = req.body;
        if ( !email || !password){
            res.status(400).json({ Error: "Please fill all fields." });
        }
        
        const userEmail = await User.findOne({ email: email })

        if (!userEmail){
            res.status(400).json({ Error: "Invalid credentials." });
            // console.log("Invalid credentials");
        }
        else{
            res.status(201).json({"message" : "Login successful."});
        } 

    } catch (err) {
        console.log(err);
    }

})
module.exports = router;
