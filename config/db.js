const {mongoose} = require("mongoose");

const { DB_URI } = process.env;

mongoose.connect(DB_URI)
.then(() => {
    console.log("DB Connection Success")
})
.catch((error) => {
    console.log("DB Connection Failed:", error);
    process.exit(1);
})