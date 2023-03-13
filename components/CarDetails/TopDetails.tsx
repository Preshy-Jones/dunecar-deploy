import Image from "next/image";
import React from "react";
import { useAppSelector } from "../../store/hooks";
import { formatAmount, priceSplitter } from "../../utils/utilityFunctions";
import { DirectLinkIcon, HeartIcon, LeftArrowIcon } from "../ui/icons";

const TopDetails = () => {
  const { car } = useAppSelector((state) => state.car);
  return (
    <div className="flex justify-center mb-7">
      <div className="w-[85.1267992%] flex justify-between items-center">
        <div>
          <div className="flex items-center">
            <div className="mr-2">
              <LeftArrowIcon />
            </div>
            <h2 className="uppercase leading-primary text-specialRed ">
              SEARCH
            </h2>
          </div>
          <h1 className="text-[1.75rem] leading-[2.0625rem] sm:text-[3.25rem] font-extrabold text-specialRed sm:leading-sixth mt-3">
            {car?.year} {car?.make?.title} {car?.model?.title}
          </h1>
          <div className="flex text-secondary sm:text-[25px] justify-start text-specialBlack font-semibold leading-[21px] sm:leading-[29px] mt-2 mb-3">
            <h3 className="mr-3">
              ${car?.price && priceSplitter(car?.price)}
            </h3>
            <h3 className="ml-3">
              {car?.mileage && formatAmount(car?.mileage)} mi
            </h3>
          </div>
          <h2 className="font-light text-[#221121] mt-2">
            VIN 1VB7MDNY2J292NSJM20
          </h2>
        </div>
        <div className="hidden sm:block">
          <div className="flex items-center ">
            <HeartIcon
              color="#D14532"
              className="w-[1.393125rem] h-[1.285625rem] mr-2"
            />
            <h2 className="leading-primary text-specialRed mr-8">72</h2>
            <DirectLinkIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDetails;
