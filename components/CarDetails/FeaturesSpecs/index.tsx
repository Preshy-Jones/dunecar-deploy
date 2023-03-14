import React from "react";
import { useAppSelector } from "../../../store/hooks";
import {
  AlertIcon,
  CancelIcon,
  CarWheelIcon,
  CheckIcon,
  PlayIcon,
} from "../../ui/icons";
import { specsData } from "../DetailsContent";
import FeatureComponents from "./FeatureComponents";

import SpecsModal from "./SpecsModal/SpecsModal";

const CarSpecs = () => {
  const [open, setOpen] = React.useState(false);

  const { car } = useAppSelector((state) => state.car);

  return (
    <div className="flex justify-center font-roboto" id="features">
      <div className="w-[85.1267992%]">
        <div className="mt-8 relative">
          <div>
            <h2 className="text-specialBlack font-extrabold text-[2rem] leading-[38px] mb-5">
              Features & Specs
            </h2>
            <div className="border-b border-dividerGray pb-2 mb-6 flex">
              <div className="bg-lightRed flex items-center font-light justify-between px-4 py-2 ">
                <h2 className="mr-[0.7rem] font-light ">Installed Upgrade</h2>
                <AlertIcon />
              </div>
            </div>
            <div className="w-[50%] mb-[3rem]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[5rem] gap-y-[1rem] items-center">
                {car?.carFeatures.slice(0, 12).map((feature, index) => (
                  <FeatureComponents
                    feature={feature.feature}
                    installedUpgrade={feature.installedUpgrade}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <button
              onClick={() => setOpen(true)}
              className="border-2 rounded-tertiary border-specialRed text-specialRed h-[3rem] font-semibold w-full sm:w-[25.5625rem]"
            >
              View all Features & Specs
            </button>
          </div>
          {open && <SpecsModal setOpen={setOpen} />}
        </div>
      </div>
    </div>
  );
};

export default CarSpecs;
