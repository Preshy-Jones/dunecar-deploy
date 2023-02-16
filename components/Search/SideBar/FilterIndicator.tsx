import React from "react";
import { Cancel } from "../../ui/icons";

const FilterIndicator = ({label}) => {
  return (
    <div className="flex bg-specialRed mr-2 h-[2.25rem] items-center rounded-[6.25rem] px-2 text-[0.875rem] leading-[20px] font-normal mb-2">
      <h2 className="mr-4">{label}</h2>
      <Cancel />
    </div>
  );
};

export default FilterIndicator;
