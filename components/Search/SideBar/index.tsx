import React from "react";
import SideBarContent from "./sideBarContent";

import Filter from "./Filter";
import FilterIcon from "../../ui/icons/FilterIcon";
import SortIcon from "../../ui/icons/SortIcon";

const SideBar = () => {
  return (
    <div className="font-roboto">
      <div className="flex px-6 justify-between py-[1.5rem] items-center">
        <FilterIcon />
        <h2 className="text-tertiaryGray font-semibold leading-secondary">
          FILTER & SORT (2)
        </h2>
        <h2 className="cursor-pointer underline text-tertiaryGray">
          Clear filter
        </h2>
      </div>
      <div className="flex items-center justify-between px-6 border-t-dividerGray border-t border-b">
        <div className="flex justify-between items-center">
          <SortIcon />
          <h2 className="ml-4">Sort by</h2>
        </div>
        <h2 className="text-specialRed leading-secondary">Best match</h2>
      </div>
      <div className="  border-r-[0.1rem] border-r-dividerGray">
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
