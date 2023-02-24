import React, { useState } from "react";
import { RxChevronDown, RxChevronUp } from "react-icons/rx";
import { setFilter } from "../../../features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { CaretRightIcon } from "../../ui/icons";
interface Props {
  item: {
    title: string;
    filterComponentKey: string;
  };
}

const Filter: React.FC<Props> = ({ item }) => {

  const dispatch = useAppDispatch();
  

  const handleFilterOpen = (filterKey: string) => {
    dispatch(setFilter(filterKey));
  };

  return (
    <div className=" border-b border-b-dividerGray">
      <div
        className="flex py-[1.25rem] px-[2rem] justify-between "
        onClick={() => handleFilterOpen(item.filterComponentKey)}
      >
        <h1 className=" font-normal">{item.title}</h1>
        <CaretRightIcon />
      </div>
    </div>
  );
};

export default Filter;
