import React from "react";
import { Link, Outlet } from "react-router-dom";
import CrownLogo from "../assets/crown.svg";

const Navigation = () => {
    return (
        <>
            <div className="h-17.5 w-full flex justify-between mb-6 mt-2 px-3">
                {/* Logo */}
                <Link className="h-full w-26 p-4" to="/">
                    <img
                        src={CrownLogo}
                        alt="Logo"
                        className="h-full w-full object-contain"
                    />
                </Link>

                {/* Nav Links */}
                <div className="w-1/2 h-full flex items-center justify-end">
                    <Link className="px-3.75 py-2.5 cursor-pointer hover:text-gray-800 font-bold text-gray-600 text-xl" to="/shop">
                        Shop
                    </Link>
                    <Link className="px-3.75 py-2.5 cursor-pointer hover:text-gray-800 font-bold text-gray-600 text-xl" to="/auth">
                        SignIn
                    </Link>
                </div>
            </div>

            <Outlet />
        </>
    );
};

export default Navigation;
