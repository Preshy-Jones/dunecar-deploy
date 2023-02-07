import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/logo.svg";

const NavBar = () => {
  return (
    <div className="flex justify-between py-5 px-[7.5rem]">
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
        <button className="bg-specialRed text-white px-4 py-1 rounded-[4px]">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
