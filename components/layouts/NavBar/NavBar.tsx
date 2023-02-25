import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/assets/logo.svg";
import { BuyDropDown } from "./BuyDropDown";

const NavBar = () => {
  const [dropDownOpen, setDropDownOpen] = React.useState(false);

  const onMouseEnter = (name) => {
    // const test2 = Object.keys(dropdown)[0]
    if (window.innerWidth < 773) {
      setDropDownOpen(true);
    } else {
      setDropDownOpen(true);
    }
  };

  const onMouseLeave = (name) => {
    if (window.innerWidth < 773) {
      setDropDownOpen(false);
    } else {
      setDropDownOpen(false);
    }
  };

  const handleBackDrop = () => {
    console.log("hello");

    if (window.innerWidth < 773) {
      setDropDownOpen(false);
    } else {
      setDropDownOpen(false);
    }
  };
  return (
    <div className="py-5 px-[7.5rem] font-roboto w-full z-40 bg-white top-0 sticky hidden md:block">
      <div className="relative justify-center">
        <div className="flex justify-between relative items-center ">
          <div className="flex-3">
            <Link href="/">
              <a>
                <Image src={Logo} alt="logo" className="cursor-pointer" />
              </a>
            </Link>
          </div>
          <div className="flex-4">
            <ul className="flex justify-around ">
              <li
                className="font-medium text-[#081314] z-30 bg-white flex justify-center"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <Link href="/buy">Buy</Link>
                {dropDownOpen && <BuyDropDown />}
              </li>
              <li className="font-medium text-[#081314]">Sell</li>
              <li className="font-medium text-[#081314]">Finance</li>
              <li className="font-medium text-[#081314]">About</li>
              {dropDownOpen && (
                <div
                  onClick={handleBackDrop}
                  className="bg-black bg-opacity-[47%] fixed top-20 right-0 left-0 bottom-0 h-[vh] w-[vw]"
                ></div>
              )}
            </ul>
          </div>
          <div className="flex flex-3 justify-end">
            <button className="bg-specialRed text-white font-medium tracking-[-0.01em] leading-[1.1875rem] px-4 py-1 rounded-[3px] h-[2.4375rem] w-[6.4375rem]">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
