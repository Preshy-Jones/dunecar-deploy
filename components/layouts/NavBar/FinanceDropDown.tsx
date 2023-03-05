import React from "react";
import { PrimaryButton as Button } from "../../ui/others/Buttons";
import { motion } from "framer-motion";

const FinanceDropDown = () => {
  return (
    <motion.div
      initial={{ y: -800 }}
      animate={{ y: -10 }}
      transition={{
        delay: 0,
        duration: 0.5,
        type: "tween",
        // stiffness: 120,
      }}
      className="text-tertiaryBlack absolute z-50  top-[4.31rem] flex justify-center w-[21.875rem]"
    >
      <div className=" bg-white w-full flex justify-center rounded-[8px] py-[1.5rem] shadow-secondary">
        <div className="w-[90%]">
          <p className="mb-2">
            Get an instant offer and a fast payment on handover day when you
            sell outright.
          </p>
          <Button>Send Us a Message</Button>
          <h1 className="text-primary font-extrabold leading-fourth mb-1">
            Finance Options
          </h1>
          <div className="bg-borderDark h-[1px] w-[7.125rem]"></div>
          <div className="mt-4">
            <h2 className="text-secondary mb-1 tracking-[-0.01em] font-medium">
              Hire Purchase
            </h2>
            <p className="tracking-[-0.01em] font-light text-black">
              Learn how to spread the cost of your Cazoo car with HP finance.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-secondary mb-1 tracking-[-0.01em] font-medium">
              Car Finance
            </h2>
            <p className="tracking-[-0.01em] font-light text-black">
              Quick, easy and online, discover how to finance your car.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FinanceDropDown;
