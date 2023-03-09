import Image from "next/image";
import Link from "next/link";
import React from "react";
import dot from "../../../public/assets/dot.svg";
import ImageSlider from "./ImageSlider";

const Product = ({ car }) => {
  return (
    <div>
      <ImageSlider />
      <div className="px-3 border-b border-r border-l border-[#D1D1D1] -mt-2">
        <div className="pt-3 pb-1">
          <h2 className="text-[#414141] tracking-primary leading-primary text-[10px] mb-2">
            DUNE CERTIFIED
          </h2>
          <div className="flex  mb-2">
            <Link href={`car-details/${car._id}`}>
              <h2 className="text-[16.1404px] text-specialRed w-[50%] leading-primary font-normal cursor-pointer">
                {car.title}
              </h2>
            </Link>
            <div></div>
          </div>
          <div className="flex text-[19.3684px] justify-start text-specialBlack font-semibold leading-tertiary">
            <h3 className="mr-3">$23,500</h3>
            <Image src={dot} alt="dot" />
            <h3 className="ml-3">61k mi</h3>
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
  );
};

export default Product;
