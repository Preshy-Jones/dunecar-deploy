import { useRouter } from "next/router";
import React from "react";
import { getCars } from "../../../../features/car/carSlice";
import { setFilter } from "../../../../features/search/searchSlice";
import { useAppDispatch } from "../../../../store/hooks";
import { FilterCustomSelect as Select } from "../../../ui/form/Select";
import { CaretLeftIcon } from "../../../ui/icons";

const Price = () => {
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

  return (
    <div className="">
      <div
        className="flex border-t-dividerGray border-t border-b pb-[1.25rem] pt-[1.25rem] items-center px-6"
        onClick={handleClose}
      >
        <CaretLeftIcon className="mr-7 fill-current" />
        <h1 className="leading-secondary text-secondary font-medium font-roboto ">
          Price
        </h1>
      </div>

      <div className="w-full mt-8 px-6">
        <div className="mb-4">
          <Select
            options={priceOptions}
            label="Min Price"
            placeHolder="Select Min Price"
          />
        </div>
        <div>
          <Select
            options={priceOptions}
            label="Max Price"
            placeHolder="Select Min Price"
          />
        </div>
      </div>
    </div>
  );
};

export default Price;

//type out new priceOptions array but make the arrangement reversed

export const priceOptions = [
  { value: "50000", label: "50000" },
  { value: "45000", label: "45000" },
  { value: "40000", label: "40000" },
  { value: "35000", label: "35000" },
  { value: "30000", label: "30000" },
  { value: "25000", label: "25000" },
  { value: "20000", label: "20000" },
  { value: "17500", label: "17500" },
  { value: "15000", label: "15000" },
  { value: "12500", label: "12500" },
  { value: "10000", label: "10000" },
  { value: "7500", label: "7500" },
  { value: "5000", label: "5000" },
];
