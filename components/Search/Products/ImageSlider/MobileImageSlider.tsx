import React from "react";
import { ToggleButtonIcon } from "../../../ui/icons";
import ToggleLike from "../ToggleLike";
import MobileCarousel from "../MobileCarousel";

const MobileImageSlider = ({ car }) => {
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

  const repeater = [...Array(6)];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <div className="relative w-full">
      <div
        className=" h-[12.450625rem] w-full sm:w-full  sm:h-[9.18rem] flex flex-col items-center justify-between"
        style={{
          backgroundImage: `url(${
            car?.media?.gallery[imageKeys[currentIndex].title]
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center absolute bottom-0 mb-3">
          {repeater.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer w-[0.415625rem] h-[0.415625rem] rounded-secondary mr-2 ${
                index === currentIndex ? "bg-specialRed" : "bg-carouselBg"
              }`}
            ></div>
          ))}
        </div>
        <ToggleLike className="ml-4 mt-4 z-60 self-start" />
        <ToggleButtonIcon className="w-[2.0175rem] -mb-4 mr-2 self-end z-30" />
      </div>
    </div>
  );
};

export default MobileImageSlider;
