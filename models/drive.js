import { Schema, model } from 'mongoose';

const driveSchema = new Schema({
    heading:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    images:{
        type:Array,
        required:true
    }
})

const Drive = model('drives', driveSchema);
export default Drive;