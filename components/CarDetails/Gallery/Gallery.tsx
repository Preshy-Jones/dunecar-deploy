import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  SlideCaretLeftIcon,
  SlideCaretRightIcon,
  WhiteCancelIcon,
} from "../../ui/icons";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  setCarDetailsActiveTab,
  setCurrentGalleryIndex,
} from "../../../features/ui/uiSlice";
import { imageKeys } from "../../../utils/constants";

const Gallery = () => {
  const repeater = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [active, setActive] = React.useState("exterior");
  const sideDivRef = useRef<HTMLDivElement>(null);
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
  const { currentGalleryIndex } = useAppSelector((state) => state.ui);

  const scrollToSelectedImage = (index) => {
    // const imageHeight = 14 * 16 + 4; // assuming each image is 20rem x 16rem with 4px border
    // const scrollTop = imageHeight * index;
    // if (sideDivRef.current !== null) {
    //   sideDivRef.current.scrollTop = scrollTop;
    // }
    const selectedElement = sideDivRef.current?.children[index] as HTMLElement;
    if (selectedElement) {
      const top = selectedElement.offsetTop;
      if (sideDivRef.current !== null) {
        sideDivRef.current.scrollTop = top;
      }
    }
  };

  const setActiveType = (type: string) => {
    setActive(type);
    if (type === "exterior") {
      dispatch(setCurrentGalleryIndex(0));
      scrollToSelectedImage(0);
    } else if (type === "interior") {
      dispatch(setCurrentGalleryIndex(9));
      scrollToSelectedImage(9);
    }
  };

  const handleSlide = (direction: string) => {
    if (direction === "left") {
      if (currentGalleryIndex === 0) {
        dispatch(setCurrentGalleryIndex(0));
      } else {
        dispatch(setCurrentGalleryIndex(currentGalleryIndex - 1));
        scrollToSelectedImage(currentGalleryIndex - 1);
      }
    } else if (direction === "right") {
      if (currentGalleryIndex === imageKeys.length - 1) {
        dispatch(setCurrentGalleryIndex(imageKeys.length - 1));
      } else {
        dispatch(setCurrentGalleryIndex(currentGalleryIndex + 1));
        scrollToSelectedImage(currentGalleryIndex + 1);
      }
    }
    setDirection(direction);
  };

  useEffect(() => {
    scrollToSelectedImage(currentGalleryIndex);
  }, []);

  return (
    <div className="font-roboto">
      <div className=" fixed top-0 left-0 right-0 bottom-0 h-[100vh] w-[100vw] z-50">
        <div className="grid grid-cols-gallery">
          <div className="bg-white tablet:col-start-1 tablet:col-end-2 col-start-1 col-end-10   ">
            <div className="grid grid-cols-2 justify-items-center  leading-[21px] text-[18px] mb-4 border-b border-x-dividerGray">
              <div
                className="h-[3.5rem] w-full pt-4 flex flex-col items-center justify-between cursor-pointer"
                onClick={() => setActiveType("interior")}
              >
                <h2
                  className={`${
                    active === "interior"
                      ? "text-secondaryBlack font-bold"
                      : "text-lighterDark"
                  }`}
                >
                  Interior
                </h2>
                {active === "interior" && (
                  <motion.div
                    layoutId="navbar"
                    className="h-[3px] bg-specialRed relative top-0.5 w-full rounded-md"
                  ></motion.div>
                )}
              </div>
              <div
                className="h-[3.5rem] w-full pt-4 flex flex-col items-center justify-between cursor-pointer"
                onClick={() => setActiveType("exterior")}
              >
                <h2
                  className={`${
                    active === "exterior"
                      ? "text-secondaryBlack font-bold"
                      : "text-lighterDark"
                  }`}
                >
                  Exterior
                </h2>
                {active === "exterior" && (
                  <motion.div
                    layoutId="navbar"
                    className="h-[3px] bg-specialRed relative top-0.5 w-full rounded-md"
                  ></motion.div>
                )}
              </div>
            </div>
            <div className="overflow-y-scroll  h-[50rem]" ref={sideDivRef}>
              {imageKeys.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    currentGalleryIndex === index
                      ? "border-4  border-specialRed"
                      : ""
                  } tablet:min-w-[22.875rem] h-[14rem] w-full tablet:min-h-[14rem] cursor-pointer`}
                  onClick={() => dispatch(setCurrentGalleryIndex(index))}
                >
                  {/* className="  sm:min-h-[14rem] w-[7.8775rem] h-[5.866875rem] border-4 border-t border-r border-specialRed" */}
                  <img
                    src={car?.media?.gallery[item.title]}
                    width={366}
                    height={224}
                    alt={`car-${index}`}
                    className="h-full w-full"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-black col-start-2 col-end-10 w-full relative hidden tablet:block">
            <div className="h-full w-full flex items-center ">
              <motion.img
                key={currentGalleryIndex}
                alt={car?.media?.gallery[imageKeys[currentGalleryIndex].title]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={car?.media?.gallery[imageKeys[currentGalleryIndex].title]}
                width={1200}
                height={600}
              />
            </div>
            <div className="absolute top-[20rem] w-full">
              <div className="flex justify-between">
                <div>
                  {currentGalleryIndex !== 0 && (
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
                  {currentGalleryIndex !== imageKeys.length - 1 && (
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
                    {currentGalleryIndex + 1}/{imageKeys.length}
                  </h3>
                  <h3>
                    {imageKeyTitles[imageKeys[currentGalleryIndex].title]}
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
