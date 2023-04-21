import { Dispatch } from "@reduxjs/toolkit";
import {
  deleteSelectedMake,
  deleteSelectedOption,
} from "../../../../features/search/searchSlice";
import { setOptionDeleted } from "../../../../features/car/carSlice";

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

const deleteFunctions = {
  specialCasesFunctions: {
    make: makeHandleDelete,
  },
  specialCases: ["make"],
  general: generalHandleDelete,
};

export default deleteFunctions;
