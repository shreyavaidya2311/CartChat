const mongoose = require("mongoose");
const db = "mongodb+srv://shreyavaidya2311:root@cluster0.obgls.mongodb.net/CartChat?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            dbName: "STD",
        });

        console.log("MongoDB Connected...");
    } catch (error) {
        console.log("ERROR WHILE CONNECTING TO DB: " + error);
        process.exit(1);
    }
};

module.exports = connectDB;
