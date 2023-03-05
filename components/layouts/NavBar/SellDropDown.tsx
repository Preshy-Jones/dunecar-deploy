import React from "react";
import { PrimaryButton as Button } from "../../ui/others/Buttons";
import { motion } from "framer-motion";

const SellDropDown = () => {
  return (
    <motion.div
      initial={{ y: -800 }}
      animate={{ y: -10 }}
      transition={{
        // delay: 0,
        duration: 0.5,
        type: "tween",
        // stiffness: 120,
      }}
      className="text-tertiaryBlack absolute z-50  top-[4.31rem] flex justify-center w-[22.375rem] font-roboto"
    >
      <div className=" bg-white w-full flex justify-center rounded-[8px] py-[1.5rem] shadow-secondary">
        <div className="w-[90%]">
          <p className="mb-2 w-full tracking-[-0.01em] leading-fifth font-medium">
            Get an instant offer and a fast payment on handover day when you
            sell outright.
          </p>
          <Button>Start valuation</Button>
          <h1 className="text-primary font-extrabold leading-fourth mb-1">
            Get a Free valuation
          </h1>
          <div className="bg-borderDark h-[1px] w-[7.125rem]"></div>
          <div className="mt-4">
            <h2 className="text-secondary mb-1 tracking-[-0.01em] font-medium">
              Value my car
            </h2>
            <p className="tracking-[-0.01em] font-light text-black">
              Fill out some forms and find out how much your car is worth
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SellDropDown;
