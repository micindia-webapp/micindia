const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
    },
    token:{
        type:String
    },
    dob:{
        type:String,
        required:true
    },
    location:{
        type:String,
        default:""
    },
    admin:{
        type:Boolean,
        default:false
    },
    designation:{
        type:String,
        default:"Volunteer(Trainee)"
    }
})

module.exports = model('user', userSchema);