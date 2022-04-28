import React from "react";

const Content = () => {
    return (
        <main>
            <img
                className="mb-7"
                src="../assets/images/image-hero-mobile.png"
                alt="hero-imge"
            />
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
        </main>
    );
};

export default Content;
