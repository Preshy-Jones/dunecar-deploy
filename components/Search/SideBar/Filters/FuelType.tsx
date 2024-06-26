import React from "react";
import FilterBody from "../../../ui/others/FilterBody";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { setFilterOptions } from "../../../../features/filters_options/filterOptionsSlice";
import useFilter from "../../../../hooks/useFilter";

const FuelTypeFilter = () => {
  let { fuelTypeOptions } = useAppSelector((state) => state.filterOptions);
  let { filters, fuelTypes } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  let selectedFuelTypes = filters.fuel_type;

  const handleSetOptions = () => {
    let optionsPayload = fuelTypes.map((option) => ({
      value: option._id,
      label: option.fuel_type.title,
      count: option.count,
    }));

    optionsPayload?.sort((a, b) => {
      if (
        selectedFuelTypes?.includes(a.value) &&
        !selectedFuelTypes.includes(b.value)
      ) {
        return -1;
      } else if (
        !selectedFuelTypes?.includes(a.value) &&
        selectedFuelTypes?.includes(b.value)
      ) {
        return 1;
      } else {
        return 0;
      }
    });

    dispatch(
      setFilterOptions({
        field: "fuelTypeOptions",
        value: optionsPayload,
      })
    );
  };

  let { handleChange } = useFilter({
    field: "fuel_type",
    filterData: fuelTypes,
    selected: selectedFuelTypes as string[],
    setOptionsHandler: handleSetOptions,
  });

  return (
    <FilterBody title="Series">
      {fuelTypeOptions?.map((item, index) => (
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
            checked={selectedFuelTypes?.includes(item.value)}
            onChange={(e) => handleChange(e.target.value)}
          />
          <label
            className={`leading-primary text-secondary font-normal cursor-pointer ${
              selectedFuelTypes?.includes(item.value)
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

export default FuelTypeFilter;
