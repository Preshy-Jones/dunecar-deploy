import React from "react";
import { useAppDispatch } from "../../../store/hooks";
import { Cancel } from "../../ui/icons";

const FilterIndicator = ({ label, handleDelete }) => {
  return (
    <div className="flex bg-specialRed mr-2 h-[2.25rem] items-center rounded-[6.25rem] px-2 text-[0.875rem] leading-[20px] font-normal mb-2">
      <h2 className="mr-4">{label}</h2>
      <Cancel onClick={handleDelete} />
    </div>
  );
};

export default FilterIndicator;
