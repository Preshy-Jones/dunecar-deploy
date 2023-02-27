import Image from "next/image";
import React from "react";
import Logo from "../../../public/assets/logo.svg";
import { CancelIcon, CaretRightIcon, HamburgerIcon } from "../../ui/icons";
import BuySection from "./BuySection";
import FinanceSection from "./FinanceSection";
import SellSections from "./SellSections";

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [toggledSection, setToggledSection] = React.useState<
    string | undefined
  >(undefined);

  const sectionKey = {
    buy: <BuySection setToggledSection={setToggledSection} />,
    sell: <SellSections setToggledSection={setToggledSection} />,
    finance: <FinanceSection setToggledSection={setToggledSection} />,
  };
  return (
    <div
      className={`${
        isOpen ? "top-0 absolute z-30" : ""
      } font-roboto w-full bg-white md:hidden text-[#221121]`}
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
      {isOpen &&
        (!toggledSection ? (
          <div className="shadow-secondary">
            <div
              className="flex justify-between px-4 items-center py-3 cursor-pointer"
              onClick={() => setToggledSection("buy")}
            >
              <h2 className="text-[1.125rem] leading-secondary">Buy</h2>
              <CaretRightIcon />
            </div>
            <div
              className="flex justify-between px-4 items-center py-3 cursor-pointer"
              onClick={() => setToggledSection("sell")}
            >
              <h2 className="text-[1.125rem] leading-secondary">Sell</h2>
              <CaretRightIcon />
            </div>
            <div
              className="flex justify-between px-4 items-center py-3 cursor-pointer"
              onClick={() => setToggledSection("finance")}
            >
              <h2 className="text-[1.125rem] leading-secondary">Finance</h2>
              <CaretRightIcon />
            </div>
            <div className="flex justify-between px-4 items-center py-3">
              <h2 className="text-[1.125rem] leading-secondary">About</h2>
              <CaretRightIcon />
            </div>

            <div className="h-[1px] bg-borderDark mt-10 mb-5"></div>
            <div className="px-4">
              <button className="bg-specialRed text-white px-4 py-2 rounded-[4px] w-full">
                Sign Up
              </button>
            </div>
          </div>
        ) : (
          toggledSection && sectionKey[toggledSection]
        ))}
    </div>
  );
};

export default MobileNavBar;
