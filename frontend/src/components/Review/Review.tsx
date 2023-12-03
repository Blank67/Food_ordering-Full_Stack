import React from "react";
import "./Review.scss";

const Review = () => {
    return (
        <section className="mt-14">
            <div className="container px-5 review">
                <div className="bg-theme flex justify-between rounded py-10 px-40">
                    <div>Image</div>
                    <div>Text</div>
                    <div>Button</div>
                </div>
            </div>
        </section>
    );
};

export default Review;
