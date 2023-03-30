import React from "react";
import { useAppDispatch } from "../../../store/hooks";
import { capitalizeFirstLetter } from "../../../utils/utilityFunctions";
import { Cancel } from "../../ui/icons";

const FilterIndicator = ({ label, handleDelete }) => {
  return (
    <div className="flex bg-specialRed hover:bg-red-700 cursor-pointer mr-2 h-[2.25rem] items-center rounded-[6.25rem] px-2 text-[0.875rem] leading-[20px] font-normal mb-2">
      <h2 className="mr-4">{capitalizeFirstLetter(label)}</h2>
      <Cancel onClick={handleDelete} />
    </div>
  );
};

export default FilterIndicator;
