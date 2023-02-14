import React, { useState } from "react";
import { RxChevronDown, RxChevronUp } from "react-icons/rx";
import { CaretRightIcon } from "../../ui/icons";
interface Props {
  item: {
    title: string;
    filterComponent?: React.ReactNode;
  };
}

const Filter: React.FC<Props> = ({ item }) => {
  const [filterOpen, setFilterOpen] = useState<Boolean>(false);

  return (
    <div className=" border-b border-b-dividerGray">
      <div
        className="flex py-[1.25rem] px-[2rem] justify-between "
        onClick={() => item.filterComponent && setFilterOpen(!filterOpen)}
      >
        <h1 className=" font-normal">{item.title}</h1>
        {filterOpen ? <CaretRightIcon /> : <CaretRightIcon />}
      </div>
      <div className="px-[2rem]">
        {filterOpen && item.filterComponent && item.filterComponent}
      </div>
    </div>
  );
};

export default Filter;
