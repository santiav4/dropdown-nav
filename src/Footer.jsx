import React from "react";
import databizLogo from "../assets/images/client-databiz.svg";
import audiophileLogo from "../assets/images/client-audiophile.svg";
import meetLogo from "../assets/images/client-meet.svg";
import makerLogo from "../assets/images/client-maker.svg";

const Footer = () => {
    return (
        <footer className="flex items-center justify-evenly md:justify-start mb-20 md:mb-0 md:mt-20">
            <img className="md:mr-6" src={databizLogo} alt="databiz logo" />
            <img
                className="md:mr-6"
                src={audiophileLogo}
                alt="audiophile logo"
            />
            <img className="md:mr-6" src={meetLogo} alt="meet logo" />
            <img src={makerLogo} alt="maker logo" />
        </footer>
    );
};

export default Footer;
