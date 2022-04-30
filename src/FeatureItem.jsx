import React from "react";

const FeatureItem = ({ icon, text, iconAlt }) => {
    return (
        <li className="mb-4 md:mb-0 ">
            <a className="flex items-center" href="/">
                <img
                    className="mx-4 md:ml-0"
                    src={icon}
                    alt={iconAlt}
                    width={16}
                    height={19}
                />
                <p className="font-semibold text-gray-500">{text}</p>
            </a>
        </li>
    );
};

export default FeatureItem;
