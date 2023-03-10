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
  const [navigatorOpen, setnavigatorOpen] = React.useState(false);

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
    <div
      className="relative"
      onMouseEnter={() => setnavigatorOpen(true)}
      onMouseLeave={() => setnavigatorOpen(false)}
    >
      <div className="relative">
        <Image
          src={images[currentIndex]}
          alt="car-image1"
          className="z-0"
          width="246.95px"
          height="146.88px"
        />
        <ToggleLike />
        <ToggleButtonIcon className="absolute top-[8rem] right-[0.5rem] z-0 w-[2.0175rem]" />
      </div>
      {navigatorOpen && (
        <motion.div
          className="flex justify-between w-full  bottom-[5rem] absolute px-4"
          transition={{ duration: 0.7 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <motion.div
            className="w-[1rem]"
            whileHover={{
              x: 0,
              // transition: { duration: 1 },
            }}
            initial={{ x: 20 }}
          >
            <SlideCaretLeftIcon
              className="cursor-pointer"
              onClick={() => handleSlide("left")}
            />
          </motion.div>

          <motion.div
            className="w-[1rem]"
            whileHover={{
              x: 0,
              // transition: { duration: 1 },
            }}
            initial={{ x: -20 }}
          >
            <SlideCaretRightIcon
              className="cursor-pointer"
              onClick={() => handleSlide("right")}
            />
          </motion.div>
        </motion.div>
      )}
      {navigatorOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-[15.434375rem] h-[9.18rem] absolute hello z-40 top-0"
        ></motion.div>
      )}
    </div>
  );
};

export default ImageSlider;
