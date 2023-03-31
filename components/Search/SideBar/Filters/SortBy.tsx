import React from "react";
import { CaretLeftIcon } from "../../../ui/icons";
import {
  setFilter,
  setSelected,
} from "../../../../features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";

const SortBy = () => {
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(setFilter(""));
  };
  const { selectedSort } = useAppSelector((state) => state.search);
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    dispatch(setSelected(e.target.value));
  };

  const handleLabelClick = (value) => {
    dispatch(setSelected(value));
  };
  return (
    <div>
      <div
        className="flex border-t-dividerGray border-t border-b pb-[1.25rem] pt-[1.25rem] items-center pl-6 hover:bg-specialRed hover:bg-opacity-10 hover:text-specialRed "
        onClick={handleClose}
      >
        <CaretLeftIcon className="mr-7 hover:text-specialRed fill-current" />
        <h1 className="leading-secondary text-secondary font-medium">
          Sort By
        </h1>
      </div>

      <div>
        {sortOptions.map((option, index) => {
          return (
            <div
              className="flex items-center pl-6 py-2.5 hover:bg-specialRed hover:bg-opacity-5 cursor-pointer"
              key={index}
              onClick={() => handleLabelClick(option.value)}
            >
              <input
                type="radio"
                name="sort"
                value={option.value}
                checked={selectedSort === option.value}
                onChange={handleOptionChange}
                className="border-specialRed border w-[1.5rem] h-[1.5rem]  mr-3 text-specialRed focus:outline-none focus:shadow-outline-specialRed focus:ring-0"
              />
              <label
                className={`leading-primary text-secondary font-normal cursor-pointer ${
                  selectedSort === option.value
                    ? "font-bold text-specialRed"
                    : "text-lighterDark"
                }`}
                style={{ marginLeft: "5px" }}
              >
                {option.label}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SortBy;

export const sortOptions = [
  {
    value: "best-match",
    label: "Best Match",
  },
  {
    value: "nearest-distance",
    label: "Nearest Distance",
  },
  {
    value: "lowest-price",
    label: "Lowest Price",
  },
  {
    value: "highest-price",
    label: "Highest Price",
  },
  {
    value: "lowest-mileage",
    label: "Lowest Mileage",
  },
  {
    value: "highest-mileage",
    label: "Highest Mileage",
  },
  {
    value: "newest-year",
    label: "Newer Year",
  },
  {
    value: "oldest-year",
    label: "Older Year",
  },
  {
    value: "new-match",
    label: "New Match",
  },
];
