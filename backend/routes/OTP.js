const express = require("express");
const router = express.Router();
const { sendOTP } = require("../controller/OTP");

router.post("/send", sendOTP);

exports.router = router;
