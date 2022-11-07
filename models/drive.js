const { Schema, model } = require('mongoose');

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

module.exports.Drive =  model('drive', driveSchema);