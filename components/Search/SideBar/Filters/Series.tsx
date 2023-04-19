import React from "react";
import FilterBody from "../../../ui/others/FilterBody";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { setFilterOptions } from "../../../../features/filters_options/filterOptionsSlice";
import useFilter from "../../../../hooks/useFilter";

const SeriesFilter = () => {
  let { seriesOptions } = useAppSelector((state) => state.filterOptions);
  let { filters, series } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  let selectedSeries = filters.series;

  const handleSetOptions = () => {
    let optionsPayload = series.map((option) => ({
      value: option._id,
      label: option.series.title,
      count: option.count,
    }));

    optionsPayload?.sort((a, b) => {
      if (
        selectedSeries?.includes(a.value) &&
        !selectedSeries.includes(b.value)
      ) {
        return -1;
      } else if (
        !selectedSeries?.includes(a.value) &&
        selectedSeries?.includes(b.value)
      ) {
        return 1;
      } else {
        return 0;
      }
    });

    dispatch(
      setFilterOptions({
        field: "seriesOptions",
        value: optionsPayload,
      })
    );
  };

  let { handleChange } = useFilter({
    field: "series",
    filterData: series,
    selected: selectedSeries as string[],
    setOptionsHandler: handleSetOptions,
  });

  return (
    <FilterBody title="Series">
      {seriesOptions?.map((item, index) => (
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
            checked={selectedSeries?.includes(item.value)}
            onChange={(e) => handleChange(e.target.value)}
          />
          <label
            className={`leading-primary text-secondary font-normal cursor-pointer ${
              selectedSeries?.includes(item.value)
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

export default SeriesFilter;
