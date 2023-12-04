"use client";

import React, { useCallback, useEffect, useState } from "react";
import OTPInput from "otp-input-react";
import { Button } from "@mui/material";
import "./Otp.scss";
import countryCodes from "@/data-utils/country-codes.json";
import { ONLY_NUMBER_REGEX } from "@/utils/Regex";
import { post } from "@/utils/AxiosFetch";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "@/redux/auth-slice/authSlice";
import { RootState } from "@/redux/store";

interface OtpProps {
    title: string;
    inputSize: number;
    transactionType: string;
}
interface CommonOtpComponentProps {
    isd: string;
    phone: string;
    loginFormChangeHandler: (
        e: React.ChangeEvent<HTMLInputElement>
    ) => Promise<void>;
    showOTP: boolean;
    otp: string;
    setOTP: React.Dispatch<React.SetStateAction<string>>;
    resendOtp: () => void;
}
interface TakeawayAndGiftingComponentProps {
    type: string;
}
const CommonOtpComponent = (props: CommonOtpComponentProps) => {
    return (
        <>
            <div className="flex gap-4">
                <div className="w-20">
                    <select
                        className="border-bottom border-dark w-100"
                        placeholder="ISD"
                        value={props.isd}
                        onChange={props.loginFormChangeHandler}
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
                        value={props.phone}
                        onChange={props.loginFormChangeHandler}
                        name="phone"
                        pattern="^[0-9]*$"
                    />
                </div>
            </div>
            {props.showOTP && (
                <div className="flex gap-4">
                    <div className="w-20">
                        <Button
                            variant="outlined"
                            className="w-100"
                            onClick={props.resendOtp}
                        >
                            Resend
                        </Button>
                    </div>
                    <div className="flex-auto">
                        <OTPInput
                            value={props.otp}
                            onChange={props.setOTP}
                            inputClassName="border-bottom border-dark w-100"
                            inputSize={4}
                            otpType="number"
                            name="otp"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

const TakeawayAndGiftingComponent = (
    props: TakeawayAndGiftingComponentProps
) => {
    return (
        <>
            {props.type === "takeaway" ? (
                <>
                    <div>Select City</div>
                    <div>Select Hotel</div>
                </>
            ) : (
                <>
                    <div>Enter Pin Code</div>
                </>
            )}
            <div>Promo Code</div>
            <div>Continue</div>
        </>
    );
};

const Otp = (props: OtpProps) => {
    const [phone, setPhone] = useState("");
    const [otp, setOTP] = useState("");
    const [isd, setISD] = useState("");
    const [showOTP, setShowOTP] = useState(false);
    const dispatch = useDispatch();
    const login = useSelector((state: RootState) => state.auth.loginStatus);

    const resetStates = useCallback(() => {
        setISD("");
        setPhone("");
        setOTP("");
    }, []);
    const sendOtp = async (phone: string) => {
        const response = await post("/otp/send", { phone });
        return response.status;
    };
    const resendOtp = async () => {
        const response = await post("/otp/resend", { phone });
        if (response.status === 200) {
            setOTP("");
        }
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

    //USEEFFECTS
    useEffect(() => {
        const verifyOtp = async () => {
            const response = await post("/otp/verify", { phone, otp });
            if (response.status === 200) {
                console.log("VALID OTP");
                //SET LOGIN AND DATA AND REDIRECT ACCORDINGLY
                resetStates();
                dispatch(toggleLogin(true));
            } else {
                console.log("INVALID OTP");
            }
        };

        if (otp.length === 4) {
            verifyOtp();
        }
    }, [dispatch, otp, phone]);

    return (
        <section className="otp-section mt-14">
            <div className="container flex flex-col gap-5 w-50 p-4 pb-2">
                <div className="flex">
                    <div>{"<"}</div>
                    <div className="text-center flex-grow-1">{props.title}</div>
                </div>
                {login ? (
                    <TakeawayAndGiftingComponent type={props.transactionType} />
                ) : (
                    <CommonOtpComponent
                        isd={isd}
                        phone={phone}
                        loginFormChangeHandler={loginFormChangeHandler}
                        showOTP={showOTP}
                        otp={otp}
                        setOTP={setOTP}
                        resendOtp={resendOtp}
                    />
                )}
            </div>
        </section>
    );
};

export default Otp;
