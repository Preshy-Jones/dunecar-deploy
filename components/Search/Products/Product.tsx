import Image from "next/image";
import Link from "next/link";
import React from "react";
import dot from "../../../public/assets/dot-smaller.svg";
import { formatAmount, priceSplitter } from "../../../utils/utilityFunctions";
import ImageSlider from "./ImageSlider";

const Product = ({ car }) => {
  
  return (
    <div className="cursor-pointer flex justify-center w-full ">
      
          <div className=" w-[20.933125rem] sm:w-full flex flex-col items-center border-b border-r border-l border-[#D1D1D1]">
            <ImageSlider />
            <div className="px-3 w-full  -mt-2">
              <div className="pt-3 pb-1">
                <h2 className="text-[#414141] tracking-primary leading-primary text-[10px] mb-2">
                  DUNE CERTIFIED
                </h2>
                <div className="flex  mb-2">
                  <h2 className="1.5xl:text-[1rem] tablet:text-[0.8rem] text-specialRed w-[80%] leading-primary font-normal cursor-pointer">
                    {car.title}
                  </h2>
                  <div></div>
                </div>
                <div className="flex 1.5xl:text-[1.210525rem] lg:[1rem] tablet:text-[0.9rem] tex  justify-start text-specialBlack font-semibold leading-tertiary">
                  <h3 className="mr-3">
                    ${car?.price && priceSplitter(car?.price)}
                  </h3>

                  <Image src={dot} alt="dot" />

                  <h3 className="ml-3">
                    {" "}
                    {car?.mileage && formatAmount(car?.mileage)} mi
                  </h3>
                </div>
              </div>
              <div className="px-1">
                <div className="bg-[#D1D1D1] text-[#D1D1D1] h-[1px]"></div>
              </div>
              <div className="py-3">
                <p className="text-lightDark text-[0.75rem] leading-[0.875rem]">
                  Available at Surulere, Lagos
                </p>
              </div>
            </div>
          </div>
      
    </div>
  );
};

export default Product;
