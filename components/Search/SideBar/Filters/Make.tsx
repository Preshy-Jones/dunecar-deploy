import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getCars } from "../../../../features/car/carSlice";
import { setMakeOptions } from "../../../../features/make/makeSlice";
import {
  setFilter,
  setSelectedFilters,
} from "../../../../features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { CaretLeftIcon } from "../../../ui/icons";
import { Spinner } from "../../../ui/others";
import FilterBody from "../../../ui/others/FilterBody";
import useFilter from "../../../../hooks/useFilter";

const MakeFilter = () => {
  let { makeOptions, isLoading } = useAppSelector((state) => state.make);
  let { makes, filters } = useAppSelector((state) => state.search);

  let selectedMakes = filters.make;
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSetOptions = () => {
    let makeOptionsPayload = makes.map((make) => ({
      value: make.make._id,
      label: make.make.title,
      count: make.count,
    }));

    let result = makeOptionsPayload?.sort((a, b) => {
      if (
        selectedMakes?.includes(a.value) &&
        !selectedMakes.includes(b.value)
      ) {
        return -1;
      } else if (
        !selectedMakes?.includes(a.value) &&
        selectedMakes?.includes(b.value)
      ) {
        return 1;
      } else {
        return 0;
      }
    });

    dispatch(setMakeOptions(result));
  };

  let { handleChange } = useFilter({
    field: "make",
    filterData: makes,
    selected: selectedMakes as string[],
    setOptionsHandler: handleSetOptions,
  });

  return (
    <FilterBody title="Make">
      {makeOptions?.map((item, index) => (
        <div
          className="flex items-center pl-6 py-2.5 hover:bg-specialRed hover:bg-opacity-5 cursor-pointer"
          key={index}
          onClick={() => handleChange(item.value)}
        >
          <input
            type="checkbox"
            className="border-specialRed border rounded-sm w-[1.5rem] h-[1.5rem]  mr-3 text-specialRed focus:outline-none focus:shadow-outline-specialRed focus:ring-0"
            value={item.value}
            name="make"
            checked={selectedMakes?.includes(item.value)}
            onChange={(e) => handleChange(e.target.value)}
          />
          <label
            className={`leading-primary text-secondary font-normal cursor-pointer ${
              selectedMakes?.includes(item.value)
                ? "font-bold text-specialRed"
                : "text-lighterDark"
            }`}
            style={{ marginLeft: "5px" }}
          >
            {item.label} ({item.count})
          </label>
        </div>
      ))}
    </FilterBody>
  );
};

export default MakeFilter;
