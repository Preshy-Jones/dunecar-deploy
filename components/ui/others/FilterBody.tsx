import React from "react";
import { CaretLeftIcon } from "../icons";
import { useAppDispatch } from "../../../store/hooks";
import { setFilter } from "../../../features/search/searchSlice";

const FilterBody = ({ title, children }) => {
  const dispatch = useAppDispatch();
  const handleClose = async () => {
    await dispatch(setFilter(""));
  };

  return (
    <div className="">
      <div
        className="flex border-t-dividerGray border-t border-b pb-[1.25rem] pt-[1.25rem] items-center px-6 hover:bg-specialRed hover:bg-opacity-10 hover:text-specialRed"
        onClick={handleClose}
      >
        <CaretLeftIcon className="mr-7 hover:text-specialRed fill-current" />
        <h1 className="leading-secondary text-secondary font-medium font-roboto">
          {title}
        </h1>
      </div>
      <div className="h-[29rem] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded my-scrollbar scrollbar-thumb-specialRed scrollbar-track-gray-200">
        {children}
      </div>
    </div>
  );
};

export default FilterBody;
