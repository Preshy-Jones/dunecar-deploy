import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SlideCaretLeftIcon,
  SlideCaretRightIcon,
  WhiteCancelIcon,
} from "../../ui/icons";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setCarDetailsActiveTab } from "../../../features/ui/uiSlice";

const Gallery = () => {
  const repeater = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [active, setActive] = React.useState(0);
  const { car } = useAppSelector((state) => state.car);
  const dispatch = useAppDispatch();
  // const images = [
  //   "https://res.cloudinary.com/xxolcare/image/upload/v1671797034/carzoo/citroenc1_zlhzgg.jpg",
  //   "https://res.cloudinary.com/xxolcare/image/upload/v1671797036/carzoo/seatMII_qwy9va.webp",
  //   "https://res.cloudinary.com/xxolcare/image/upload/v1671797037/carzoo/skodacitigo_xuc6u3.webp",
  //   "https://res.cloudinary.com/xxolcare/image/upload/v1671797038/carzoo/toyotaAYGO_xhj5b4.webp",
  //   "https://res.cloudinary.com/xxolcare/image/upload/v1671812540/carzoo/toyotaAYGOblue_v0cp38.webp",
  //   "https://res.cloudinary.com/xxolcare/image/upload/v1671797037/carzoo/volswagen1_d7vt1b.webp",
  //   "https://res.cloudinary.com/xxolcare/image/upload/v1671797036/carzoo/kiapicanto_qjbt1v.webp",
  //   "https://res.cloudinary.com/xxolcare/image/upload/v1671797034/carzoo/citroenc3piccaso_qudfpa.webp",
  // ];

  //get an imageKeys array from the commented gallery object above

  const imageKeys = [
    "frontPassenger",
    "front",
    "frontDriver",
    "driverProfile",
    "rearDriver",
    "rear",
    "rearPassenger",
    "passengerProfile",
    "dashBoard",
    "frontDriverCompartment",
    "steeringWheelAndInstrumentCluster",
    "keys",
    "trunkCargo",
    "radio",
    "driverRearCompartment",
    "shifter",
    "climateControls",
    "driverAccessoryControls",
    "driverDoorPanel",
    "usbAuxPorts",
    "engine",
  ];

  const imageKeyTitles = {
    frontPassenger: "Front Passenger",
    front: "Front",
    frontDriver: "Front Driver",
    driverProfile: "Driver Profile",
    rearDriver: "Rear Driver",
    rear: "Rear",
    rearPassenger: "Rear Passenger",
    passengerProfile: "Passenger Profile",
    dashBoard: "Dash Board",
    frontDriverCompartment: "Front Driver Compartment",
    steeringWheelAndInstrumentCluster: "Steering Wheel And Instrument Cluster",
    keys: "Keys",
    trunkCargo: "Trunk Cargo",
    radio: "Radio",
    driverRearCompartment: "Driver Rear Compartment",
    shifter: "Shifter",
    climateControls: "Climate Controls",
    driverAccessoryControls: "Driver Accessory Controls",
    driverDoorPanel: "Driver Door Panel",
    usbAuxPorts: "USB Aux Ports",
    engine: "Engine",
  };

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = useState("left");
  const handleSlide = (direction: string) => {
    if (direction === "left") {
      if (currentIndex === 0) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    } else if (direction === "right") {
      if (currentIndex === imageKeys.length - 1) {
        setCurrentIndex(imageKeys.length - 1);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }
    setDirection(direction);
  };

  return (
    <div className="font-roboto">
      <div className=" fixed top-0 left-0 right-0 bottom-0 h-[100vh] w-[100vw] z-50">
        <div className="grid grid-cols-gallery">
          <div className="bg-white tablet:col-start-1 tablet:col-end-2 col-start-1 col-end-10  overflow-y-scroll  h-[50rem]">
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
            {imageKeys.map((item, index) => (
              <div
                key={index}
                className={`${
                  currentIndex === index ? "border-4  border-specialRed" : ""
                } tablet:min-w-[22.875rem] h-[20rem] w-full tablet:min-h-[14rem] cursor-pointer`}
                onClick={() => setCurrentIndex(index)}
              >
                {/* className="  sm:min-h-[14rem] w-[7.8775rem] h-[5.866875rem] border-4 border-t border-r border-specialRed" */}
                <img
                  src={car?.media?.gallery[item]}
                  width={366}
                  height={224}
                  alt={`car-${index}`}
                  className="h-full w-full"
                />
              </div>
            ))}
          </div>
          <div className="bg-black col-start-2 col-end-10 w-full relative hidden tablet:block">
            <div className="h-full w-full flex items-center ">
              <motion.img
                key={currentIndex}
                alt={car?.media?.gallery[imageKeys[currentIndex]]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={car?.media?.gallery[imageKeys[currentIndex]]}
                width={1200}
                height={600}
              />
            </div>
            <div className="absolute top-[20rem] w-full">
              <div className="flex justify-between">
                <div>
                  {currentIndex !== 0 && (
                    <div
                      className="bg-white h-[8rem] w-[4rem] flex justify-center items-center rounded-r-lg"
                      onClick={() => handleSlide("left")}
                    >
                      <div className=" w-[0.7rem]">
                        <SlideCaretLeftIcon colour="#D14532" />
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  {currentIndex !== imageKeys.length - 1 && (
                    <div
                      className="bg-white h-[8rem] w-[4rem] flex justify-center items-center rounded-l-lg"
                      onClick={() => handleSlide("right")}
                    >
                      <div className="w-[0.7rem]">
                        <SlideCaretRightIcon colour="#D14532" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="absolute bg-black text-white top-0 w-full py-6">
              <div className="flex justify-between">
                <div className=""></div>
                <div className="flex  flex-col items-center justify-center ">
                  <h3>
                    {currentIndex + 1}/{imageKeys.length}
                  </h3>
                  <h3>
                    {imageKeyTitles[imageKeys[currentIndex]]}
                  </h3>
                </div>
                <div
                  className="pr-6 cursor-pointer"
                  onClick={() => dispatch(setCarDetailsActiveTab(0))}
                >
                  <WhiteCancelIcon />
                </div>
              </div>
            </div>
            <div className="absolute bg-black text-white bottom-[4.5rem] z-100 w-full py-6 h-[2rem]"></div>
          </div>
        </div>
      </div>
      <div className="bg-black fixed top-0 left-0 right-0 bottom-0 h-[100vh] w-[100vw] z-40"></div>
    </div>
  );
};

export default Gallery;
