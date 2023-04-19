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

const modelsHandleDelete = (
  dispatch: Dispatch,
  option: string,
  selectedOptions: string[],
  router
) => {
  dispatch(
    deleteSelectedOption({
      field: "model",
      value: option,
    })
  );

  let newSelectedModels = selectedOptions?.filter(
    (item) => item !== option
  ) as string[];
  router.push(
    {
      pathname: "/search",
      query: { ...router.query, model: newSelectedModels },
    },
    undefined,
    { shallow: true }
  );
  dispatch(setOptionDeleted(true));
  // console.log({ selectedMakes, modelsSelected });
};

const deleteFunctions = {
  make: makeHandleDelete,
  model: modelsHandleDelete,
};

export default deleteFunctions;
