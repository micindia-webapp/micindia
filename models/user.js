const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    firstname:{
        type:String,
        required:[true, "Fill all required fields"],
        lowercase: true
    },
    lastname:{
        type:String,
        required:[true, "Fill all required fields"],
        lowercase: true
    },
    email:{
        type:String,
        required:[true, "Fill all required fields"],
        unique:true,
        lowercase: true
    },
    password:{
        type:String,
        required:[true, "Fill all required fields"],
    },
    token:{
        type:String
    },
    dob:{
        type:String,
        required:[true, "Fill all required fields"],
    },
    location:{
        type:String,
        default:"remote",
        lowercase: true
    },
    admin:{
        type:Boolean,
        default:false
    },
    designation:{
        type:String,
        default:"trainee"
    }
})

module.exports = model('user', userSchema);