import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import CrownLogo from "../assets/crown.svg";
import { UserContext } from "../contexts/userContext";
import { signOutUser } from "../utils/firebase/firebase";
import CartIcon from "../components/CartIcon";

const Navigation = () => {

    const { currentUser } = useContext(UserContext);

    return (
        <>
            <div className="h-17.5 w-full flex justify-between mb-6 mt-2 px-3 relative">
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

                    {
                        currentUser ? (<span className="px-3.75 py-2.5 cursor-pointer hover:text-gray-800 font-bold text-gray-600 text-xl" onClick={signOutUser} >{" "}Sign Out{" "}</span>) : (
                            <Link className="px-3.75 py-2.5 cursor-pointer hover:text-gray-800 font-bold text-gray-600 text-xl" to="/auth">
                                Sign In
                            </Link>)
                    }

                    <Link className="px-3.75 py-2.5 cursor-pointer hover:text-gray-800 font-bold text-gray-600 text-xl" to="/cart">
                        <CartIcon />
                    </Link>
                </div>
            </div>

            <Outlet />
        </>
    );
};

export default Navigation;
