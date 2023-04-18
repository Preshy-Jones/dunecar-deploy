// import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { fetchFeatures } from "../../../../features/search/searchService";
import {
  getFeatures,
  setFeatureOptions,
  setFilter,
  setSelectedFeatures,
  setSelectedFilters,
} from "../../../../features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { CaretLeftIcon } from "../../../ui/icons";
import { Spinner } from "../../../ui/others";
import { Option } from "../../../../types/form";
import { getCars } from "../../../../features/car/carSlice";

const Feature = () => {
  const dispatch = useAppDispatch();
  const { featureOptions, features, filters } = useAppSelector(
    (state) => state.search
  );

  let selectedFeatures = filters.features;

  let initialFeatureOptions = features?.map((feature) => ({
    value: feature.feature._id,
    label: feature.feature.title,
    count: feature.count,
  }));

  setFeatureOptions(initialFeatureOptions);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let result = initialFeatureOptions?.filter((item) =>
      item.label.toLowerCase().includes(value.toLowerCase())
    );
    dispatch(setFeatureOptions(result));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    // console.log("shhah");
    let newSelectedFeatures = selectedFeatures?.filter(
      (item) => item !== e.target.value
    ) as string[];
    if (selectedFeatures?.includes(e.target.value)) {
      dispatch(
        setSelectedFilters({
          field: "features",
          value: newSelectedFeatures,
        })
      );

      dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            features: newSelectedFeatures,
          },
        })
      );
    } else {
      dispatch(
        setSelectedFilters({
          field: "features",
          value: [...(selectedFeatures as string[]), e.target.value],
        })
      );

      dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            features: [...(selectedFeatures as string[]), e.target.value],
          },
        })
      );
    }
    console.log(selectedFeatures);
  };
  const handleLabelClick = (value) => {
    let newSelectedFeatures = selectedFeatures?.filter(
      (item) => item !== value
    ) as string[];
    if (selectedFeatures?.includes(value)) {
      dispatch(
        setSelectedFilters({
          field: "features",
          value: newSelectedFeatures,
        })
      );

      dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            features: newSelectedFeatures,
          },
        })
      );
    } else {
      dispatch(
        setSelectedFilters({
          field: "features",
          value: [...(selectedFeatures as string[]), value],
        })
      );

      dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            features: [...(selectedFeatures as string[]), value],
          },
        })
      );
    }
  };
  const handleClose = () => {
    dispatch(setFilter(""));
  };

  useEffect(() => {
    //when there are no makeOptions loaded yet
    // if (!featureOptions || featureOptions.length === 0) {
    let featureOptionsPayload = features.map((feature) => ({
      value: feature.feature._id,
      label: feature.feature.title,
      count: feature.count,
    }));

    dispatch(setFeatureOptions(featureOptionsPayload));
    //}
  }, [features, dispatch]);
  return (
    <div>
      <div
        className="flex border-t-dividerGray border-t border-b pb-[1.25rem] pt-[1.25rem] items-center px-6 hover:bg-specialRed hover:bg-opacity-10 hover:text-specialRed"
        onClick={handleClose}
      >
        <CaretLeftIcon className="mr-7 hover:text-specialRed fill-current" />
        <h1 className="leading-secondary text-secondary font-medium font-roboto ">
          Features
        </h1>
      </div>

      <div className="h-[29rem] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded my-scrollbar scrollbar-thumb-specialRed scrollbar-track-gray-200">
        <div className="px-6 py-4">
          <h2 className="text-[0.875rem] text-lightDark">
            Search to include a filter
          </h2>
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Ex. 4WD/AWD"
            className="bg-pageBg2 mt-2 border border-[#F5F6F7] text-lightBlack rounded-md w-full ring-specialRed focus:border-none  focus:ring-specialRed"
          />
        </div>
        <div className="pl-6">
          <h2 className="text-tertiaryGray text-[1.125rem] font-medium leading-secondary">
            A-Z
          </h2>
          {featureOptions?.map((item, index) => (
            <div
              className="flex items-center  py-2.5 hover:bg-specialRed hover:bg-opacity-5 cursor-pointer"
              key={index}
              onClick={() => handleLabelClick(item.value)}
            >
              <input
                type="checkbox"
                className="border-specialRed border rounded-sm w-[1.5rem] h-[1.5rem] mr-3 text-specialRed focus:outline-none focus:shadow-outline-specialRed focus:ring-0"
                value={item.value}
                name="make"
                checked={selectedFeatures?.includes(item.value)}
                onChange={handleChange}
              />
              <label
                className={`leading-primary text-secondary font-normal cursor-pointer ${
                  selectedFeatures?.includes(item.value)
                    ? "font-bold text-specialRed"
                    : "text-lighterDark"
                }`}
                style={{ marginLeft: "5px" }}
              >
                {item.label} ({item.count})
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
