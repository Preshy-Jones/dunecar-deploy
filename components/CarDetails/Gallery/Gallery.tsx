import Image from "next/image";
import React from "react";
import sampleCarBig from "../../../public/assets/giant-car.svg";
import samplecarSmall from "../../../public/assets/sample-car-small.svg";

const Gallery = () => {

  const repeater = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [active, setActive] = React.useState(0);

  return (
    <div>
      <div className=" fixed top-0 left-0 right-0 bottom-0 h-[100vh] w-[100vw] z-50">
        <div className="grid grid-cols-9">
          <div className="bg-white col-start-1 col-end-3 overflow-y-scroll  h-[50rem]">
            <div className="grid grid-cols-2 justify-items-center font-bold leading-[21px] text-[18px] mb-4 border-b border-x-dividerGray">
              <div className="py-4">
                <h2 className="text-lighterDark">Interior</h2>
              </div>
              <div className="py-4">
                <h2 className="text-secondaryBlack">Exterior</h2>
              </div>
            </div>
            {repeater.map((item, index) => (
              <div
                key={index}
                className=" sm:min-w-[22.875rem] sm:min-h-[14rem] w-[7.8775rem] h-[5.866875rem]"
              >
                <Image src={samplecarSmall} alt={`car-${index}`} />
              </div>
            ))}
          </div>
          <div className="bg-black col-start-3 col-end-10 w-full">
            <div className="sm:min-w-full h-full ">
              <Image src={sampleCarBig} alt="big-car" objectFit="contain" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black fixed top-0 left-0 right-0 bottom-0 h-[100vh] w-[100vw] z-40"></div>
    </div>
  );
};

export default Gallery;
