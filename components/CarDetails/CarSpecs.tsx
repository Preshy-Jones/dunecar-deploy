import React from "react";
import { CarWheelIcon, CheckIcon } from "../ui/icons";
import { specsData } from "./DetailsContent";

const CarSpecs = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[90%]">
        <div className="flex text-tertiaryBlack leading-seventh justify-evenly shadow-cardShadow2 mb-8 pt-9 pb-5">
          <h2>Overview</h2>
          <h2>Features & Specs</h2>
          <h2>History & Inspection</h2>
          <h2>Warranty</h2>
          <h2>Ratings & Reviews</h2>
        </div>
        <div className="flex justify-between">
          <div>
            <h2>Overview</h2>
            <div className="flex">
              <div className="grid grid-cols-1 gap-y-1 divide-dividerGray divide-y gap-x-8 mt-14 mr-4">
                {specsData.slice(0, 8).map((data, index) => (
                  <div key={index} className="flex py-4">
                    <h2 className="mr-3">{data.title}</h2>
                    <h2 className="font-semibold">{data.value}</h2>
                  </div>
                ))}
              </div>
              <div className="flex flex-col  gap-y-1 divide-dividerGray divide-y gap-x-8 mt-14">
                {specsData.slice(8, 11).map((data, index) => (
                  <div key={index} className="flex py-4">
                    <h2 className="mr-3">{data.title}</h2>
                    <h2 className="font-semibold">{data.value}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div className="flex justify-between">
                  <CarWheelIcon />
                  <CheckIcon />
                </div>
                <h2>Reserve</h2>
                <p>for test drive</p>
                <h2>FREE</h2>
              </div>
            </div>
            <h1 className="text-thirdBlack text-tertiary">
              At Surulere, Lagos
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSpecs;
