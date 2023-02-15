import React from "react";
import { SearchIcon } from "../ui/icons";

const SearchBar = () => {
  return (
    <div className="justify-center flex relative pb-4 shadow-primary pt-2 border-b border-b-dividerGray">
      <div className="relative w-[85.1267992%]">
        <input
          type="text"
          placeholder="Search by make, model or keyword"
          className=" bg-specialGray border border-[#D1D1D1] rounded-[4px] text-[1.125rem] font-normal placeholder-secondaryBlack leading-secondary w-full ring-specialRed focus:border-none  focus:ring-specialRed h-[3.625rem]"
        />
        <SearchIcon className="absolute right-[1rem] bottom-4" />
      </div>
    </div>
  );
};

export default SearchBar;
