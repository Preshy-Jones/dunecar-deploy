import React from "react";
import dynamic from "next/dynamic";

const ExteriorThreeSixty = () => {
  const basePath = "/assets/360";
  return (
    <div className="font-roboto">
      <div className=" fixed top-[10vh] left-0 right-0 bottom-0 h-[100vh] w-[100vw] z-50">
        <div>
          <ThreeSixty
           // @ts-ignore
            amount={75}
            imagePath={basePath}
            fileName="output_{index}.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default ExteriorThreeSixty;

const ThreeSixty = dynamic(() => import("react-360-view"), {
  ssr: false,
});
