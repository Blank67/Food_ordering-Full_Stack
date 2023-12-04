"use client";

import { toggleLoader } from "@/redux/loader-slice/loaderSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const instance = axios.create({
    baseURL: "http://localhost:8080/",
});

export const get = async (url: string) => {
    try {
        const response = await instance.get(url);
        return response.data;
    } catch (error) {
        return error;
    }
};
export const post = async (url: string, payload: any) => {
    try {
        const response = await instance.post(url, payload);
        return response.data;
    } catch (error) {
        return error;
    }
};

export const AxiosInterceptor = (props: any) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const req = (request: any) => {
            dispatch(toggleLoader(true));
            return request;
        };
        const resInterceptor = (response: any) => {
            dispatch(toggleLoader(false));
            return response;
        };
        const errInterceptor = (error: any) => {
            //CAN ADD REDIRECTION LOGIC HERE
            console.log(error);
            dispatch(toggleLoader(false));
            return Promise.reject();
        };
        const reqInterceptor = instance.interceptors.request.use(req);
        const interceptor = instance.interceptors.response.use(
            resInterceptor,
            errInterceptor
        );
        return () => {
            instance.interceptors.response.eject(interceptor);
            instance.interceptors.request.eject(reqInterceptor);
        };
    }, [dispatch]);
    return props.children;
};
