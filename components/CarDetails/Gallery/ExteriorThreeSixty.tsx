import React from "react";
import dynamic from "next/dynamic";

const ExteriorThreeSixty = () => {
  const basePath = "https://fastly-production.24c.in/webin/360";
  return (
    <div className="font-roboto">
      <div className=" fixed top-0 left-0 right-0 bottom-0 h-[100vh] w-[100vw] z-50">
        <div>
          <ThreeSixty
            amount={75}
            imagePath={basePath}
            fileName="output_{index}.jpeg"
          />
        </div>
        {/* <div className="bg-black h-[4rem] absolute top-0">
          <h1>helllo</h1>
        </div> */}
      </div>
    </div>
  );
};

export default ExteriorThreeSixty;

const ThreeSixty = dynamic(() => import("react-360-view"), {
  ssr: false,
});
