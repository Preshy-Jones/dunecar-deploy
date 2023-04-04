// import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { fetchFeatures } from "../../../../features/search/searchService";
import {
  getFeatures,
  setFeatureOptions,
  setFilter,
  setSelectedFeatures,
} from "../../../../features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { CaretLeftIcon } from "../../../ui/icons";
import { Spinner } from "../../../ui/others";
import { Option } from "../../../../types/form";

const Feature = () => {
  const dispatch = useAppDispatch();
  const { selectedFeatures, featureOptions, features, featuresLoading } =
    useAppSelector((state) => state.search);
  // const queryClient = useQueryClient();

  // const { status, isLoading, data, error } = useQuery({
  //   queryKey: ["features"],
  //   queryFn: () => fetchFeatures(),
  // });

  let initialFeatureOptions = features?.map((feature) => ({
    value: feature.slug,
    label: feature.title,
  }));

  setFeatureOptions(initialFeatureOptions);
  // if (status === "success") {
  //   setFeatureOptions(initialFeatureOptions);
  // }

  // console.log(status);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let result = initialFeatureOptions?.filter((item) =>
      item.label.toLowerCase().includes(value.toLowerCase())
    );
    dispatch(setFeatureOptions(result));
  };

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
    // queryClient.setQueryData(["features"], (prevData?: any) => {
    //   let result = prevData.sort((a, b) => {
    //     if (
    //       selectedFeatures.includes(a.slug) &&
    //       !selectedFeatures.includes(b.slug)
    //     ) {
    //       return -1;
    //     } else if (
    //       !selectedFeatures.includes(a.slug) &&
    //       selectedFeatures.includes(b.slug)
    //     ) {
    //       return 1;
    //     } else {
    //       return 0;
    //     }
    //   });
    //   return result;
    // });
    dispatch(setFilter(""));
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

    console.log(result);

    // setOptionsUpdated(optionsUpdated);
    // console.log(optionsUpdated);

    dispatch(setFeatureOptions(result));
  };

  useEffect(() => {
    dispatch(getFeatures());
    // console.log(modelOptions);
  }, [dispatch]);

  useEffect(() => {
    //when there are no makeOptions loaded yet
    if (!featureOptions || featureOptions.length === 0) {
      let featureOptionsPayload = features.map((feature) => ({
        value: feature.slug,
        label: feature.title,
      }));

      dispatch(setFeatureOptions(featureOptionsPayload));
    }
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
      {featuresLoading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <Spinner />
        </div>
      ) : (
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
        </div>
      )}
    </div>
  );
};

export default Feature;
