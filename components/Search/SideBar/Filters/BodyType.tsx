import React, { useEffect } from "react";
import { setBodyTypeOptions } from "../../../../features/bodyType/bodyTypeSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import FilterBody from "../../../ui/others/FilterBody";
import { setFilterOptions } from "../../../../features/filters_options/filterOptionsSlice";
import useFilter from "../../../../hooks/useFilter";

const BodyType = () => {
  const dispatch = useAppDispatch();
  const { filters, bodyTypes } = useAppSelector((state) => state.search);
  let selectedBodyTypes = filters.body_type;

  const { bodyTypeOptions } = useAppSelector((state) => state.filterOptions);

  const handleSetOptions = () => {
    let optionsPayload = bodyTypes.map((location) => ({
      value: location._id,
      label: location._id,
      count: location.count,
    }));

    optionsPayload?.sort((a, b) => {
      if (
        selectedBodyTypes?.includes(a.value) &&
        !selectedBodyTypes.includes(b.value)
      ) {
        return -1;
      } else if (
        !selectedBodyTypes?.includes(a.value) &&
        selectedBodyTypes?.includes(b.value)
      ) {
        return 1;
      } else {
        return 0;
      }
    });

    dispatch(
      setFilterOptions({
        field: "bodyTypeOptions",
        value: optionsPayload,
      })
    );
  };

  useEffect(() => {
    let bodyTypeOptionsPayload = bodyTypes.map((bodyType) => ({
      value: bodyType.body_type._id,
      label: bodyType.body_type.title,
      count: bodyType.count,
    }));

    dispatch(setBodyTypeOptions(bodyTypeOptionsPayload));
  }, [bodyTypes, dispatch]);

  let { handleChange } = useFilter({
    field: "body_type",
    filterData: bodyTypes,
    selected: selectedBodyTypes as string[],
    setOptionsHandler: handleSetOptions,
  });

  return (
    <FilterBody title="Body Type">
      {bodyTypeOptions?.map((item, index) => (
        <div
          key={index}
          className="flex items-center pl-6 py-2.5 hover:bg-specialRed hover:bg-opacity-5 cursor-pointer"
          onClick={() => handleChange(item.value)}
        >
          <input
            type="checkbox"
            className="border-specialRed border rounded-sm w-[1.5rem] h-[1.5rem]  mr-3 text-specialRed focus:outline-none focus:shadow-outline-specialRed focus:ring-0"
            value={item.value}
            name="make"
            checked={selectedBodyTypes?.includes(item.value)}
            onChange={(e) => handleChange(e.target.value)}
          />
          <label
            className="leading-primary text-secondary text-lighterDark font-normal"
            style={{ marginLeft: "5px" }}
          >
            {item.label} ({item.count})
          </label>
        </div>
      ))}
    </FilterBody>
  );
};

export default BodyType;
