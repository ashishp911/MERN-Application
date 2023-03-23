const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    // minlength: 8,
  },
  cpassword: {
    type: String,
    required: true,
    // minlength: 8,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  messages: [
    {
      message: {
        type: String,
        required: true,
      },
    },
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.pre("save", async function (next) {
  const saltRounds = 12;
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, saltRounds);
    this.cpassword = await bcrypt.hash(this.cpassword, saltRounds);
  }
  next();
});

//  We are generating token
userSchema.methods.generateAuthToken = async function () {
  try {
    let myToken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: myToken });
    await this.save();
    return myToken;
  } catch (err) {
    console.log(err);
  }
};

// Adding messages(Contact form)
userSchema.methods.addMessage = async function (message) {
  try {
    this.messages = this.messages.concat({message}) 
    await this.save();
    return this.messages;
  } catch (error) {
    console.log(error);
  }
}


const User = mongoose.model("USER", userSchema);

module.exports = User;
