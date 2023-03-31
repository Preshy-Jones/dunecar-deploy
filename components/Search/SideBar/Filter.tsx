import React, { useState } from "react";
import { RxChevronDown, RxChevronUp } from "react-icons/rx";
import { setFilter } from "../../../features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { CaretRightIcon } from "../../ui/icons";
import { Spinner } from "../../ui/others";
interface Props {
  item: {
    title: string;
    filterComponentKey: string;
  };
}

const Filter: React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();

  // const { isLoading: makeIsLoading } = useAppSelector((state) => state.make);
  // const { isLoading: modelIsLoading } = useAppSelector((state) => state.model);

  // const { isLoading: bodyTypeIsLoading } = useAppSelector(
  //   (state) => state.bodyType
  // );

  // let loading;
  // switch (item.slug) {
  //   case "make":
  //     loading = makeIsLoading;
  //     break;
  //   case "model":
  //     loading = modelIsLoading;
  //     break;
  //   case "body-type":
  //     loading = bodyTypeIsLoading;
  //     break;
  //   default:
  //     break;
  // }

  const handleFilterOpen = (filterKey: string) => {
    dispatch(setFilter(filterKey));
  };

  return (
    <div className=" border-b border-b-dividerGray">
      <div
        className="flex h-[3.25rem] items-center px-[2rem] justify-between hover:bg-specialRed hover:bg-opacity-5 cursor-pointer hover:text-specialRed"
        onClick={() => handleFilterOpen(item.filterComponentKey)}
      >
        <h1 className="font-normal">{item.title}</h1>
        <CaretRightIcon className="hover:text-specialRed fill-current" />
      </div>
    </div>
  );
};

export default Filter;
