import BannerImageSlider from "@/components/BannerImageSlider/BannerImageSlider";
import Footer from "@/components/Footer/Footer";
import Otp from "@/components/Otp/Otp";
import Review from "@/components/Review/Review";
import SimpleText from "@/components/SimpleText/SimpleText";
import React from "react";

const OtpPage = () => {
    return (
        <>
            <BannerImageSlider />
            <SimpleText text="Relish the flavours of Marriott from the comfort of your home, as we deliver signature delicacies from our award-winning restaurants, right to your doorstep." />
            <Otp
                transactionType="your-order"
                title={"Your Orders"}
                inputSize={2}
                redirectionURL="/mbow/your-order"
            />
            <Review />
            <Footer />
        </>
    );
};

export default OtpPage;
