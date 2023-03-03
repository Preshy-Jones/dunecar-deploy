import Image from "next/image";
import React from "react";
import { Md360 } from "react-icons/md";
import { TbAlertCircle } from "react-icons/tb";
import { GalleryIcon } from "../ui/icons";
import sampleCarBig from "../../public/assets/sample-car-big.svg";
import samplecarSmall from "../../public/assets/sample-car-small.svg";

const Gallery = () => {
  const repeater = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <div>
      <div className="flex">
        <div className="w-[41.375rem] h-[31.5625rem]">
          <Image src={sampleCarBig} />
        </div>
        <div className="grid grid-cols-6 grid-rows-2">
          {repeater.map((item, index) => (
            <div key={index} className="w-[20.9375rem] h-[15.59375rem]">
              <Image src={samplecarSmall} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center my-2">
        <div className="w-[90%] grid grid-cols-3 gap-x-2 text-white justify-evenly mt-2">
          <button className="w-full bg-specialBlack px-5 h-[3rem] rounded-tertiary flex items-center justify-center text-white">
            <div className="mr-3">
              <GalleryIcon />
            </div>
            <span className="leading-primary">Gallery</span>
          </button>
          <button className="w-full bg-specialBlack px-5 h-[rem] rounded-tertiary flex items-center justify-center">
            <Md360 className="text-[1.6rem] mr-3" />
            <span className="leading-primary">View 360</span>
          </button>
          <button className="w-full bg-specialBlack px-5 h-[rem] rounded-tertiary flex items-center justify-center">
            <TbAlertCircle className="text-[1.6rem] mr-3" />
            <span className="leading-primary">Imperfections</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
