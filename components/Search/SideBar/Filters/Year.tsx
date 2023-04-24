import { useRouter } from "next/router";
import React from "react";
import { getCar, getCars } from "../../../../features/car/carSlice";
import {
  setFilter,
  setSelectedFilters,
} from "../../../../features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { FilterCustomSelect as Select } from "../../../ui/form/Select";
import { CaretLeftIcon } from "../../../ui/icons";

const Year = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.search);

  // const options = years.map((year) => ({
  //   value: year._id,
  //   label: year._id,
  // }));
  let year_from = filters.year_from;
  let year_to = filters.year_to;

  const handleClose = () => {
    dispatch(setFilter(""));

    // setOptionsUpdated(optionsUpdated);
    // console.log(optionsUpdated);

    //    dispatch(getCars({ makes: selectedMakes, limit: "20" }));

    //update the query strings but don't reload the page
    // router.push(
    //   {
    //     pathname: "/search",
    //     query: { ...router.query, make: selectedMakes },
    //   },
    //   undefined,
    //   { shallow: true }
    // );
  };

  const handleChange = async (value, field) => {
    console.log("field", field);
    console.log("value", value);

    const fieldOppositKeys = {
      year_from: "year_to",
      year_to: "year_from",
    };

    let oppositeFieldValue = filters[fieldOppositKeys[field]];

    if (field === "year_from" && value > (year_to as number)) {
      oppositeFieldValue = value;
      await dispatch(
        setSelectedFilters({
          field: "year_to",
          value: Number(value),
        })
      );
    }
    if (field === "year_to" && value < (year_from as number)) {
      oppositeFieldValue = value;
      await dispatch(
        setSelectedFilters({
          field: "year_from",
          value: Number(value),
        })
      );
    }

    await dispatch(
      setSelectedFilters({
        field,
        value: Number(value),
      })
    );

    // if(filters[fieldOppositKeys[field]] ){
    //     await dispatch(
    //       setSelectedFilters({
    //         field: fieldOppositKeys[field],
    //         value:
    //           field === "year_from"
    //             ? Number(years[0].value)
    //             : Number(years[years.length - 1].value),
    //       })
    //     );}

    await dispatch(
      getCars({
        page: "1",
        perPage: "20",
        filters: {
          ...filters,
          [field]: Number(value),
          [fieldOppositKeys[field]]: Number(oppositeFieldValue),
        },
      })
    ).then(() => {
      //update route params
      router.push(
        {
          pathname: "/search",
          query: { ...router.query, [field]: value },
        },
        undefined,
        { shallow: true }
      );
    });
  };

  return (
    <div className="">
      <div
        className="flex border-t-dividerGray border-t border-b pb-[1.25rem] pt-[1.25rem] items-center px-6 hover:bg-specialRed hover:bg-opacity-10 hover:text-specialRed"
        onClick={handleClose}
      >
        <CaretLeftIcon className="mr-7 hover:text-specialRed fill-current" />
        <h1 className="leading-secondary text-secondary font-medium font-roboto ">
          Year
        </h1>
      </div>

      <div className="w-full mt-8 px-6">
        <div className="mb-4">
          <Select
            onChange={(value) => handleChange(value, "year_from")}
            options={years}
            label="From"
            placeHolder="From"
            value={year_from}
          />
        </div>
        <div>
          <Select
            onChange={(value) => handleChange(value, "year_to")}
            options={years}
            label="To"
            placeHolder="To"
            value={year_to}
          />
        </div>
      </div>
    </div>
  );
};

export default Year;

export const years = [
  { value: "2023", label: "2023" },
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
  { value: "2020", label: "2020" },
  { value: "2019", label: "2019" },
  { value: "2018", label: "2018" },
  { value: "2017", label: "2017" },
  { value: "2016", label: "2016" },
  { value: "2015", label: "2015" },
  { value: "2014", label: "2014" },
  { value: "2013", label: "2013" },
  { value: "2012", label: "2012" },
  { value: "2011", label: "2011" },
];
