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
    <div className="">
      <div className="flex overflow-x-scroll">
        <div className="relative">
          <div className="min-w-[41.375rem] min-h-[31.5625rem] absolute z-20">
            <Image src={sampleCarBig} alt="big-car" />
          </div>
          <div className="absolute w-full z-30 bottom-[2rem] left-[15rem]">
            <div className=" text-[#081314] flex items-center justify-center bg-btnGallery w-[10.3125rem] h-[2.75rem] ">
              <Md360 className=" text-[1.6rem] mr-3" />
              <span className="leading-primary">Exterior 360°</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-primary grid-rows-2">
          {repeater.map((item, index) => (
            <div className="relative">
              <div
                key={index}
                className=" z-20 min-w-[20.9375rem] min-h-[15.59375rem]"
              >
                <Image
                  src={samplecarSmall}
                  width="335px"
                  height="249.5px"
                  alt={`car-${index}`}
                  className="min-w-[20.9375rem] min-h-[15.59375rem]"
                />
              </div>
              <div className="absolute w-full z-40 top-0">
                <div className=" text-[#081314] flex items-center justify-center bg-btnGallery w-[10.3125rem] h-[2.75rem] ">
                  <Md360 className=" text-[1.6rem] mr-3" />
                  <span className="leading-primary">Exterior 360°</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center my-2">
        <div className="w-[85.1267992%] grid grid-cols-3 gap-x-2 text-white justify-evenly mt-2">
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
