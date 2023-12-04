const express = require("express");
const router = express.Router();
const { sendOTP, verifyOTP, resendOTP } = require("../controller/OTP");

router
    .post("/send", sendOTP)
    .post("/resend", resendOTP)
    .post("/verify", verifyOTP);

exports.router = router;
