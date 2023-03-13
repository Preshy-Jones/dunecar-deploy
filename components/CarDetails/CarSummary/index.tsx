import React from "react";
import { useAppSelector } from "../../../store/hooks";
import {
  AlertIcon,
  CancelIcon,
  CarWheelIcon,
  CheckIcon,
  PlayIcon,
} from "../../ui/icons";
import { specsData } from "./../DetailsContent";
import FeatureComponents from "./FeatureComponents";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const CarSummary = () => {
  const [open, setOpen] = React.useState(false);

  const { car } = useAppSelector((state) => state.car);
  const [active, setActive] = React.useState(0);

  return (
    <div className="flex justify-center font-roboto">
      <div className="w-[85.1267992%]">
        <div className="grid grid-cols-5 justify-items-center text-tertiaryBlack leading-seventh  shadow-cardShadow2 mb-[4rem] pt-9">
          <Link
            to="overview"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer  flex flex-col items-center justify-between h-[3rem] w-full"
            onClick={() => setActive(0)}
          >
            <h2 className="">Overview</h2>
            {active === 0 && (
              <motion.div
                // animate={{ x: active === 1 ? "100%" : 0 }}
                // transition={{ type: "tween", duration: 0.4 }}
                layoutId="navbar"
                className="h-[4px] bg-specialRed w-[10.875rem] rounded-md"
              ></motion.div>
            )}
          </Link>
          <Link
            to="features"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer  flex flex-col items-center justify-between h-[3rem] w-full"
            onClick={() => setActive(1)}
          >
            <h2 className="">Features & Specs</h2>
            {active === 1 && (
              <motion.div
                // animate={{ x: active === 1 ? "100%" : 0 }}
                // transition={{ type: "tween", duration: 0.4 }}
                layoutId="navbar"
                className="h-[4px] bg-specialRed w-[10.875rem] rounded-md"
              ></motion.div>
            )}
          </Link>
          <Link
            to="history"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer  flex flex-col items-center justify-between h-[3rem] w-full"
            onClick={() => setActive(2)}
          >
            <h2 className="">History & Inspection</h2>
            {active === 2 && (
              <motion.div
                // animate={{ x: active === 1 ? "100%" : 0 }}
                // transition={{ type: "tween", duration: 0.4 }}
                layoutId="navbar"
                className="h-[4px] bg-specialRed w-[10.875rem] rounded-md"
              ></motion.div>
            )}
          </Link>
          <Link
            to="warranty"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer  flex flex-col items-center justify-between h-[3rem] w-full"
            onClick={() => setActive(3)}
          >
            <h2 className="">Warranty</h2>
            {active === 3 && (
              <motion.div
                // animate={{ x: active === 1 ? "100%" : 0 }}
                // transition={{ type: "tween", duration: 0.4 }}
                layoutId="navbar"
                className="h-[4px] bg-specialRed w-[10.875rem] rounded-md"
              ></motion.div>
            )}
          </Link>
          <Link
            to="ratings"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer  flex flex-col items-center justify-between h-[3rem] w-full"
            onClick={() => setActive(4)}
          >
            <h2 className="">Ratings & Reviews</h2>
            {active === 4 && (
              <motion.div
                // animate={{ x: active === 1 ? "100%" : 0 }}
                // transition={{ type: "tween", duration: 0.4 }}
                layoutId="navbar"
                className="h-[4px] bg-specialRed w-[10.875rem] rounded-md"
              ></motion.div>
            )}
          </Link>
        </div>
        <div
          className="flex sm:flex-row flex-col-reverse sm:justify-between"
          id="overview"
        >
          <div>
            <h2 className="text-specialBlack font-extrabold text-[2rem] leading-[38px] mb-2">
              Overview
            </h2>
            <div className="flex sm:flex-row flex-col">
              <div className="flex flex-col  gap-y-1 divide-dividerGray divide-y gap-x-8 mr-4">
                {specsData.slice(0, 8).map((data, index) => (
                  <div
                    key={index}
                    className="flex py-4 pr-[10rem] leading-primary text-secondaryBlack"
                  >
                    <h2 className="mr-3 font-light">{data.title}</h2>
                    <h2 className="font-semibold">{data.keyFunc(car)}</h2>
                  </div>
                ))}
              </div>
              <div className="flex flex-col  gap-y-1 divide-dividerGray divide-y gap-x-8">
                {specsData.slice(8, 11).map((data, index) => (
                  <div
                    key={index}
                    className="flex py-4 pr-[10rem] leading-primary text-secondaryBlack"
                  >
                    <h2 className="mr-3 font-light">{data.title}</h2>
                    <h2 className="font-semibold">{data.keyFunc(car)}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="shadow-primaryCard bg-white p-4 h-[20rem] mb-[5rem] sm:mb-0">
            <div className="flex ">
              <div className="rounded-tertiary border border-dividerGray p-3 mr-3">
                <div className="flex justify-between">
                  <CarWheelIcon />
                  <CheckIcon />
                </div>
                <h2 className="text-specialRed mt-2 mb-1">Reserve</h2>
                <p className="font-light text-sm leading-[1rem]">
                  for test drive
                </p>
                <h2 className="text-primaryGreen font-medium mt-2 text-sm leading-[1rem]">
                  FREE
                </h2>
              </div>
              <div className="rounded-tertiary border border-dividerGray p-3 mr-3">
                <div className="flex justify-between">
                  <CarWheelIcon />
                </div>
                <h2 className="text-specialRed mt-2 mb-1">Reserve</h2>
                <p className="font-light text-sm leading-[1rem]">
                  & get delivery
                </p>
                <h2 className="text-primaryGreen font-medium mt-2 text-sm leading-[1rem]">
                  FREE
                </h2>
              </div>
              <div className="rounded-tertiary border border-dividerGray p-3 mr-3">
                <div className="flex justify-between">
                  <CarWheelIcon />
                </div>
                <h2 className="text-specialRed mt-2 mb-1">Reserve</h2>
                <p className="font-light text-sm leading-[1rem]">& pick up</p>
                <h2 className="text-primaryGreen font-medium mt-2 text-sm leading-[1rem]">
                  FREE
                </h2>
              </div>
            </div>
            <h1 className="text-thirdBlack text-tertiary leading-eighth font-semibold mt-8">
              At Surulere, Lagos
            </h1>
            <p className="font-light leading-primary mt-2 mb-6">
              See it or drive it at our store.
            </p>
            <button className="bg-specialRed text-white font-semibold leading-primary w-full h-[3rem]">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSummary;
