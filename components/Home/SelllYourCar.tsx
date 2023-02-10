import Image from "next/image";
import React from "react";
import PromoCar from "../../public/assets/promo-car.svg";

const SelllYourCar = () => {
  return (
    <div className="font-roboto flex justify-center bg-white sm:mt-0 mt-24" >
      <div className="flex items-center w-[80%] justify-between sm:flex-row flex-col">
        <div className="flex-2 sm:mb-0 mb-10 mr-8">
          <h1 className="text-[2rem] text-[#081314] font-extrabold">
            Sell your Car
          </h1>
          <p className="text-[18px] text-[#221121] mb-6 mt-2 leading-[2rem]">
            Get a free and instant, haggle-free offer. Fast payment on handover
            day when you sell us your car.
          </p>
          <div className="flex justify-between flex-col sm:flex-row">
            <input
              type="text"
              className=" border-gray-500 border-[0.4px] border-opacity-20 sm:w-[26.6875rem] pl-5 sm:mb-0 mb-3 mr-2  rounded-[4px]"
              placeholder="Enter your vehicle registration"
            />
            <button className="bg-[#D14532] text-white rounded-[4px] px-4 h-[54px] sm:w-[112px] leading-[19px]">
              Get offer
            </button>
          </div>
        </div>
        <div className="flex-3 flex justify-end">
          <Image src={PromoCar} alt="promo-car" />
        </div>
      </div>
    </div>
  );
};

export default SelllYourCar;
