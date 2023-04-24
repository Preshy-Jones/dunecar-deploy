import { useRouter } from "next/router";
import React from "react";
import { getCars } from "../../../../features/car/carSlice";
import {
  setFilter,
  setSelectedFilters,
} from "../../../../features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { FilterCustomSelect as Select } from "../../../ui/form/Select";
import { CaretLeftIcon } from "../../../ui/icons";

const Price = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { filters } = useAppSelector((state) => state.search);

  let price_from = filters.price_from;
  let price_to = filters.price_to;

  const handleClose = () => {
    dispatch(setFilter(""));
  };

  const handleChange = async (value, field) => {
    console.log("field", field);
    console.log("value", value);

    const fieldOppositKeys = {
      price_from: "price_to",
      price_to: "price_from",
    };

    let oppositeFieldValue = filters[fieldOppositKeys[field]];

    if (field === "price_from" && value > (price_to as number)) {
      oppositeFieldValue = value;
      await dispatch(
        setSelectedFilters({
          field: "price_to",
          value: Number(value),
        })
      );
    }
    if (field === "price_to" && value < (price_from as number)) {
      oppositeFieldValue = value;
      await dispatch(
        setSelectedFilters({
          field: "price_from",
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
            onChange={(value) => handleChange(value, "price_from")}
            options={priceOptions}
            label="Min Price"
            placeHolder="Select Min Price"
            value={price_from}
          />
        </div>
        <div>
          <Select
            onChange={(value) => handleChange(value, "price_to")}
            options={priceOptions}
            label="Max Price"
            placeHolder="Select Min Price"
            value={price_to}
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
