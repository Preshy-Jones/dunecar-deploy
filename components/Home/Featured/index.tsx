import Image from "next/image";
import React, { forwardRef, ReactNode, useState } from "react";
import dot from "../../../public/assets/dot.svg";
import Carousel, { ReactElasticCarouselProps } from "react-elastic-carousel";
import ToggleLike from "./ToggleLike";
import { ToggleButtonIcon } from "../../ui/icons";
import ImageSlider from "./ImageSlider";

const CustomCarousel = forwardRef<
  any,
  ReactElasticCarouselProps & { children: ReactNode[] }
>((props, ref) => <Carousel ref={ref} {...props} />);

const MobileSection = () => {
  const repeater = [0, 0, 0];
  const breakPoints = [
    { width: 300, itemsToShow: 1 },
    { width: 560, itemsToShow: 1 },
    { width: 900, itemsToShow: 2.53 },
    { width: 1150, itemsToShow: 2.53 },
    { width: 1450, itemsToShow: 2.53 },
    { width: 1750, itemsToShow: 2.53 },
  ];
  return (
    <div>
      <CustomCarousel
        isRTL={true}
        itemPadding={[1, 30]}
        breakPoints={breakPoints}
      >
        {repeater.map((item, index) => {
          return (
            <div key={index} className=" border border-[#D1D1D1]">
              <ImageSlider />
              <div className="px-2">
                <h2 className="text-[#414141] tracking-primary leading-primary text-[15.8519px] mb-4">
                  DUNE CERTIFIED
                </h2>
                <div className="flex">
                  <h2 className="text-[25.5856px] text-[#D14532]">
                    2019 Chysler 300s
                  </h2>
                  <div></div>
                </div>
                <div className="flex text-[30.7027px] justify-start">
                  <h3 className="mr-3">$23,500</h3>
                  <Image src={dot} alt="dot" />
                  <h3 className="ml-3">61k mi</h3>
                </div>
                <div className="px-1">
                  <div className="bg-[#D1D1D1] text-[#D1D1D1] h-[1px]"></div>
                </div>
                <div className="py-2">
                  <p className="text-lightDark">Available at Surulere, Lagos</p>
                </div>
              </div>
            </div>
          );
        })}
      </CustomCarousel>
    </div>
  );
};



const Featured = () => {
  const repeater = [0, 0, 0];
  return (
    <div className="py-[5rem] sm:flex sm:justify-center font-roboto mb-6 bg-white w-full">
      <div className="sm:w-[80%]">
        <h1 className="font-extrabold text-[2rem] mb-8">Featured Cars</h1>
        <div className="md:flex justify-around hidden">
          {repeater.map((item, index) => {
            return (
              <div key={index} className="w-[30%] border border-[#D1D1D1]">
                <Image src={sampleImage} alt="car-image1" />
                <div className="px-2">
                  <div className="flex">
                    <h2 className="text-[25.5856px] text-[#D14532] w-[50%]">
                      2019 Chysler 300s
                    </h2>
                    <div></div>
                  </div>
                  <div className="flex text-[30.7027px] justify-start">
                    <h3 className="mr-3">$23,500</h3>
                    <Image src={dot} alt="dot" />
                    <h3 className="ml-3">61k mi</h3>
                  </div>
                  <div className="px-1">
                    <div className="bg-[#D1D1D1] text-[#D1D1D1] h-[1px]"></div>
                  </div>
                  <div className="py-2">
                    <p className="text-lightDark">
                      Available at Surulere, Lagos
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="md:hidden w-full">
          <MobileSection />
        </div>
      </div>
    </div>
  );
};





export default Featured;