import React from "react";
import { AlertIcon } from "../../ui/icons";

const FeatureComponents = ({ installedUpgrade, feature }) => {
  return (
    <div>
      {installedUpgrade && (
        <div className="flex items-center">
          <div className="bg-lightRed flex items-center font-light justify-between px-4 py-2 ">
            <h2 className="mr-[0.7rem] font-light ">{feature.title}</h2>
            <AlertIcon />
          </div>
        </div>
      )}
      {!installedUpgrade && (
        <h2 className="font-light leading-primary text-secondaryBlack">
          {feature.title}
        </h2>
      )}
    </div>
  );
};

export default FeatureComponents;