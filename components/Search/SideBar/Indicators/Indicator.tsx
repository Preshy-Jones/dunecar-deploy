import React from "react";
import { getCars, setOptionDeleted } from "../../../../features/car/carSlice";

import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import FilterIndicator from "../FilterIndicator";
import { deleteSelectedMake } from "../../../../features/search/searchSlice";
import { useRouter } from "next/router";
import deleteFunctions from "./DeleteFilterFunctions";
import { years } from "../Filters/Year";
import { priceOptions } from "../Filters/Price";

const Indicators = ({ filterKey }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  let { filters } = useAppSelector((state) => state.search);
  let selectedOptions;
  let isType = filterKey !== "year" && filterKey !== "price";

  if (isType) {
    selectedOptions = filters[filterKey];
  }

  if (filterKey === "price") {
    selectedOptions =
      filters.price_from === filters.price_to
        ? `${filters.price_from}`
        : `${filters.price_from} - ${filters.price_to}`;
  }

  if (filterKey === "year") {
    selectedOptions =
      filters.year_from === filters.year_to
        ? `${filters.year_from}`
        : `${filters.year_from} - ${filters.year_to}`;
  }

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

  return (
    <div className="flex flex-wrap">
      {/* <h3 className="text-black">{filterKey}</h3> */}
      {isType ? (
        selectedOptions &&
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
        ))
      ) : (
        <div>
          {/* <h3 className="text-black">hehe{selectedOptions}</h3> */}
          {filters[priceYearKeys[filterKey].from] ===
            Number(
              priceYearDataKeys[filterKey][
                priceYearDataKeys[filterKey].length - 1
              ].value
            ) &&
          filters[priceYearKeys[filterKey].to] ===
            Number(priceYearDataKeys[filterKey][0].value) ? null : (
            <FilterIndicator
              label={String(selectedOptions)}
              handleDelete={() => {
                deleteFunctions.specialCasesFunctions[filterKey](
                  dispatch,
                  router,
                  filterKey
                );
              }}
            />
          )}
          {/* <FilterIndicator
            label={selectedOptions}
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
          /> */}
        </div>
      )}
    </div>
  );
};

export default Indicators;
