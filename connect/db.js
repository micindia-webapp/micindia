import mongoose from "mongoose";

const { DB_URI } = process.env;

const connectDB = async () => {
    try{
        const uri = "";
        await mongoose.connect(DB_URI);
    }catch(error){
        console.log("DB Connection Failed:", error);
        process.exit(1);
    }

    console.log("DB Connection Success");
}

export default connectDB;