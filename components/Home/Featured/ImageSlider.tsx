import Image from "next/image";
import React from "react";
import {
  SlideCaretLeftIcon,
  SlideCaretRightIcon,
  ToggleButtonIcon,
} from "../../ui/icons";
import ToggleLike from "./ToggleLike";
import sampleImage from "../../../public/assets/sample-car.svg";

const ImageSlider = () => {
  return (
    <div className="relative">
      <Image src={sampleImage} alt="car-image1" className="z-0" />
      <div className="flex justify-between">
        <div className="absolute top-7 z-30">
          <SlideCaretLeftIcon />
        </div>
        <div className="absolute top-7 z-30">
          <SlideCaretRightIcon />
        </div>
      </div>
      <ToggleLike />
      <ToggleButtonIcon className="absolute top-[12rem] right-[1rem] z-0" />
    </div>
  );
};

export default ImageSlider;
