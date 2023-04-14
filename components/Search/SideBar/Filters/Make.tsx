import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getCars } from "../../../../features/car/carSlice";
import {
  getMakes,
  setMakeOptions,
  setSelectedMakes,
} from "../../../../features/make/makeSlice";
import { getModels } from "../../../../features/model/modelSlice";
import {
  setFilter,
  setFilterOptions,
} from "../../../../features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { CaretLeftIcon } from "../../../ui/icons";
import { Spinner } from "../../../ui/others";

const MakeFilter = () => {
  let { makeOptions, isLoading } = useAppSelector((state) => state.make);
  let { makes, filters } = useAppSelector((state) => state.search);

  let selectedMakes = filters.make;
  const router = useRouter();

  let initialMakeOptions = makes.map((make) => ({
    value: make.make._id,
    label: make.make.title,
    count: make.count
  }));

  const dispatch = useAppDispatch();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);

    let selectedMakes = filters.make;
    if (selectedMakes?.includes(e.target.value)) {
      dispatch(
        setFilterOptions({
          field: "make",
          value: selectedMakes.filter((item) => item !== e.target.value),
        })
      );
      dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            make: [...(selectedMakes as string[]), e.target.value],
          },
        })
      );
    } else {
      dispatch(
        setFilterOptions({
          field: "make",
          value: [...(selectedMakes as string[]), e.target.value],
        })
      );
      dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            make: [...(selectedMakes as string[]), e.target.value],
          },
        })
      );
    }
  };
  const handleLabelClick = (value) => {
    let selectedMakes = filters.make;
    if (selectedMakes?.includes(value)) {
      dispatch(
        setFilterOptions({
          field: "make",
          value: selectedMakes.filter((item) => item !== value),
        })
      );
      dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            make: [...(selectedMakes as string[]), value],
          },
        })
      );
    } else {
      dispatch(
        setFilterOptions({
          field: "make",
          value: [...(selectedMakes as string[]), value],
        })
      );
      dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            make: [...(selectedMakes as string[]), value],
          },
        })
      );
    }
  };
  const handleClose = async () => {
    await dispatch(setFilter(""));
    let selectedMakes = filters.make;
    let result = initialMakeOptions?.sort((a, b) => {
      if (
        selectedMakes?.includes(a.value) &&
        !selectedMakes.includes(b.value)
      ) {
        return -1;
      } else if (
        !selectedMakes?.includes(a.value) &&
        selectedMakes?.includes(b.value)
      ) {
        return 1;
      } else {
        return 0;
      }
    });

    console.log(result);

    // setOptionsUpdated(optionsUpdated);
    // console.log(optionsUpdated);

    dispatch(setMakeOptions(result));

    //update the query strings but don't reload the page
    router.push(
      {
        pathname: "/search",
        query: { ...router.query, make: selectedMakes },
      },
      undefined,
      { shallow: true }
    );
  };

  useEffect(() => {
    //when there are no makeOptions loaded yet
    // if (!makeOptions || makeOptions.length === 0) {
    let makeOptionsPayload = makes.map((make) => ({
      value: make.make._id,
      label: make.make.title,
      count: make.count
    }));

    dispatch(setMakeOptions(makeOptionsPayload));
    // }
  }, [makes, dispatch]);

  return (
    <div className="">
      <div
        className="flex border-t-dividerGray border-t border-b pb-[1.25rem] pt-[1.25rem] items-center px-6 hover:bg-specialRed hover:bg-opacity-10 hover:text-specialRed"
        onClick={handleClose}
      >
        <CaretLeftIcon className="mr-7 hover:text-specialRed fill-current" />
        <h1 className="leading-secondary text-secondary font-medium font-roboto">
          Make
        </h1>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <Spinner />
        </div>
      ) : (
        <div className="h-[29rem] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded my-scrollbar scrollbar-thumb-specialRed scrollbar-track-gray-200">
          {makeOptions?.map((item, index) => (
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
                checked={selectedMakes?.includes(item.value)}
                onChange={handleChange}
              />
              <label
                className={`leading-primary text-secondary font-normal cursor-pointer ${
                  selectedMakes?.includes(item.value)
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
      )}
    </div>
  );
};

export default MakeFilter;
