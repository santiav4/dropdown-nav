import React from "react";
import { useWindowSizes } from "react-use-window-sizes";
import Footer from "./Footer";

const Content = () => {
    const { width, height } = useWindowSizes();
    return (
        <main className=" md:flex md:flex-row-reverse md:mx-auto md:h-[750px] md:w-[1000px] md:items-center md:justify-between ">
            <div className=" ">
                <img
                    className="mb-7 mx-auto md:m-0  "
                    src={`${
                        width >= 768
                            ? "../assets/images/image-hero-desktop.png"
                            : "../assets/images/image-hero-mobile.png"
                    }`}
                    alt="hero-imge"
                />
            </div>

            <div className="">
                <h1 className="text-[2.8rem] text-center font-bold mb-2">
                    Make remote work
                </h1>
                <p className="text-center text-gray-500 text-lg font-semibold mx-auto w-5/6 mb-7">
                    Get your team in sync, nomatter your location. Streamline
                    processes, create team rituals, and watch productivity soar.
                </p>
                <button className=" w-4/12 h-12 rounded-2xl font-bold text-lg bg-black text-white block mx-auto mb-14">
                    Learn more
                </button>
                <Footer />
            </div>
        </main>
    );
};

export default Content;
