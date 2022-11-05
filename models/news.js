import { Schema, model } from 'mongoose';

const newsSchema = new Schema({
    heading:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    date_from:{
        type:Date,
        required:true
    },
    date_to:{
        type:Date,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

const News = model('micnews', newsSchema);
export default News;