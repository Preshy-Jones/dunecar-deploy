import React from "react";
import { motion } from "framer-motion";

export const BuyDropDown = () => {
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
      className="text-tertiaryBlack absolute z-50 md:left-[3rem] lg:left-[7rem]  xl:left-[11rem] top-[4.31rem] flex justify-center w-[55.1388889vw]"
    >
      <div className=" bg-white w-full flex justify-center rounded-[8px] py-[2rem] shadow-secondary">
        <div className="flex w-[95%] justify-between">
          <div className="flex-1 mr-[3rem]">
            <p className="leading-fifth text-tertiaryBlack font-medium mb-4">
              With over 250 makes and models, finding your next car is easy.
            </p>
            <button className=" bg-black text-white h-[48px] px-4 rounded-[4px] w-[12.1875rem] mb-7">
              Search Cars
            </button>
            <div className="mb-4">
              <h1 className="text-primary font-extrabold leading-fourth mb-1">
                Get Started
              </h1>
              <div className="bg-borderDark h-[1px] w-[7.125rem]"></div>
            </div>
            <div className="mb-6">
              <h1 className="text-secondary mb-1 tracking-[-0.01em] font-medium">
                How It Works
              </h1>
              <p className="tracking-[-0.01em] font-light text-black">
                Everything you need to know about buying a car.
              </p>
            </div>
            <div className="mb-6">
              <h1 className="text-secondary mb-1 tracking-[-0.01em] font-medium">
                Car Reviews
              </h1>
              <p className="tracking-[-0.01em] font-light text-black">
                Hundreds of expert reviews to help you find your perfect car.
              </p>
            </div>
            <div className="mb-6">
              <h1 className="text-secondary mb-1 tracking-[-0.01em] font-medium">
                Receiving your car
              </h1>
              <p className="tracking-[-0.01em] font-light text-black">
                What to expect when you collect your car or have it delivered.
              </p>
            </div>
          </div>
          <div className="flex-1 mt-2">
            <div className="mb-8">
              <h1 className="font-extrabold mb-4 text-primary leading-fourth">
                Search by Popular Make
              </h1>
              <div className="grid grid-cols-3 gap-y-5">
                {content.byPopularMake.map((item, index) => (
                  <h2 className="leading-fifth text-black" key={index}>
                    {item}
                  </h2>
                ))}
              </div>
            </div>
            <div>
              <h1 className="font-extrabold mb-4 text-primary leading-fourth">
                Search by Popular Model
              </h1>
              <div className="grid grid-cols-3 gap-y-5">
                {content.byPopularMake.map((item, index) => (
                  <h2 className="leading-fifth text-black" key={index}>
                    {item}
                  </h2>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const content = {
  byPopularMake: [
    "Audi",
    "BMW",
    "Citroen",
    "Fiat",
    "Ford",
    "Honda",
    "Hyundai",
    "Jaguar",
    "Jeep",
    "Kia",
    "Land Rover",
    "Mazda",
  ],

  byPopularModel: [
    "Audi",
    "BMW",
    "Citroen",
    "Fiat",
    "Ford",
    "Honda",
    "Hyundai",
    "Jaguar",
    "Jeep",
    "Kia",
    "Land Rover",
    "Mazda",
  ],
};
