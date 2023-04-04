import Image from "next/image";
import Link from "next/link";
import React from "react";
import dot from "../../../public/assets/dot-smaller.svg";
import { formatAmount, priceSplitter } from "../../../utils/utilityFunctions";
import ImageSlider from "./ImageSlider";
import { motion } from "framer-motion";

const Product = ({ car }) => {
  const [navigatorOpen, setnavigatorOpen] = React.useState(false);

  return (
    <div className="cursor-pointer flex justify-center w-full">
      <motion.div
        onMouseEnter={() => setnavigatorOpen(true)}
        onMouseLeave={() => setnavigatorOpen(false)}
        whileHover={{ borderColor: "#9CA3AF" }}
        transition={{ duration: 0.5 }}
        className=" w-[20.933125rem] sm:w-full flex flex-col items-center border-b border-r border-l border-dividerGray rounded-md "
      >
        <ImageSlider
          navigatorOpen={navigatorOpen}
          setnavigatorOpen={setnavigatorOpen}
          carId={car._id}
        />
        <Link href={`car-details/${car._id}`} passHref className="w-full">
          <a target="_blank" className="w-full">
            <div className="px-3 w-full  -mt-2">
              <div className="pt-3 pb-1">
                <h2 className="text-[#414141] tracking-primary leading-primary text-[10px] mb-2">
                  DUNE CERTIFIED
                </h2>
                <div className="flex mb-3 items-center">
                  <div className="w-[60%] h-8 flex items-center">
                    <h2 className="1.5xl:text-[1rem] tablet:text-[0.8rem] text-specialRed leading-primary font-normal cursor-pointer  break-words ">
                      {car.title}
                    </h2>
                  </div>
                  <div className="bg-greyBg flex items-center px-1 py-1 rounded-sm w-[40%] justify-center">
                    <h2 className="text-xlg leading-[0.87875rem] tracking-[-0.03em]">Nigerian Used</h2>
                  </div>
                </div>
                <div className="flex 1.5xl:text-[1.210525rem] lg:[1rem] tablet:text-[0.9rem] tex  justify-start text-specialBlack font-semibold leading-tertiary">
                  <h3 className="mr-3">
                    ${car?.price && priceSplitter(car?.price)}
                  </h3>

                  <Image src={dot} alt="dot" />

                  <h3 className="ml-3">
                    {" "}
                    {car?.mileage && formatAmount(car?.mileage)} mi
                  </h3>
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
          </a>
        </Link>
      </motion.div>
    </div>
  );
};

export default Product;
