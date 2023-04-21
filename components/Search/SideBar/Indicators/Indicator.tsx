import React from "react";
import { getCars, setOptionDeleted } from "../../../../features/car/carSlice";

import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import FilterIndicator from "../FilterIndicator";
import { deleteSelectedMake } from "../../../../features/search/searchSlice";
import { useRouter } from "next/router";
import deleteFunctions from "./DeleteFilterFunctions";

const Indicators = ({ filterKey }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  let { filters } = useAppSelector((state) => state.search);
  let selectedOptions = filters[filterKey];

  return (
    <div className="flex flex-wrap">
      {selectedOptions &&
        selectedOptions &&
        selectedOptions.length > 0 &&
        selectedOptions[0] !== "" &&
        selectedOptions.map((option, index) => (
          <FilterIndicator
            key={index}
            label={option}
            handleDelete={() => {
              if (!deleteFunctions.specialCases.includes(filterKey)) {
                deleteFunctions.general(
                  dispatch,
                  option,
                  selectedOptions,
                  router,
                  filterKey
                );
              }
              if (deleteFunctions.specialCases.includes(filterKey)) {
                deleteFunctions.specialCasesFunctions[filterKey](
                  dispatch,
                  option,
                  selectedOptions,
                  router
                );
              }
            }}
          />
        ))}
    </div>
  );
};

export default Indicators;
