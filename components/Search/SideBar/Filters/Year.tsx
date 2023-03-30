import { useRouter } from "next/router";
import React from "react";
import { getCars } from "../../../../features/car/carSlice";
import { setFilter } from "../../../../features/search/searchSlice";
import { useAppDispatch } from "../../../../store/hooks";
import { FilterCustomSelect as Select } from "../../../ui/form/Select";
import { CaretLeftIcon } from "../../../ui/icons";

const Year = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
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

  const years = [
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

  return (
    <div className="px-6">
      <div
        className="flex border-t-dividerGray border-t border-b pb-[1.25rem] pt-[1.25rem] items-center"
        onClick={handleClose}
      >
        <CaretLeftIcon className="mr-7 fill-current" />
        <h1 className="leading-secondary text-secondary font-medium font-roboto ">
          Year
        </h1>
      </div>

      <div className="w-full mt-8">
        <div className="mb-4">
          <Select options={years} label="Min Price" placeHolder="Select Min Price" />
        </div>
        <div>
          <Select options={years} label="Max Price"  placeHolder="Select Min Price"/>
        </div>
      </div>
    </div>
  );
};

export default Year;
