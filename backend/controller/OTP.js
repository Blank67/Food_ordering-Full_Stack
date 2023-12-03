exports.sendOTP = async (req, res) => {
    const phoneNumber = req.body.phone;
    if (phoneNumber.length === 10) {
        res.status(200).json({ status: 200, msg: "OTP sent." });
    } else {
        res.status(400).json({ status: 400, msg: "Enter a valid number." });
    }
};
