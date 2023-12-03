"use client";

import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import { Button } from "@mui/material";
import "./Otp.scss";
import countryCodes from "@/data-utils/country-codes.json";
import { ONLY_NUMBER_REGEX } from "@/utils/Regex";
import { post } from "@/utils/AxiosFetch";

interface OtpProps {
    title: string;
    inputSize: number;
    transactionType: string;
}

const Otp = (props: OtpProps) => {
    const [phone, setPhone] = useState("");
    const [otp, setOTP] = useState("");
    const [isd, setISD] = useState("");
    const [showOTP, setShowOTP] = useState(false);

    const sendOtp = async (phone: string) => {
        const response = await post("/otp/send", { phone });
        return response.status;
    };
    const loginFormChangeHandler = async (e: any) => {
        const { name, value } = e.target;
        if (name === "phone") {
            setPhone(value);
            if (value.length === 10) {
                const status = await sendOtp(value);
                if (status === 200) {
                    setShowOTP(true);
                }
            } else {
                setShowOTP(false);
                setOTP("");
            }
        } else {
            setISD(value);
            setPhone("");
            setShowOTP(false);
            setOTP("");
        }
    };

    return (
        <section className="otp-section mt-14">
            <div className="container flex flex-col gap-5 w-50 p-4 pb-2">
                <div className="flex">
                    <div>{"<"}</div>
                    <div className="text-center flex-grow-1">{props.title}</div>
                </div>
                <div className="flex gap-4">
                    <div className="w-20">
                        <select
                            className="border-bottom border-dark w-100"
                            placeholder="ISD"
                            value={isd}
                            onChange={loginFormChangeHandler}
                            name="isd"
                        >
                            {countryCodes.map((country, index) => (
                                <option
                                    key={index}
                                    value={`+${country.countrycode}`}
                                >
                                    {country.CountryName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex-auto">
                        <input
                            placeholder="Enter Your Mobile Number"
                            className="border-bottom border-dark w-100"
                            maxLength={10}
                            value={phone}
                            onChange={loginFormChangeHandler}
                            name="phone"
                            pattern="^[0-9]*$"
                        />
                    </div>
                </div>
                {showOTP && (
                    <div className="flex gap-4">
                        <div className="w-20">
                            <Button variant="outlined" className="w-100">
                                Resend
                            </Button>
                        </div>
                        <div className="flex-auto">
                            <OTPInput
                                value={otp}
                                onChange={setOTP}
                                inputClassName="border-bottom border-dark w-100"
                                inputSize={4}
                                otpType="number"
                                name="otp"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Otp;
