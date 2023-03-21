const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
router.use(cookieParser());
const authenticate = require("../middleware/authenticate");
require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello world from server auth.js .");
});

// this is registration route, since we are getting data from from end, we use POST method.
router.post("/register", async (req, res) => {
  // console.log(req.body);
  // res.json({message : req.body});
  try {
    // object destructuring
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
      return res.status(422).json({ Error: "Please fill all fields." });
    }
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ Error: "Email Id already exists." });
    } else if (password != cpassword) {
      return res.status(422).json({ Error: "Passwords not matching." });
    }
    const user = new User({ name, email, phone, work, password, cpassword });
    const userRegister = await user.save();
    res.status(201).json({ Message: "User registered succesfully." });
  } catch (err) {
    console.log(err);
  }
});

// Now to validate login creds

router.post("/login", async (req, res) => {
  // console.log(req.body);
  // res.send({message : "Awesome"})
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      console.log("HERE1");
      return res.status(400).json({ Error: "Please fill all fields." });
    }

    const userEmail = await User.findOne({ email: email });

    if (userEmail) {
      // Comparing both the hashes for password verification
      const isMatch = await bcrypt.compare(password, userEmail.password);
      // JWT part
      const token = await userEmail.generateAuthToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (!isMatch) {
        res.status(400).json({ Error: "Invalid credentials." });
      } else {
        res.status(201).json({ message: "Login successful." });
      }
    } else {
      res.status(400).json({ Error: "Invalid credentials." });
    }
  } catch (err) {
    console.log(err);
  }
});

// Route for about page
router.get("/about", authenticate, (req, res) => {
  // res.send("Hello world from about.");
  res.send(req.rootUser)
});

module.exports = router;
