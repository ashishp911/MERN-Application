const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
    },
    phone:{
        type : Number,
        required : true,
    },
    work:{
        type : String,
        required : true,
    },
    password:{
        type : String,
        required : true,
    },
    cpassword:{
        type : String,
        required : true,
    }
});


userSchema.pre("save", async function(next){
    const saltRounds = 12
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, saltRounds)
        this.cpassword = await bcrypt.hash(this.cpassword, saltRounds)
    }
    next();
})

const User = mongoose.model('USER', userSchema);

module.exports = User;