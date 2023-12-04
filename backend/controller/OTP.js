exports.sendOTP = async (req, res) => {
    const phoneNumber = req.body.phone;
    if (phoneNumber.length === 10) {
        res.status(200).json({ status: 200, msg: "OTP sent." });
    } else {
        res.status(400).json({ status: 400, msg: "Enter a valid number." });
    }
};
exports.resendOTP = async (req, res) => {
    const phoneNumber = req.body.phone;
    if (phoneNumber.length === 10) {
        res.status(200).json({ status: 200, msg: "OTP sent." });
    } else {
        res.status(400).json({ status: 400, msg: "Enter a valid number." });
    }
};
exports.verifyOTP = async (req, res) => {
    const otp = req.body.otp;
    if (otp === "9999") {
        res.status(200).json({ status: 200, msg: "OTP verified." });
    } else {
        res.status(400).json({ status: 400, msg: "Enter a valid OTP." });
    }
};
