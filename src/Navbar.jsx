import React, { useState } from "react";
import CompanyList from "./CompanyList";
import Features from "./Features";
import Login from "./Login";

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
            className={` w-8/12 h-full  absolute z-50    ${menu} md:static md:w-screen    `}>
            <div className="bg-white h-screen md:flex md:items-start md:h-full md:full ">
                <img
                    className="bg-white block ml-auto pt-3 pr-3 mb-7 hover:cursor-pointer md:hidden"
                    src="../assets/images/icon-close-menu.svg"
                    alt="icon-close"
                    onClick={handleMenu}
                />
                <div className="pl-6 md:flex bg-white md:h-full md:items-center md:grow  ">
                    <div onClick={handleFeatures}>
                        <div className=" flex items-baseline    text-gray-500 font-semibold text-lg mb-4 md:mb-0  hover:cursor-pointer">
                            <h3 className="mr-2">Feaures </h3>
                            <img
                                className=""
                                width={15}
                                height={8}
                                src={
                                    isFeatures
                                        ? "../assets/images/icon-arrow-up.svg"
                                        : "../assets/images/icon-arrow-down.svg"
                                }
                                alt="icon arrow"
                            />
                        </div>
                        {isFeatures && <Features />}
                    </div>

                    <div
                        onClick={handleCompany}
                        className="text-gray-500 font-semibold text-lg mb-4 md:mb-0 hover:cursor-pointer">
                        <div className=" flex items-baseline mb-4 md:mb-0">
                            <h3 className="mr-2">Company</h3>
                            <img
                                className=""
                                width={15}
                                height={8}
                                src={
                                    isCompany
                                        ? "../assets/images/icon-arrow-up.svg"
                                        : "../assets/images/icon-arrow-down.svg"
                                }
                                alt="icon arrow down"
                            />
                        </div>
                        {isCompany && <CompanyList />}
                    </div>
                    <div className=" flex items-baseline    text-gray-500 font-semibold text-lg mb-4 md:mb-0 hover:cursor-pointer">
                        <h3 className="mr-2">Careers</h3>
                    </div>
                    <div className=" flex items-baseline    text-gray-500 font-semibold text-lg mb-4 md:mb-0 hover:cursor-pointer">
                        <h3 className="mr-2">About</h3>
                    </div>
                </div>

                <Login />
            </div>
        </nav>
    );
};

export default Navbar;
