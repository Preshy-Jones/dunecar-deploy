import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/assets/logo.svg";
import { BuyDropDown } from "./BuyDropDown";
import FinanceDropDown from "./FinanceDropDown";
import SellDropDown from "./SellDropDown";
import { motion } from "framer-motion";

const NavBar = () => {
  const [dropDownOpen, setDropDownOpen] = React.useState({
    buy: false,
    sell: true,
    finance: false,
    about: false,
  });

  const [backDrop, setBackDrop] = React.useState(false);

  const onMouseEnter = (type) => {
    console.log(type);

    switch (type) {
      case "buy":
        setDropDownOpen({
          buy: true,
          sell: false,
          finance: false,
          about: false,
        });
        setBackDrop(true);
        break;
      case "sell":
        setDropDownOpen({
          buy: false,
          sell: true,
          finance: false,
          about: false,
        });
        setBackDrop(true);
        break;
      case "finance":
        setDropDownOpen({
          buy: false,
          sell: false,
          finance: true,
          about: false,
        });
        setBackDrop(true);
        break;
      case "about":
        setDropDownOpen({
          buy: false,
          sell: false,
          finance: false,
          about: true,
        });
        setBackDrop(true);
        break;
      default:
        break;
    }
  };

  const onMouseLeave = (type) => {
    switch (type) {
      case "buy":
        setDropDownOpen({
          buy: false,
          sell: false,
          finance: false,
          about: false,
        });
        setBackDrop(false);
        break;
      case "sell":
        setDropDownOpen({
          buy: false,
          sell: false,
          finance: false,
          about: false,
        });
        setBackDrop(false);
        break;
      case "finance":
        setDropDownOpen({
          buy: false,
          sell: false,
          finance: false,
          about: false,
        });
        setBackDrop(false);
        break;
      case "about":
        setDropDownOpen({
          buy: false,
          sell: false,
          finance: false,
          about: false,
        });
        setBackDrop(false);
        break;
      default:
        break;
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
          <div className="flex-4 ">
            <ul className="flex justify-around ">
              <li
                className="font-medium text-[#081314] z-30 bg-white flex justify-center"
                onMouseEnter={() => onMouseEnter("buy")}
                onMouseLeave={() => onMouseLeave("buy")}
              >
                <Link href="/buy">Buy</Link>
                {dropDownOpen.buy && <BuyDropDown />}
              </li>
              <li
                className="font-medium text-[#081314] z-30 bg-white flex justify-center"
                onMouseEnter={() => onMouseEnter("sell")}
                onMouseLeave={() => onMouseLeave("sell")}
              >
                <Link href="/sell">Sell</Link>
                {dropDownOpen.sell && <SellDropDown />}
              </li>
              <li
                className="font-medium text-[#081314] z-30 bg-white flex justify-center"
                onMouseEnter={() => onMouseEnter("finance")}
                onMouseLeave={() => onMouseLeave("finance")}
              >
                <Link href="/finance">Finance</Link>
                {dropDownOpen.finance && <FinanceDropDown />}
              </li>
              <li className="font-medium text-[#081314] z-30 bg-white flex justify-center">
                About
              </li>
              {backDrop && (
                <div className="bg-black bg-opacity-[47%] fixed top-20 right-0 left-0 bottom-0 h-[vh] w-[vw]"></div>
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
