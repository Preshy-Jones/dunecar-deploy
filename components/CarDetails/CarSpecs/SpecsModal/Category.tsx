import React from "react";
import { AlertIcon, PlayIcon } from "../../../ui/icons";
import { useEffect } from "react";

const Category = ({ categoryData, title }) => {
  console.log(categoryData);

 
  return (
    <div className="mb-[4rem]">
      <div className="flex items-center justify-between">
        <h2 className="text-[#081314] text-[1.375rem] font-semibold">
          {title}
        </h2>
        {title === "Exterior & Mechanical" && (
          <div className="bg-lightRed flex items-center font-light justify-between px-4 py-2 ">
            <h2 className="mr-[0.7rem] font-light ">Installed Upgrade</h2>
            <AlertIcon />
          </div>
        )}
      </div>
      <div className="w-[60%] mt-4">
        <div className="grid grid-cols-2 gap-y-7 items-center">
          {categoryData.map((feature, index) => {
            return (
              <FeatureComponent
                key={index}
                installedUpgrade={feature.installedUpgrade}
                title={feature.feature.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;

const FeatureComponent = ({ installedUpgrade, title }) => {
  return (
    <div>
      {installedUpgrade && (
        <div className="flex justify-start">
          <div className="bg-lightRed flex items-center font-light justify-start px-4 py-2">
            <h2 className="mr-[0.7rem] font-light ">{title}</h2>
            <PlayIcon />
          </div>
        </div>
      )}
      {!installedUpgrade && (
        <h2 className="font-light leading-primary text-secondaryBlack">
          {title}
        </h2>
      )}
    </div>
  );
};
