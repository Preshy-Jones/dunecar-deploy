import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/logo.svg";
import hamburger from "../../public/assets/hamburger.svg";
import { CancelIcon, CaretRightIcon, HamburgerIcon } from "../ui/icons";

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className={`${
        isOpen ? "top-0 absolute z-30" : ""
      } w-full bg-white md:hidden`}
    >
      <div
        className={`flex justify-between py-5 px-[2rem] mb-3 ${
          isOpen ? "border-b border-b-borderDark" : ""
        }`}
      >
        <Image src={Logo} alt="logo" />
        <div>
          {isOpen ? (
            <CancelIcon onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <HamburgerIcon onClick={() => setIsOpen(!isOpen)} />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="">
          <div className="flex justify-between px-4 items-center py-3">
            <h2 className="text-[1.125rem]">Buy</h2>
            <CaretRightIcon />
          </div>
          <div className="flex justify-between px-4 items-center py-3">
            <h2 className="text-[1.125rem]">Sell</h2>
            <CaretRightIcon />
          </div>
          <div className="flex justify-between px-4 items-center py-3">
            <h2 className="text-[1.125rem]">Finance</h2>
            <CaretRightIcon />
          </div>
          <div className="flex justify-between px-4 items-center py-3">
            <h2 className="text-[1.125rem]">About</h2>
            <CaretRightIcon />
          </div>

          <div className="h-[1px] bg-borderDark mt-10 mb-5"></div>
          <div className="px-4">
            <button className="bg-specialRed text-white px-4 py-2 rounded-[4px] w-full">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavBar;
