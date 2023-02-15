import React from "react";
import SideBarContent from "./sideBarContent";

import Filter from "./Filter";
import FilterIcon from "../../ui/icons/FilterIcon";
import SortIcon from "../../ui/icons/SortIcon";
import { Cancel } from "../../ui/icons";

const SideBar = () => {
  return (
    <div className="font-roboto border-r-[0.1rem] border-r-dividerGray">
      <div>
        <div className="flex px-6 justify-between pt-[1.5rem] items-center bg-white mb-3">
          <div className="flex items-center justify-between">
            <FilterIcon />
            <h2 className="text-tertiaryGray font-semibold leading-secondary ml-6">
              FILTER & SORT (2)
            </h2>
          </div>
          <h2 className="cursor-pointer underline text-tertiaryGray">
            Clear filter
          </h2>
        </div>
        <div className="flex px-6 text-white pb-4">
          <div className="flex bg-specialRed mr-2 h-[2.25rem] items-center rounded-[6.25rem] px-2 text-[0.875rem] leading-[20px] font-normal">
            <h2 className="mr-4">Toyota</h2>
            <Cancel />
          </div>
          <div className="flex bg-specialRed h-[2.25rem] items-center rounded-[6.25rem] px-2">
            <h2 className="mr-4">Kia</h2>
            <Cancel />
          </div>
        </div>
      </div>
      <div className="border-t-dividerGray  border-t py-[1.6rem] flex flex-col items-center bg-white">
        <div className="flex justify-center">
          <p className="text-lighterDark text-[0.875rem] leading-[1.25rem] mb-4 text-center w-[80%]">
            Pick up where you left off or get notified when new inventory
            arrives.
          </p>
        </div>
        <button className="font-bold text-specialRed text-[0.875rem] border border-specialRed h-[1.875rem] w-[7rem]">
          SAVE SEARCH
        </button>
      </div>
      <div className="flex items-center justify-between px-6 border-t-dividerGray border-t border-b pb-[1.25rem] pt-[6rem]">
        <div className="flex justify-between items-center">
          <SortIcon />
          <h2 className="ml-4">Sort by</h2>
        </div>
        <h2 className="text-specialRed leading-secondary">Best match</h2>
      </div>
      <div className="  ">
        <div>
          <div>
            {SideBarContent.map((item, index) => (
              <Filter key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
