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

import SpecsModal from "./SpecsModal/SpecsModal";

const CarSpecs = () => {
  const [open, setOpen] = React.useState(false);

  const { car } = useAppSelector((state) => state.car);

  return (
    <div className="flex justify-center font-roboto">
      <div className="w-[85.1267992%]">
        <div className="flex text-tertiaryBlack leading-seventh justify-evenly shadow-cardShadow2 mb-8 pt-9 pb-5">
          <h2>Overview</h2>
          <h2>Features & Specs</h2>
          <h2>History & Inspection</h2>
          <h2>Warranty</h2>
          <h2>Ratings & Reviews</h2>
        </div>
        <div className="flex sm:flex-row flex-col sm:justify-between">
          <div>
            <h2 className="text-specialBlack font-extrabold text-[2rem] leading-[38px] mb-2">
              Overview
            </h2>
            <div className="flex sm:flex-row flex-col">
              <div className="grid grid-cols-1 gap-y-1 divide-dividerGray divide-y gap-x-8 mr-4">
                {specsData.slice(0, 8).map((data, index) => (
                  <div key={index} className="flex py-4 pr-[10rem]">
                    <h2 className="mr-3">{data.title}</h2>
                    <h2 className="font-semibold">{data.keyFunc(car)}</h2>
                  </div>
                ))}
              </div>
              <div className="flex flex-col  gap-y-1 divide-dividerGray divide-y gap-x-8">
                {specsData.slice(8, 11).map((data, index) => (
                  <div key={index} className="flex py-4 pr-[10rem]">
                    <h2 className="mr-3">{data.title}</h2>
                    <h2 className="font-semibold">{data.keyFunc(car)}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="shadow-primaryCard bg-white p-4 h-[20rem]">
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
        <div className="mt-8 relative">
          <div>
            <h2 className="text-specialBlack font-extrabold text-[2rem] leading-[38px] mb-5">
              Features & Specs
            </h2>
            <div className="border-b border-dividerGray pb-2 mb-6 flex">
              <div className="bg-lightRed flex items-center font-light justify-between px-4 py-2 ">
                <h2 className="mr-[0.7rem] font-light ">Installed Upgrade</h2>
                <AlertIcon />
              </div>
            </div>
            <div className="w-[50%] mb-[3rem]">
              <div className="grid grid-cols-2 gap-x-[5rem] gap-y-[2rem] items-center">
                {car?.carFeatures.slice(0, 12).map((feature, index) => (
                  <FeatureComponents
                    feature={feature.feature}
                    installedUpgrade={feature.installedUpgrade}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <button
              onClick={() => setOpen(true)}
              className="border-2 rounded-tertiary border-specialRed text-specialRed h-[3rem] font-semibold w-[25.5625rem]"
            >
              View all Features & Specs
            </button>
          </div>
          {open && <SpecsModal setOpen={setOpen} />}
        </div>
      </div>
    </div>
  );
};

export default CarSpecs;