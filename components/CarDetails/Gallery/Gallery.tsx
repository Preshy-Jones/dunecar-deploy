import Image from "next/image";
import React from "react";
import sampleCarBig from "../../../public/assets/giant-car.svg";
import samplecarSmall from "../../../public/assets/sample-car-small.svg";
import { motion } from "framer-motion";
import { CancelIcon } from "../../ui/icons";
import { useAppDispatch } from "../../../store/hooks";
import { setCarDetailsActiveTab } from "../../../features/ui/uiSlice";

const Gallery = () => {
  const repeater = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [active, setActive] = React.useState(0);

  const dispatch = useAppDispatch();

  return (
    <div className="font-roboto">
      <div className=" fixed top-0 left-0 right-0 bottom-0 h-[100vh] w-[100vw] z-50">
        <div className="grid grid-cols-9">
          <div className="bg-white col-start-1 col-end-3 overflow-y-scroll  h-[50rem]">
            <div className="grid grid-cols-2 justify-items-center  leading-[21px] text-[18px] mb-4 border-b border-x-dividerGray">
              <div
                className="h-[3.5rem] w-full pt-4 flex flex-col items-center justify-between cursor-pointer"
                onClick={() => setActive(0)}
              >
                <h2
                  className={`${
                    active === 0
                      ? "text-secondaryBlack font-bold"
                      : "text-lighterDark"
                  }`}
                >
                  Interior
                </h2>
                {active === 0 && (
                  <motion.div
                    layoutId="navbar"
                    className="h-[3px] bg-specialRed relative top-0.5 w-full rounded-md"
                  ></motion.div>
                )}
              </div>
              <div
                className="h-[3.5rem] w-full pt-4 flex flex-col items-center justify-between cursor-pointer"
                onClick={() => setActive(1)}
              >
                <h2
                  className={`${
                    active === 1
                      ? "text-secondaryBlack font-bold"
                      : "text-lighterDark"
                  }`}
                >
                  Exterior
                </h2>
                {active === 1 && (
                  <motion.div
                    layoutId="navbar"
                    className="h-[3px] bg-specialRed relative top-0.5 w-full rounded-md"
                  ></motion.div>
                )}
              </div>
            </div>
            {repeater.map((item, index) => (
              <div
                key={index}
                className="  border-4  border-specialRed sm:min-w-[22.875rem] h-[14rem] w-[22.875rem] sm:min-h-[14rem]"
              >
                {/* className="  sm:min-h-[14rem] w-[7.8775rem] h-[5.866875rem] border-4 border-t border-r border-specialRed" */}
                <Image
                  src="https://res.cloudinary.com/xxolcare/image/upload/v1678954596/carsmallsmall_eljq7h.svg"
                  width={366}
                  height={244}
                  alt={`car-${index}`}
                  className="h-full w-full"
                />
              </div>
            ))}
          </div>
          <div className="bg-black col-start-4 col-end-10 w-full relative">
            <div className="sm:min-w-[80vw] max-h-[70vh] h-[70vh]  ">
              <Image
                src={sampleCarBig}
                alt="big-car"
                className="sm:min-w-[80vw] max-h-[70vh] h-[70vh]"
              />
            </div>
            <div className="absolute bg-red-500 top-0 w-full">
              <div className="flex justify-between">
                <div className=""></div>
                <div className=" ">1/9</div>
                <div
                  className="pr-6 cursor-pointer"
                  onClick={() => dispatch(setCarDetailsActiveTab(0))}
                >
                  <CancelIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black fixed top-0 left-0 right-0 bottom-0 h-[100vh] w-[100vw] z-40"></div>
    </div>
  );
};

export default Gallery;
