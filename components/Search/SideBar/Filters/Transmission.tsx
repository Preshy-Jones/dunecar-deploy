import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getCars } from "../../../../features/car/carSlice";
import {
  setFilter,
  setSelectedFilters,
} from "../../../../features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { CaretLeftIcon } from "../../../ui/icons";
import { setFilterOptions } from "../../../../features/filters_options/filterOptionsSlice";

const TransmissionFilter = () => {
  let { transmissionOptions } = useAppSelector((state) => state.filterOptions);
  let { transmissions, filters } = useAppSelector((state) => state.search);

  let selectedTransmissions = filters.transmission;
  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    //console.log(e.target.value);

    if (selectedTransmissions?.includes(e.target.value)) {
      let newSelectedTransmissions = selectedTransmissions?.filter(
        (item) => item !== e.target.value
      ) as string[];
      await dispatch(
        setSelectedFilters({
          field: "transmission",
          value: newSelectedTransmissions,
        })
      );

      await dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            transmission: newSelectedTransmissions,
          },
        })
      ).then(() => {
        //update route params
        router.push(
          {
            pathname: "/search",
            query: { ...router.query, transmission: newSelectedTransmissions },
          },
          undefined,
          { shallow: true }
        );
      });
    } else {
      await dispatch(
        setSelectedFilters({
          field: "transmission",
          value: [...(selectedTransmissions as string[]), e.target.value],
        })
      );
      await dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            transmission: [...(selectedTransmissions as string[]), e.target.value],
          },
        })
      ).then(() => {
        router.push(
          {
            pathname: "/search",
            query: {
              ...router.query,
              transmission: [...(selectedTransmissions as string[]), e.target.value],
            },
          },
          undefined,
          { shallow: true }
        );
      });
    }
  };
  const handleLabelClick = async (value) => {
    let selectedTransmissions = filters.transmission;
    if (selectedTransmissions?.includes(value)) {
      let newSelectedTransmissions = selectedTransmissions?.filter(
        (item) => item !== value
      ) as string[];
      await dispatch(
        setSelectedFilters({
          field: "transmission",
          value: newSelectedTransmissions,
        })
      );
      await dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            transmission: newSelectedTransmissions,
          },
        })
      ).then(() => {
        router.push(
          {
            pathname: "/search",
            query: { ...router.query, transmission: newSelectedTransmissions },
          },
          undefined,
          { shallow: true }
        );
      });
    } else {
      await dispatch(
        setSelectedFilters({
          field: "transmission",
          value: [...(selectedTransmissions as string[]), value],
        })
      );
      dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            transmission: [...(selectedTransmissions as string[]), value],
          },
        })
      ).then(() => {
        router.push(
          {
            pathname: "/search",
            query: {
              ...router.query,
              transmission: [...(selectedTransmissions as string[]), value],
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
  };

  useEffect(() => {
    let ooptionsPayload = transmissions.map((transmission) => ({
      value: transmission.transmission._id,
      label: transmission.transmission.title,
      count: transmission.count,
    }));

    let result = ooptionsPayload?.sort((a, b) => {
      if (
        selectedTransmissions?.includes(a.value) &&
        !selectedTransmissions.includes(b.value)
      ) {
        return -1;
      } else if (
        !selectedTransmissions?.includes(a.value) &&
        selectedTransmissions?.includes(b.value)
      ) {
        return 1;
      } else {
        return 0;
      }
    });

    dispatch(
      setFilterOptions({
        field: "transmissionOptions",
        value: ooptionsPayload,
      })
    );
    // }
  }, [transmissions, dispatch]);

  return (
    <div className="">
      <div
        className="flex border-t-dividerGray border-t border-b pb-[1.25rem] pt-[1.25rem] items-center px-6 hover:bg-specialRed hover:bg-opacity-10 hover:text-specialRed"
        onClick={handleClose}
      >
        <CaretLeftIcon className="mr-7 hover:text-specialRed fill-current" />
        <h1 className="leading-secondary text-secondary font-medium font-roboto">
          Transmission
        </h1>
      </div>
      <div className="h-[29rem] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded my-scrollbar scrollbar-thumb-specialRed scrollbar-track-gray-200">
        {transmissionOptions?.map((item, index) => (
          <div
            className="flex items-center pl-6 py-2.5 hover:bg-specialRed hover:bg-opacity-5 cursor-pointer"
            key={index}
            onClick={() => handleLabelClick(item.value)}
          >
            <input
              type="checkbox"
              className="border-specialRed border rounded-sm w-[1.5rem] h-[1.5rem]  mr-3 text-specialRed focus:outline-none focus:shadow-outline-specialRed focus:ring-0"
              value={item.value}
              name="transmission"
              checked={selectedTransmissions?.includes(item.value)}
              onChange={handleChange}
            />
            <label
              className={`leading-primary text-secondary font-normal cursor-pointer ${
                selectedTransmissions?.includes(item.value)
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
