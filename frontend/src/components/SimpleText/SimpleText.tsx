import React from "react";

const SimpleText = (props: { text: string }) => {
    return <div className="text-center mt-4">{props.text}</div>;
};

export default SimpleText;
