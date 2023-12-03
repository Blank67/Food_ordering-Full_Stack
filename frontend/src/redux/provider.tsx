"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const CustomReduxProvider = (props: any) => {
    return <Provider store={store}>{props.children}</Provider>;
};

export default CustomReduxProvider;
