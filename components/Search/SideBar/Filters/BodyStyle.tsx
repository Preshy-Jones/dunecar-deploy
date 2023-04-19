import React from "react";
import FilterBody from "../../../ui/others/FilterBody";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { setFilterOptions } from "../../../../features/filters_options/filterOptionsSlice";
import useFilter from "../../../../hooks/useFilter";

const BodyStyleFilter = () => {
  let { bodyStyleOptions } = useAppSelector((state) => state.filterOptions);
  let { filters, bodyStyles } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  let selectedBodyStyles = filters.body_style;

  const handleSetOptions = () => {
    let optionsPayload = bodyStyles.map((option) => ({
      value: option._id,
      label: option.body_style.title,
      count: option.count,
    }));

    optionsPayload?.sort((a, b) => {
      if (
        selectedBodyStyles?.includes(a.value) &&
        !selectedBodyStyles.includes(b.value)
      ) {
        return -1;
      } else if (
        !selectedBodyStyles?.includes(a.value) &&
        selectedBodyStyles?.includes(b.value)
      ) {
        return 1;
      } else {
        return 0;
      }
    });

    dispatch(
      setFilterOptions({
        field: "bodyStyleOptions",
        value: optionsPayload,
      })
    );
  };

  let { handleChange } = useFilter({
    field: "body_style",
    filterData: bodyStyles,
    selected: selectedBodyStyles as string[],
    setOptionsHandler: handleSetOptions,
  });

  return (
    <FilterBody title="Series">
      {bodyStyleOptions?.map((item, index) => (
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
            checked={selectedBodyStyles?.includes(item.value)}
            onChange={(e) => handleChange(e.target.value)}
          />
          <label
            className={`leading-primary text-secondary font-normal cursor-pointer ${
              selectedBodyStyles?.includes(item.value)
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

export default BodyStyleFilter;
