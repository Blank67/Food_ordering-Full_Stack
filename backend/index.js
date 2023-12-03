const express = require("express");
const server = express();
const mongoose = require("mongoose");
const mysql = require("mysql");

//CORS SETTING
const cors = require("cors");
server.use(cors());

//ACCESS REQ BODY SETTING
server.use(express.json());

//OTP ROUTE
const otpRouter = require("./routes/OTP.js");
server.use("/otp", otpRouter.router);

//DATABASE CONNECTION START
// async function main() {
//     await mongoose.connect("mongodb://127.0.0.1:27017/fullstack-food-ordering");
//     console.log("DB connected!");
// }
// main().catch((error) => {
//     console.log("ERROR connecting DB: ", error);
// });
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fullstack-food-ordering",
});
db.connect(function (error) {
    if (error) {
        console.log("ERROR connecting DB: ", error);
    } else {
        console.log("DB connected!");
    }
});
//DATABASE CONNECTION END

server.listen("8080", () => {
    console.log("server started!");
});
