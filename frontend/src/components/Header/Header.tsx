import React from "react";
import headerLogo from "@/assets/header-logo.png";
import Image from "next/image";
import { Button } from "@mui/material";

const Header = () => {
    return (
        <header>
            <div
                className={`container d-flex align-items-center justify-between`}
            >
                <div className={``}>
                    <Image src={headerLogo} alt="" />
                </div>
                <Button variant="outlined">Login</Button>
            </div>
        </header>
    );
};

export default Header;
