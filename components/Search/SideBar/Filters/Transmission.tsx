import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getCars } from "../../../../features/car/carSlice";
import { setMakeOptions } from "../../../../features/make/makeSlice";
import {
  setFilter,
  setSelectedFilters,
} from "../../../../features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { CaretLeftIcon } from "../../../ui/icons";

const TransmissionFilter = () => {
  let { makeOptions, isLoading } = useAppSelector((state) => state.make);
  let { makes, filters } = useAppSelector((state) => state.search);

  let selectedMakes = filters.make;
  const router = useRouter();

  // let initialMakeOptions = makes.map((make) => ({
  //   value: make.make._id,
  //   label: make.make.title,
  //   count: make.count,
  // }));

  const dispatch = useAppDispatch();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    //console.log(e.target.value);

    let selectedMakes = filters.make;
    if (selectedMakes?.includes(e.target.value)) {
      let newSelectedMakes = selectedMakes?.filter(
        (item) => item !== e.target.value
      ) as string[];
      await dispatch(
        setSelectedFilters({
          field: "make",
          value: newSelectedMakes,
        })
      );

      await dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            make: newSelectedMakes,
          },
        })
      ).then(() => {
        //update route params
        router.push(
          {
            pathname: "/search",
            query: { ...router.query, make: newSelectedMakes },
          },
          undefined,
          { shallow: true }
        );
      });
    } else {
      await dispatch(
        setSelectedFilters({
          field: "make",
          value: [...(selectedMakes as string[]), e.target.value],
        })
      );
      await dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            make: [...(selectedMakes as string[]), e.target.value],
          },
        })
      ).then(() => {
        router.push(
          {
            pathname: "/search",
            query: {
              ...router.query,
              make: [...(selectedMakes as string[]), e.target.value],
            },
          },
          undefined,
          { shallow: true }
        );
      });
    }
  };
  const handleLabelClick = async (value) => {
    let selectedMakes = filters.make;
    if (selectedMakes?.includes(value)) {
      let newSelectedMakes = selectedMakes?.filter(
        (item) => item !== value
      ) as string[];
      await dispatch(
        setSelectedFilters({
          field: "make",
          value: newSelectedMakes,
        })
      );
      await dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            make: newSelectedMakes,
          },
        })
      ).then(() => {
        router.push(
          {
            pathname: "/search",
            query: { ...router.query, make: newSelectedMakes },
          },
          undefined,
          { shallow: true }
        );
      });
    } else {
      await dispatch(
        setSelectedFilters({
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
      ).then(() => {
        router.push(
          {
            pathname: "/search",
            query: {
              ...router.query,
              make: [...(selectedMakes as string[]), value],
            },
          },
          undefined,
          { shallow: true }
        );
      });
    }
  };
  const handleClose = async () => {
    await dispatch(setFilter(""));
    let selectedMakes = filters.make;

    // console.log(result);

    // // setOptionsUpdated(optionsUpdated);
    // // console.log(optionsUpdated);

    // dispatch(setMakeOptions(result));

    //update the query strings but don't reload the page
  };

  useEffect(() => {
    //when there are no makeOptions loaded yet
    // if (!makeOptions || makeOptions.length === 0) {
    let makeOptionsPayload = makes.map((make) => ({
      value: make.make._id,
      label: make.make.title,
      count: make.count,
    }));

    let result = makeOptionsPayload?.sort((a, b) => {
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

    dispatch(setMakeOptions(result));
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
    </div>
  );
};

export default TransmissionFilter;
