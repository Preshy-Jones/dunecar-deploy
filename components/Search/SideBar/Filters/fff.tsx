import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchFeatures } from "../../../../features/search/searchService";
import {
  setFeatureOptions,
  setFilter,
  setSelectedFeatures,
} from "../../../../features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { CaretLeftIcon } from "../../../ui/icons";
import { Spinner } from "../../../ui/others";

const Feature = () => {
  const dispatch = useAppDispatch();
  const { selectedFeatures, featureOptions } = useAppSelector(
    (state) => state.search
  );

  const { status, isLoading, data, error } = useQuery({
    queryKey: ["features"],
    queryFn: () => fetchFeatures(),
  });
  let initialFeatureOptions = data?.map((feature) => ({
    value: feature.slug,
    label: feature.title,
  }));

  dispatch(setFeatureOptions(initialFeatureOptions));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    console.log("shhah");
    if (selectedFeatures.includes(e.target.value)) {
      dispatch(
        setSelectedFeatures(
          selectedFeatures.filter((item) => item !== e.target.value)
        )
      );
    } else {
      dispatch(setSelectedFeatures([...selectedFeatures, e.target.value]));
    }
    console.log(selectedFeatures);
  };
  const handleLabelClick = (value) => {
    if (selectedFeatures.includes(value)) {
      dispatch(
        setSelectedFeatures(selectedFeatures.filter((item) => item !== value))
      );
    } else {
      dispatch(setSelectedFeatures([...selectedFeatures, value]));
    }
  };
  const handleClose = () => {
    dispatch(setFilter(""));
    console.log(initialFeatureOptions);

    let result = initialFeatureOptions?.sort((a, b) => {
      if (
        selectedFeatures.includes(a.value) &&
        !selectedFeatures.includes(b.value)
      ) {
        return -1;
      } else if (
        !selectedFeatures.includes(a.value) &&
        selectedFeatures.includes(b.value)
      ) {
        return 1;
      } else {
        return 0;
      }
    });
    dispatch(setSelectedFeatures(result));
  };

  return (
    <div>
      <div
        className="flex border-t-dividerGray border-t border-b pb-[1.25rem] pt-[1.25rem] items-center px-6 hover:bg-specialRed hover:bg-opacity-10 hover:text-specialRed"
        onClick={handleClose}
      >
        <CaretLeftIcon className="mr-7 hover:text-specialRed fill-current" />
        <h1 className="leading-secondary text-secondary font-medium font-roboto ">
          Year
        </h1>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <Spinner />
        </div>
      ) : (
        <div>
          {featureOptions?.map((item, index) => (
            <div
              className="flex items-center pl-6 py-2.5 hover:bg-specialRed hover:bg-opacity-5 cursor-pointer"
              key={index}
              onClick={() => handleLabelClick(item.value)}
            >
              <input
                type="checkbox"
                className="border-specialRed border rounded-sm w-[1.5rem] h-[1.5rem]  mr-3 text-specialRed focus:outline-none focus:shadow-outline-specialRed focus:ring-0"
                value={item.value}
                name="make"
                checked={selectedFeatures.includes(item.value)}
                onChange={handleChange}
              />
              <label
                className={`leading-primary text-secondary font-normal cursor-pointer ${
                  selectedFeatures.includes(item.value)
                    ? "font-bold text-specialRed"
                    : "text-lighterDark"
                }`}
                style={{ marginLeft: "5px" }}
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Feature;
