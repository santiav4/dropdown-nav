import React from "react";
import logo from "../assets/images/logo.svg";
import Navbar from "./Navbar";
const header = ({ handleMenu, isMenu, setIsMenu, menu, setMenu }) => {
    return (
        <header className=" bg-gray-100 flex items-center h-12 justify-between md:justify-between px-2 mb-4 relative md:w-screen">
            <img src={logo} alt="logo" className="mt-2" />
            <img
                className="md:hidden hover:cursor-pointer"
                src="../assets/images/icon-menu.svg"
                onClick={handleMenu}
            />
            <Navbar
                isMenu={isMenu}
                setIsMenu={setIsMenu}
                handleMenu={handleMenu}
                menu={menu}
                setMenu={setMenu}
            />
        </header>
    );
};

export default header;
