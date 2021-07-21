const express = require("express")
const cors = require("cors");

const app = express();

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit: "50mb"}));
app.use(cors());

const connectDB = require("./config/db")
connectDB();

app.listen(5000, () => {
    console.log("App running on port 5000");
})