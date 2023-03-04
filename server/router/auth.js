const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello world from server auth.js .");
});

router.post("/register", (req, res) => {
  console.log(req.body);
  // res.json({message : req.body});

  // object destructuring
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill all fields " });
  }
  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "Email Id already exists." });
      }
      const user = new User({ name, email, phone, work, password, cpassword });
      user
        .save()
        .then(() => {
          res.status(201).json({ message: "User registered succesfully." });
        })
        .catch((err) => {
          res.status(400).json({ error: "Failed to register." });
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
