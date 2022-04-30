import React from "react";

const Footer = () => {
    return (
        <footer className="flex items-center justify-evenly md:justify-start mb-20 md:mb-0 md:mt-20">
            <img
                className="md:mr-6"
                src="../assets/images/client-databiz.svg"
                alt="databiz logo"
            />
            <img
                className="md:mr-6"
                src="../assets/images/client-audiophile.svg"
                alt="audiophile logo"
            />
            <img
                className="md:mr-6"
                src="../assets/images/client-meet.svg"
                alt="meet logo"
            />
            <img src="../assets/images/client-maker.svg" alt="maker logo" />
        </footer>
    );
};

export default Footer;
