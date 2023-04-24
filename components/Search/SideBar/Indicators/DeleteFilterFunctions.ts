import { Dispatch } from "@reduxjs/toolkit";
import {
  deleteSelectedMake,
  deleteSelectedOption,
  setSelectedFilters,
} from "../../../../features/search/searchSlice";
import { setOptionDeleted } from "../../../../features/car/carSlice";
import { years } from "../Filters/Year";
import { priceOptions } from "../Filters/Price";

const makeHandleDelete = (
  dispatch: Dispatch,
  option: string,
  selectedOptions: string[],
  router
) => {
  let newSelectedOptions = selectedOptions?.filter(
    (item) => item !== option
  ) as string[];
  dispatch(deleteSelectedMake(option));
  router.push(
    {
      pathname: "/search",
      query: { ...router.query, make: newSelectedOptions },
    },
    undefined,
    { shallow: true }
  );
  dispatch(setOptionDeleted(true));
  // console.log({ selectedMakes, modelsSelected });
};

const generalHandleDelete = (
  dispatch: Dispatch,
  option: string,
  selectedOptions: string[],
  router,
  field: string
) => {
  console.log({ option, selectedOptions, field });

  dispatch(
    deleteSelectedOption({
      field,
      value: option,
    })
  );

  let newSelectedOptions = selectedOptions?.filter(
    (item) => item !== option
  ) as string[];
  router.push(
    {
      pathname: "/search",
      query: { ...router.query, [field]: newSelectedOptions },
    },
    undefined,
    { shallow: true }
  );
  dispatch(setOptionDeleted(true));
};

const handleYearPriceDelete = async (
  dispatch: Dispatch,
  router,
  field: string
) => {
  const priceYearKeys = {
    price: {
      from: "price_from",
      to: "price_to",
    },
    year: {
      from: "year_from",
      to: "year_to",
    },
  };

  const priceYearDataKeys = {
    year: years,
    price: priceOptions,
  };

  await dispatch(
    setSelectedFilters({
      field: priceYearKeys[field].from,
      value: Number(
        priceYearDataKeys[field][priceYearDataKeys[field].length - 1].value
      ),
    })
  );

  await dispatch(
    setSelectedFilters({
      field: priceYearKeys[field].to,
      value: Number(priceYearDataKeys[field][0].value),
    })
  );

  router.push(
    {
      pathname: "/search",
      query: {
        ...router.query,
        [priceYearKeys[field].from]: [],
        [priceYearKeys[field].to]: [],
      },
    },
    undefined,
    { shallow: true }
  );
  dispatch(setOptionDeleted(true));
};
const deleteFunctions = {
  specialCasesFunctions: {
    make: makeHandleDelete,
    year: handleYearPriceDelete,
  },
  specialCases: ["make"],
  general: generalHandleDelete,
};

export default deleteFunctions;
