import Image from "next/image";
import React from "react";
import sampleImage from "../../public/assets/sample-car.svg";
import dot from "../../public/assets/dot.svg";

const Featured = () => {
  const repeater = [0, 0, 0];
  return (
    <div className="mt-14 flex justify-center font-roboto mb-6 bg-white">
      <div className="w-[80%]">
        <h1 className="font-extrabold text-[2rem] mb-8">Featured Cars</h1>
        <div className="flex justify-around">
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
      </div>
    </div>
  );
};

export default Featured;
