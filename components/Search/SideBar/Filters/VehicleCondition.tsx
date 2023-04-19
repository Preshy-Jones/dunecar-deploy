import React from "react";
import FilterBody from "../../../ui/others/FilterBody";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { setFilterOptions } from "../../../../features/filters_options/filterOptionsSlice";
import useFilter from "../../../../hooks/useFilter";

const VehicleConditionFilter = () => {
  let { vehicleConditionsOptions } = useAppSelector(
    (state) => state.filterOptions
  );
  let { filters, vehicleConditions } = useAppSelector((state) => state.search);

  const dispatch = useAppDispatch();

  let selectedVehicleCondtions = filters.vehicle_condition;

  const handleSetOptions = () => {
    let optionsPayload = vehicleConditions.map((option) => ({
      value: option._id,
      label: option._id,
      count: option.count,
    }));

    optionsPayload?.sort((a, b) => {
      if (
        selectedVehicleCondtions?.includes(a.value) &&
        !selectedVehicleCondtions.includes(b.value)
      ) {
        return -1;
      } else if (
        !selectedVehicleCondtions?.includes(a.value) &&
        selectedVehicleCondtions?.includes(b.value)
      ) {
        return 1;
      } else {
        return 0;
      }
    });

    dispatch(
      setFilterOptions({
        field: "vehicleConditionsOptions",
        value: optionsPayload,
      })
    );
  };

  let { handleChange } = useFilter({
    field: "vehicle_condition",
    filterData: vehicleConditions,
    selected: selectedVehicleCondtions as string[],
    setOptionsHandler: handleSetOptions,
  });
  const keys = {
    local_used: "Local Used",
    foreign_used: "Foreign Used",
    brand_new: "Brand New",
  };

  return (
    <FilterBody title="Vehicle Conditions">
      {vehicleConditionsOptions?.map((item, index) => (
        <div
          className="flex items-center pl-6 py-2.5 hover:bg-specialRed hover:bg-opacity-5 cursor-pointer"
          key={index}
          onClick={() => handleChange(item.value)}
        >
          <input
            type="checkbox"
            className="border-specialRed border rounded-sm w-[1.5rem] h-[1.5rem]  mr-3 text-specialRed focus:outline-none focus:shadow-outline-specialRed focus:ring-0"
            value={item.value}
            name="vehicle_condition"
            checked={selectedVehicleCondtions?.includes(item.value)}
            onChange={(e) => handleChange(e.target.value)}
          />
          <label
            className={`leading-primary text-secondary font-normal cursor-pointer ${
              selectedVehicleCondtions?.includes(item.value)
                ? "font-bold text-specialRed"
                : "text-lighterDark"
            }`}
            style={{ marginLeft: "5px" }}
          >
            {keys[item.label]} ({item.count})
          </label>
        </div>
      ))}
    </FilterBody>
  );
};

export default VehicleConditionFilter;
