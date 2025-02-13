import { PATH } from "@/constants/path";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="max-w-[120rem] w-full mx-auto h-[6rem] flex justify-between items-center p-4">
            <div>{/* <Logo /> */}</div>
            <div className="flex items-start gap-4">
                <Link to={PATH.cinema}>
                    <div className="py-3 px-4 text-link text-gray-50 cursor-pointer">
                        Cinemas
                    </div>
                </Link>
                <div className="flex items-center gap-2">
                    <Link
                        to="/login"
                        className="flex gap-2 py-3 px-4 cursor-pointer"
                    >
                        <img
                            src="/icons/logout.svg"
                            alt="화살표"
                            width={16}
                            height={16}
                        />
                        <span className="text-link text-gray-50">Logout</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
