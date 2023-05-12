import Image from "next/image";
import React from "react";
import { Md360 } from "react-icons/md";
import { TbAlertCircle } from "react-icons/tb";
import { GalleryIcon } from "../../ui/icons";
import sampleCarBig from "../../../public/assets/sample-car-big.svg";
import samplecarSmall from "../../../public/assets/sample-car-small.svg";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  setCarDetailsActiveTab,
  setCurrentGalleryIndex,
} from "../../../features/ui/uiSlice";

const GalleryNavigation = () => {
  const repeater = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const dispatch = useAppDispatch();
  const { car } = useAppSelector((state) => state.car);
  const imageKeys = [
    {
      title: "dashboard",
      type: "interior",
    },
    {
      title: "frontDriverCompartment",
      type: "interior",
    },
    {
      title: "steeringWheelAndInstrumentCluster",
      type: "interior",
    },
    {
      title: "keys",
      type: "interior",
    },
    {
      title: "trunkCargo",
      type: "interior",
    },
    {
      title: "radio",
      type: "interior",
    },
    {
      title: "driverRearCompartment",
      type: "interior",
    },
    {
      title: "shifter",
      type: "interior",
    },
    {
      title: "climateControls",
      type: "interior",
    },
    {
      title: "driverAccessoryControls",
      type: "interior",
    },
    {
      title: "driverDoorPanel",
      type: "interior",
    },
    {
      title: "usbAuxPorts",
      type: "interior",
    },
    {
      title: "engine",
      type: "interior",
    },
    {
      title: "frontPassenger",
      type: "exterior",
    },
    {
      title: "front",
      type: "exterior",
    },
    {
      title: "frontDriver",
      type: "exterior",
    },
    {
      title: "driverProfile",
      type: "exterior",
    },
    {
      title: "rearDriver",
      type: "exterior",
    },
    {
      title: "rear",
      type: "exterior",
    },
    {
      title: "rearPassenger",
      type: "exterior",
    },
    {
      title: "passengerProfile",
      type: "exterior",
    },
  ];
  return (
    <div className="">
      <div className="flex overflow-x-scroll">
        <div className="relative">
          <div className="sm:min-w-[41.375rem] sm:min-h-[31.5625rem] min-w-[15.566875rem] min-h-[11.875rem] z-20">
            <Image
              src={car?.media?.gallery["frontPassenger"] as string}
              alt="big-car"
              width={662}
              height={505}
            />
          </div>
          <div
            className="absolute w-full z-30 left-[5rem] bottom-[1rem] sm:bottom-[2rem] sm:left-[15rem] rounded-[5px] cursor-pointer"
            onClick={() => dispatch(setCarDetailsActiveTab(2))}
          >
            <div className=" text-[#081314] flex items-center justify-center bg-btnGallery h-[1.988125rem] w-[6.30875rem] sm:w-[10.3125rem] sm:h-[2.75rem] ">
              <Md360 className="text-[0.88375rem] sm:text-[1.6rem] mr-3" />
              <span className="sm:text-[1rem] text-[0.66279375rem] leading-primary">
                Exterior 360°
              </span>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-primary grid-cols-secondary grid-rows-2">
          {imageKeys.map((item, index) => (
            <div
              key={index}
              className="relative cursor-pointer"
              onClick={() => {
                dispatch(setCurrentGalleryIndex(index));
                dispatch(setCarDetailsActiveTab(1));
              }}
            >
              <div
                key={index}
                className="z-20 sm:min-w-[20.9375rem] sm:min-h-[15.59375rem] w-[7.8775rem] h-[5.866875rem]"
              >
                <Image
                  src={car?.media?.gallery[item.title]}
                  alt={`car-${index}`}
                  width={335}
                  height={249.5}
                />
              </div>
              {index === 0 && (
                <div
                  className="absolute w-full z-40 left-[1rem] bottom-[0.7rem] sm:bottom-[2rem] sm:left-[5.5rem] rounded-[5px] cursor-pointer"
                  onClick={() => dispatch(setCarDetailsActiveTab(3))}
                >
                  <div className=" text-[#081314] flex items-center justify-center bg-btnGallery h-[1.988125rem] w-[6.30875rem] sm:w-[10.3125rem] sm:h-[2.75rem]">
                    <Md360 className="text-[0.88375rem] sm:text-[1.6rem] mr-3" />
                    <span className="sm:text-[1rem] text-[0.66279375rem] leading-primary ">
                      Interior 360°
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center sm:my-2">
        <div className="w-[85.1267992%] grid-cols-2 grid sm:grid-cols-3 sm:gap-x-2 text-white justify-evenly mt-2">
          <button
            className="w-full rounded-tertiary flex items-center sm:justify-center text-white"
            onClick={() => dispatch(setCarDetailsActiveTab(1))}
          >
            <div className="w-[98%] flex items-center sm:justify-center bg-specialBlack px-5 h-[3rem] rounded-tertiary">
              <div className="mr-3">
                <GalleryIcon />
              </div>
              <span className="leading-primary">Gallery</span>
            </div>
          </button>
          <button
            className="w-full  flex items-center justify-end sm:justify-center"
            onClick={() => dispatch(setCarDetailsActiveTab(2))}
          >
            <div className="w-[98%] flex items-center sm:justify-center bg-specialBlack px-5 h-[3rem] rounded-tertiary">
              <Md360 className="text-[1.6rem] mr-3" />
              <span className="leading-primary">View 360</span>
            </div>
          </button>
          <button
            className="w-full col-start-1 col-end-4 sm:col-start-3 sm:col-end-4 bg-specialBlack px-5 sm:m-0 mt-1 h-[3rem] rounded-tertiary flex items-center justify-center"
            onClick={() => dispatch(setCarDetailsActiveTab(4))}
          >
            <TbAlertCircle className="text-[1.6rem] mr-3" />
            <span className="leading-primary">Imperfections</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryNavigation;
