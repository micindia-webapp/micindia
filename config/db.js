const mongoose = require("mongoose");

const { DB_URI } = process.env;

const connectDB = async () => {
    try{
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
        console.log("DB Connection Success")
    }catch(error){
        console.log("DB Connection Failed:", error);
        process.exit(1);
    }
}

module.exports = connectDB;