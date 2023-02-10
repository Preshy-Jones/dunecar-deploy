import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/logo.svg";

const NavBar = () => {
  return (
    <div className=" py-5 px-[7.5rem] font-roboto w-full z-40 bg-white top-0 sticky">
      <div className="flex justify-between relative items-center ">
        <div className="flex-3">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="flex-4">
          <ul className="flex justify-around ">
            <li className="font-medium text-[#081314]">Buy</li>
            <li className="font-medium text-[#081314]">Sell</li>
            <li className="font-medium text-[#081314]">Finance</li>
            <li className="font-medium text-[#081314]">About</li>
          </ul>
        </div>
        <div className="flex flex-3 justify-end">
          <button className="bg-specialRed text-white font-medium tracking-[-0.01em] leading-[1.1875rem] px-4 py-1 rounded-[3px] h-[2.4375rem] w-[6.4375rem]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
