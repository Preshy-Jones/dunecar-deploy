import React from "react";
import dynamic from "next/dynamic";
import { ReactImageTurntable } from "react-image-turntable";
import { WhiteCancelIcon } from "../../ui/icons";
import { setCarDetailsActiveTab } from "../../../features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

const ExteriorThreeSixty = () => {
  const dispatch = useAppDispatch();
  const basePath = "https://dunecar.s3.eu-west-2.amazonaws.com/360";
  // const basePath = "/assets/360";
  // const basePath = "https://fastly-production.24c.in/webin/360";
  let count = 75;

  //make array from 1 to count
  const { car } = useAppSelector((state) => state.car);
  const arr = Array.from(Array(count).keys());

  const images = arr.map(
    (image) => `${car?.media?.exterior360}/output_${image}.jpeg`
  );

  return (
    <div className="font-roboto">
      <div className=" fixed top-0 left-0 right-0 bottom-0 h-[100vh] w-[100vw] z-60 bg-black flex flex-col justify-center items-center">
        <div className="absolute top-[1.5rem]  flex justify-center w-full z-40 ">
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
        <div className="absolute top-[4.5rem]">
          <div className="flex items-center justify-center">
            <ThreeSixty
              // @ts-ignore
              amount={75}
              imagePath={basePath}
              fileName="output_{index}.webp"
            />
            {/* <ReactImageTurntable images={images} /> */}
          </div>
        </div>
        <div className=" absolute z-40 bottom-[0.5rem] flex justify-center w-full">
          <div className="flex text-white leading-primary">
            <div className="bg-[#282842] h-[3.6875rem] px-[2rem]  flex justify-center items-center">
              <h2>Exterior</h2>
            </div>
            <div
              className=" h-[3.6875rem] px-[2rem]  flex justify-center items-center cursor-pointer"
              onClick={() => dispatch(setCarDetailsActiveTab(4))}
            >
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
      {/* <div className="bg-red-500 fixed top-0 left-0 right-0 bottom-0 h-[100vh] w-[100vw] z-40"></div> */}
    </div>
  );
};

export default ExteriorThreeSixty;

const ThreeSixty = dynamic(() => import("react-360-view"), {
  ssr: false,
});
