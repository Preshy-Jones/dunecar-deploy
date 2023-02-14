import React, { useState } from "react";
import { RxChevronDown, RxChevronUp } from "react-icons/rx";
interface Props {
  item: {
    title: string;
    filterComponent?: React.ReactNode;
  };
}

const Filter: React.FC<Props> = ({ item }) => {
  const [filterOpen, setFilterOpen] = useState<Boolean>(false);

  return (
    <div className="bg-brandLightest border-b border-b-borderMain">
      <div
        className="flex py-[1.5rem] px-[2rem] justify-between "
        onClick={() => item.filterComponent && setFilterOpen(!filterOpen)}
      >
        <h1 className=" font-extrabold">{item.title}</h1>
        {filterOpen ? (
          <RxChevronUp className="text-primaryMain text-[1.5rem] stroke-1" />
        ) : (
          <RxChevronDown className="text-primaryMain text-[1.5rem] stroke-1" />
        )}
      </div>
      <div className="px-[2rem]">
        {filterOpen && item.filterComponent && item.filterComponent}
      </div>
    </div>
  );
};

export default Filter;
