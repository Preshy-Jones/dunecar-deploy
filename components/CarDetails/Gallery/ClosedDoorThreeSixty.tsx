import React from "react";
import dynamic from "next/dynamic";
import { ReactImageTurntable } from "react-image-turntable";
import { WhiteCancelIcon } from "../../ui/icons";
import { setCarDetailsActiveTab } from "../../../features/ui/uiSlice";
import { useAppDispatch } from "../../../store/hooks";

const ClosedDoorSixty = () => {
  const dispatch = useAppDispatch();
  const basePath = "/assets/360";
  // const basePath = "https://fastly-production.24c.in/webin/360";
  let count = 75;

  //make array from 1 to count

  const arr = Array.from(Array(count).keys());

  const images = arr.map((image) => `${basePath}/output_${image}.jpeg`);

  return (
    <div className="font-roboto">
      <div className=" fixed top-0 left-0 right-0 bottom-0 h-[100vh] w-[100vw] z-60 bg-black flex flex-col justify-center items-center">
        <div className="absolute top-[1rem]  flex justify-center w-full z-40 ">
          <div className="flex justify-between w-full items-center">
            <div className=""></div>
            <div className=" ">
              <p className="text-greyText">Click and drag to rotate car</p>
            </div>
            <div
              className="pr-6 cursor-pointer"
              onClick={() => dispatch(setCarDetailsActiveTab(0))}
            >
              <WhiteCancelIcon />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="flex items-center justify-center">
            <ThreeSixty
              // @ts-ignore
              amount={75}
              imagePath={basePath}
              fileName="output_{index}.webp"
            />
            {/* <ReactImageTurntable images={images} /> */}
          </div>
          <div className=" absolute flex justify-center w-full">
            <div className="flex text-white leading-primary">
              <div
                className=" h-[3.6875rem] px-[2rem]  flex justify-center items-center"
                onClick={() => dispatch(setCarDetailsActiveTab(2))}
              >
                <h2>Exterior</h2>
              </div>
              <div className="bg-[#282842] h-[3.6875rem] px-[2rem]  flex justify-center items-center cursor-pointer">
                <h2>Opened doors</h2>
              </div>
              <div
                className=" h-[3.6875rem] px-[2rem]  flex justify-center items-center cursor-pointer"
                onClick={() => dispatch(setCarDetailsActiveTab(3))}
              >
                <h2>Interior</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-red-500 fixed top-0 left-0 right-0 bottom-0 h-[100vh] w-[100vw] z-40"></div> */}
    </div>
  );
};

export default ClosedDoorSixty;

const ThreeSixty = dynamic(() => import("react-360-view"), {
  ssr: false,
});
