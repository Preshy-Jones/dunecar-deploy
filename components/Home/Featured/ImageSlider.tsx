import Image from "next/image";
import React from "react";
import {
  SlideCaretLeftIcon,
  SlideCaretRightIcon,
  ToggleButtonIcon,
} from "../../ui/icons";
import ToggleLike from "./ToggleLike";
import sampleImage from "../../../public/assets/sample-car.svg";
import { motion } from "framer-motion";

const ImageSlider = () => {
  const images = [
    "https://res.cloudinary.com/xxolcare/image/upload/v1671797034/carzoo/citroenc1_zlhzgg.jpg",
    "https://res.cloudinary.com/xxolcare/image/upload/v1671797036/carzoo/seatMII_qwy9va.webp",
    "https://res.cloudinary.com/xxolcare/image/upload/v1671797037/carzoo/skodacitigo_xuc6u3.webp",
    "https://res.cloudinary.com/xxolcare/image/upload/v1671797038/carzoo/toyotaAYGO_xhj5b4.webp",
    "https://res.cloudinary.com/xxolcare/image/upload/v1671812540/carzoo/toyotaAYGOblue_v0cp38.webp",
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleSlide = (direction: string) => {
    if (direction === "left") {
      if (currentIndex === 0) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    } else if (direction === "right") {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(images.length - 1);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  return (
    <div className="relative">
      <div className="relative">
        <Image
          src={images[currentIndex]}
          alt="car-image1"
          className="z-0"
          width="391.46px"
          height="232.83px"
        />
        <ToggleLike />
        <ToggleButtonIcon className="absolute top-[12rem] right-[1rem] z-0 w-[3.198125rem]" />
      </div>
      <motion.div className="flex justify-between w-full  bottom-[5rem] absolute px-4">
        <motion.div
          className="w-[1.5rem]"
          whileHover={{
            x: 0,
            // transition: { duration: 1 },
          }}
          initial={{ x: 50 }}
        >
          <SlideCaretLeftIcon
            className="cursor-pointer"
            onClick={() => handleSlide("left")}
          />
        </motion.div>

        <motion.div
          className="w-[1.5rem]"
          whileHover={{
            x: 0,
            // transition: { duration: 1 },
          }}
          initial={{ x: -50 }}
        >
          <SlideCaretRightIcon
            className="cursor-pointer"
            onClick={() => handleSlide("right")}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ImageSlider;
