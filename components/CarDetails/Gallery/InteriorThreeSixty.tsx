import React from "react";
import dynamic from "next/dynamic";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setCarDetailsActiveTab } from "../../../features/ui/uiSlice";
import { WhiteCancelIcon } from "../../ui/icons";
import ReactPannellum, { getConfig } from "react-pannellum";

const ExteriorThreeSixty = () => {
  const dispatch = useAppDispatch();
  const { car } = useAppSelector((state) => state.car);
  const [yaw, setYaw] = React.useState(0);
  const [pitch, setPitch] = React.useState(0);
  const panImage: any = React.useRef(null);
  const config = {
    autoLoad: true,
  };
  return (
    <div className="font-roboto">
      <div className=" fixed top-0 left-0 right-0 bottom-0 h-[100vh] w-[100vw] z-60 bg-black  flex flex-col justify-center items-center">
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
        <ReactPhotoSphereViewer
          src={car?.media?.interior360 || ""}
          height={"80vh"}
          width={"80vw"}
          container={"customcontainer"}
        ></ReactPhotoSphereViewer>
        {/* <ReactPannellum
          id="1"
          sceneId="firstScene"
          imageSource="https://dunecar.s3.eu-west-2.amazonaws.com/samplecar/interior360/interior.jpg"
          config={config}
        /> */}

        <div className=" absolute flex justify-center w-full bottom-[0.5rem] z-40 ">
          <div className="flex text-white leading-primary">
            <div
              className=" h-[3.6875rem] px-[2rem]  flex justify-center items-center"
              onClick={() => dispatch(setCarDetailsActiveTab(2))}
            >
              <h2>Exterior</h2>
            </div>
            <div
              className=" h-[3.6875rem] px-[2rem]  flex justify-center items-center cursor-pointer"
              onClick={() => dispatch(setCarDetailsActiveTab(4))}
            >
              <h2>Opened doors</h2>
            </div>
            <div className="bg-[#282842] h-[3.6875rem] px-[2rem]  flex justify-center items-center cursor-pointer">
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

const ReactPhotoSphereViewer = dynamic(
  () =>
    import("react-photo-sphere-viewer").then(
      (mod) => mod.ReactPhotoSphereViewer
    ),
  {
    ssr: false,
  }
);
