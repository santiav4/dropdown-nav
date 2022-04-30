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

            <div className="md:flex md:flex-col md:h-[756px] md:justify-around">
                <div>
                    <h1 className="text-[2.8rem] md:text-[5rem] md:leading-none md:text-left text-center font-bold mb-2 md:mb-10 md:mt-[100px]">
                        Make remote work
                    </h1>
                    <p className="text-center md:text-left text-gray-500 text-lg font-semibold mx-auto md:ml-0 w-5/6 mb-7 md:mb-10">
                        Get your team in sync, nomatter your location.
                        Streamline processes, create team rituals, and watch
                        productivity soar.
                    </p>
                    <button className=" w-4/12 h-12 hover:bg-white hover:text-black hover:border-2 hover:border-black rounded-2xl font-bold text-lg bg-black text-white block mx-auto md:ml-0 mb-14 md:mb-[20px]">
                        Learn more
                    </button>
                </div>
                <Footer />
            </div>
        </main>
    );
};

export default Content;
