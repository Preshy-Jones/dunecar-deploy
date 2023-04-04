import { useRouter } from "next/router";
import React from "react";
import { getCars } from "../../../../features/car/carSlice";
import { setFilter } from "../../../../features/search/searchSlice";
import { useAppDispatch } from "../../../../store/hooks";
import { FilterCustomSelect as Select } from "../../../ui/form/Select";
import { CaretLeftIcon } from "../../../ui/icons";

const Mileage = () => {
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

  const mileages = [
    { value: "10000", label: "10,000" },
    { value: "20000", label: "20,000" },
    { value: "30000", label: "30,000" },
    { value: "40000", label: "40,000" },
    { value: "50000", label: "50,000" },
    { value: "60000", label: "60,000" },
    { value: "70000", label: "70,000" },
    { value: "80000", label: "80,000" },
    { value: "90000", label: "90,000" },
    { value: "100000", label: "100,000" },
    { value: "110000", label: "110,000" },
    { value: "120000", label: "120,000" },
    { value: "130000", label: "130,000" },
    { value: "140000", label: "140,000" },
    { value: "150000", label: "150,000" },
  ];

  return (
    <div className="">
      <div
        className="flex border-t-dividerGray border-t border-b pb-[1.25rem] pt-[1.25rem] items-center px-6 hover:bg-specialRed hover:bg-opacity-10 hover:text-specialRed"
        onClick={handleClose}
      >
        <CaretLeftIcon className="mr-7 hover:text-specialRed fill-current" />
        <h1 className="leading-secondary text-secondary font-medium font-roboto ">
          Mileage
        </h1>
      </div>

      <div className="w-full mt-8 px-6">
        <div className="mb-4 flex items-center w-full">
          <div className="w-[80%]">
            <Select
              options={mileages}
              label="Max Mileage"
              placeHolder="Max Mileage"
            
            />
          </div>
          <h2 className="text-lightBlack text-sme mt-6 w-[20%] ml-3">Or less</h2>
        </div>
        {}
      </div>
    </div>
  );
};

export default Mileage;
