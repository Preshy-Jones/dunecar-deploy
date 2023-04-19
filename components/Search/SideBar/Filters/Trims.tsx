import React from "react";
import FilterBody from "../../../ui/others/FilterBody";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { setFilterOptions } from "../../../../features/filters_options/filterOptionsSlice";
import useFilter from "../../../../hooks/useFilter";

const TrimsFilter = () => {
  let { trimsOptions } = useAppSelector((state) => state.filterOptions);
  let { filters, trims } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  let selectedTrims = filters.trim;

  const handleSetOptions = () => {
    let optionsPayload = trims.map((option) => ({
      value: option._id,
      label: option.trim.title,
      count: option.count,
    }));

    optionsPayload?.sort((a, b) => {
      if (
        selectedTrims?.includes(a.value) &&
        !selectedTrims.includes(b.value)
      ) {
        return -1;
      } else if (
        !selectedTrims?.includes(a.value) &&
        selectedTrims?.includes(b.value)
      ) {
        return 1;
      } else {
        return 0;
      }
    });

    dispatch(
      setFilterOptions({
        field: "trimsOptions",
        value: optionsPayload,
      })
    );
  };

  let { handleChange } = useFilter({
    field: "trim",
    filterData: trims,
    selected: selectedTrims as string[],
    setOptionsHandler: handleSetOptions,
  });

  return (
    <FilterBody title="Trims">
      {trimsOptions?.map((item, index) => (
        <div
          className="flex items-center pl-6 py-2.5 hover:bg-specialRed hover:bg-opacity-5 cursor-pointer"
          key={index}a
          onClick={() => handleChange(item.value)}
        >
          <input
            type="checkbox"
            className="border-specialRed border rounded-sm w-[1.5rem] h-[1.5rem]  mr-3 text-specialRed focus:outline-none focus:shadow-outline-specialRed focus:ring-0"
            value={item.value}
            name="trim"
            checked={selectedTrims?.includes(item.value)}
            onChange={(e) => handleChange(e.target.value)}
          />
          <label
            className={`leading-primary text-secondary font-normal cursor-pointer ${
              selectedTrims?.includes(item.value)
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

export default TrimsFilter;
