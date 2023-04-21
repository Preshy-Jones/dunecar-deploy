import React from "react";
import FilterBody from "../../../ui/others/FilterBody";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { setFilterOptions } from "../../../../features/filters_options/filterOptionsSlice";
import useFilter from "../../../../hooks/useFilter";

const LocationFilter = () => {
  let { locationOptions } = useAppSelector((state) => state.filterOptions);
  let { filters, locations } = useAppSelector((state) => state.search);

  const dispatch = useAppDispatch();

  let selectedLocations = filters.location;

  const handleSetOptions = () => {
    let locationOptionsPayload = locations.map((location) => ({
      value: location._id,
      label: location._id,
      count: location.count,
    }));

    locationOptionsPayload?.sort((a, b) => {
      if (
        selectedLocations?.includes(a.value) &&
        !selectedLocations.includes(b.value)
      ) {
        return -1;
      } else if (
        !selectedLocations?.includes(a.value) &&
        selectedLocations?.includes(b.value)
      ) {
        return 1;
      } else {
        return 0;
      }
    });

    dispatch(
      setFilterOptions({
        field: "locationOptions",
        value: locationOptionsPayload,
      })
    );
  };

  let { handleChange } = useFilter({
    field: "location",
    filterData: locations,
    selected: selectedLocations as string[],
    setOptionsHandler: handleSetOptions,
  });

  return (
    <FilterBody title="Location">
      {locationOptions?.map((item, index) => (
        <div
          className="flex items-center pl-6 py-4 hover:bg-specialRed hover:bg-opacity-5 cursor-pointer"
          key={index}
          onClick={() => handleChange(item.value)}
        >
          <input
            type="checkbox"
            className="border-specialRed border rounded-sm w-[1.5rem] h-[1.5rem]  mr-3 text-specialRed focus:outline-none focus:shadow-outline-specialRed focus:ring-0"
            value={item.value}
            name="make"
            checked={selectedLocations?.includes(item.value)}
            onChange={(e) => handleChange(e.target.value)}
          />
          <label
            className={`leading-primary text-secondary font-normal cursor-pointer ${
              selectedLocations?.includes(item.value)
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

export default LocationFilter;
