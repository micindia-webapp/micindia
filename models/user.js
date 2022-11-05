import { Schema, model } from 'mongoose';

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
        required:true
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

const User = model('users', userSchema);
export default User;