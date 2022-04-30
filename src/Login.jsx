import React from "react";

const Login = () => {
    return (
        <div className=" flex flex-col text-gray-500 text-lg w-9/12 mx-auto md:mx-0 md:w-[237px] md:h-full md:flex-row  md:items-center md:justify-around  ">
            <button className="font-semibold mb-4 hover:curosr-pointer md:m-0 hover:text-black">
                Login
            </button>
            <button className="font-semibold hover:curosr-pointer border-gray-500 hover:border-black hover:text-black h-11 border-2 rounded-xl  md:ml-2 md:w-5/12  ">
                Register
            </button>
        </div>
    );
};

export default Login;
