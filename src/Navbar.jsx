import React, { useState } from "react";
import CompanyList from "./CompanyList";
import Features from "./Features";
import Login from "./Login";
import arrowUp from "../assets/images/icon-arrow-up.svg";
import arrowDown from "../assets/images/icon-arrow-down.svg";

const Navbar = ({ handleMenu, menu }) => {
    const [isFeatures, setIsFeatures] = useState(false);
    const [isCompany, setIsCompany] = useState(false);

    const handleFeatures = () => {
        setIsFeatures((prev) => !prev);
    };

    const handleCompany = () => {
        setIsCompany((prev) => !prev);
    };
    return (
        <nav
            className={` w-8/12 h-full  absolute z-50    ${menu} md:static md:w-screen  bg-gray-100   `}>
            <div className="bg-gray-100 h-screen md:flex md:items-start md:h-full md:full ">
                <img
                    className="bg-gray-100 block ml-auto pt-3 pr-3 mb-7 hover:cursor-pointer md:hidden"
                    src="../assets/images/icon-close-menu.svg"
                    alt="icon-close"
                    onClick={handleMenu}
                />
                <div className="pl-6 md:flex bg-gray-100 md:h-full md:items-center md:grow   ">
                    <div onClick={handleFeatures}>
                        <div className=" flex items-baseline    text-gray-500 font-semibold text-lg mb-4 md:mb-0 md:mr-6 hover:cursor-pointer md:hover:text-black">
                            <h3 className="mr-2 ">Feaures </h3>
                            <img
                                className=""
                                width={15}
                                height={8}
                                src={isFeatures ? arrowUp : arrowDown}
                                alt="icon arrow"
                            />
                        </div>
                        {isFeatures && <Features />}
                    </div>

                    <div
                        onClick={handleCompany}
                        className="text-gray-500 font-semibold text-lg mb-4 md:mb-0 hover:cursor-pointer">
                        <div className=" flex items-baseline mb-4 md:mb-0 md:mr-6 md:hover:text-black ">
                            <h3 className="mr-2">Company</h3>
                            <img
                                className=""
                                width={15}
                                height={8}
                                src={isCompany ? arrowUp : arrowDown}
                                alt="icon arrow down"
                            />
                        </div>
                        {isCompany && <CompanyList />}
                    </div>
                    <div className=" flex items-baseline    text-gray-500 font-semibold text-lg mb-4 md:mb-0 md:mr-6  hover:cursor-pointer md:hover:text-black">
                        <h3 className="mr-2">Careers</h3>
                    </div>
                    <div className=" flex items-baseline    text-gray-500 font-semibold text-lg mb-4 md:mb-0 hover:cursor-pointer md:mr-6 md:hover:text-black">
                        <h3 className="mr-2">About</h3>
                    </div>
                </div>

                <Login />
            </div>
        </nav>
    );
};

export default Navbar;
