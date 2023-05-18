import Image from "next/image";
import React from "react";
import {
  SlideCaretLeftIcon,
  SlideCaretRightIcon,
  ToggleButtonIcon,
} from "../../../ui/icons/";
import ToggleLike from "../ToggleLike";
import sampleImage from "../../../public/assets/sample-car.svg";
import { motion } from "framer-motion";
import Link from "next/link";

const ImageSlider = ({ setnavigatorOpen, navigatorOpen, carId, car }) => {
  const images = [
    "https://res.cloudinary.com/xxolcare/image/upload/v1671797034/carzoo/citroenc1_zlhzgg.jpg",
    "https://res.cloudinary.com/xxolcare/image/upload/v1671797036/carzoo/seatMII_qwy9va.webp",
    "https://res.cloudinary.com/xxolcare/image/upload/v1671797037/carzoo/skodacitigo_xuc6u3.webp",
    "https://res.cloudinary.com/xxolcare/image/upload/v1671797038/carzoo/toyotaAYGO_xhj5b4.webp",
    "https://res.cloudinary.com/xxolcare/image/upload/v1671812540/carzoo/toyotaAYGOblue_v0cp38.webp",
  ];
  const imageKeys = [
    {
      title: "frontPassenger",
      type: "exterior",
    },
    {
      title: "front",
      type: "exterior",
    },
    {
      title: "frontDriver",
      type: "exterior",
    },
    {
      title: "driverProfile",
      type: "exterior",
    },
    {
      title: "rearDriver",
      type: "exterior",
    },
    {
      title: "rear",
      type: "exterior",
    },
    {
      title: "rearPassenger",
      type: "exterior",
    },
    {
      title: "passengerProfile",
      type: "exterior",
    },
  ];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleSlide = (direction: string) => {
    console.log("wahala");

    if (direction === "left") {
      if (currentIndex === 0) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    } else if (direction === "right") {
      if (currentIndex === imageKeys.length - 1) {
        setCurrentIndex(imageKeys.length - 1);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  return (
    <div className="relative w-full">
      <div
        className=" h-[12.450625rem] w-full sm:w-full  sm:h-[9.18rem] flex flex-col justify-between"
        style={{
          backgroundImage: `url(${
            car?.media?.gallery[imageKeys[currentIndex].title]
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <Image
            src={images[currentIndex]}
            alt="car-image1"
            className="z-0"
            width="246.95px"
            height="146.88px"gradientBg
          /> */}
        <ToggleLike className="ml-4 mt-4 z-60" />

        {navigatorOpen && (
          <Link href={`car-details/${carId}`} passHref className="w-full z-10">
            <a target="_blank" className="w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="w-full h-full absolute gradientBg z-10 top-0"
              ></motion.div>
            </a>
          </Link>
        )}
        <ToggleButtonIcon className="w-[2.0175rem] -mb-4 mr-2 self-end z-30" />
      </div>

      {navigatorOpen && (
        <motion.div
          className="flex justify-between w-full  bottom-[4rem] absolute z-30  px-4"
          transition={{ duration: 0.7 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <motion.div
            className="w-[1rem]"
            // whileHover={{
            //   x: 0,
            //   // transition: { duration: 1 },
            // }}
            initial={{ x: 20 }}
            onClick={() => handleSlide("left")}
          >
            <SlideCaretLeftIcon className="cursor-pointer z-20" />
          </motion.div>
          <motion.div
            className="w-[1rem]"
            // whileHover={{
            //   x: 0,
            //   // transition: { duration: 1 },
            // }}
            initial={{ x: -20 }}
            onClick={() => handleSlide("right")}
          >
            <SlideCaretRightIcon className="cursor-pointer z-20" />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ImageSlider;
