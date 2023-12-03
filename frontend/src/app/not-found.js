"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NotFound = () => {
    const navigate = useRouter();
    useEffect(() => {
        navigate.push("/mbow");
    }, []);
    return (
        <div className="flex justify-center align-items-center h-100vh">
            The page could not be found. Redirecting to home page......
        </div>
    );
};

export default NotFound;
