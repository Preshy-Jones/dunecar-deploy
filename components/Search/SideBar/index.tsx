import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import FilterIcon from "../../ui/icons/FilterIcon";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { SideBarContent, sideBarContentFilters } from "./sideBarContent";
import { motion, AnimatePresence } from "framer-motion";
import Indicators from "./Indicators/Indicator";

const SideBar = () => {
  const { toggledFilter } = useAppSelector((state) => state.search);

  const dispatch = useAppDispatch();

  const { filters } = useAppSelector((state) => state.search);

  let filterArray = Object.keys(filters);

  //create a new filterArray by removing strings year_from, year_to, price_from, price_to and add new strings year, price

  let newFilterArray = filterArray.reduce((acc, key) => {
    if (
      key !== "year_from" &&
      key !== "year_to" &&
      key !== "price_from" &&
      key !== "price_to"
    ) {
      acc.push(key);
    }
    return acc;
  }, [] as string[]);

  newFilterArray.push("year");
  newFilterArray.push("price");

  return (
    <div className="font-roboto border-r-[0.1rem] border-r-dividerGray ">
      <div>
        <div className="flex px-6 justify-between pt-[1.5rem] items-center bg-white mb-3">
          <div className="flex items-center justify-between">
            <FilterIcon height={12} width={18} />
            <h2 className="text-tertiaryGray font-semibold leading-secondary ml-6">
              FILTER & SORT (2)
            </h2>
          </div>
          <h2 className="cursor-pointer underline text-tertiaryGray">
            Clear filter
          </h2>
        </div>
        <div className="flex flex-wrap w-full px-6 text-white pb-4">
          {newFilterArray.map((filter, index) => (
            <Indicators filterKey={filter} key={index} />
          ))}
        </div>
      </div>
      <div className="border-t-dividerGray border-b border-t py-[1.6rem] flex flex-col items-center bg-white">
        <div className="flex justify-center">
          <p className="text-lighterDark text-[0.875rem] leading-[1.25rem] mb-4 text-center w-[80%]">
            Pick up where you left off or get notified when new inventory
            arrives.
          </p>
        </div>
        <button className="font-bold text-specialRed leading-seventh text-[0.875rem] border border-specialRed h-[1.875rem] w-[7rem] rounded-tertiary">
          SAVE SEARCH
        </button>
      </div>
      <AnimatePresence>
        {!toggledFilter ? (
          <div className="h-[35rem] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded my-scrollbar scrollbar-thumb-specialRed scrollbar-track-gray-200">
            {/* <div className="flex items-end justify-between px-6 border-t-dividerGray border-t border-b h-[5.0625rem] leading-secondary pb-3">
              <div className="flex justify-between items-center">
                <SortIcon />
                <h2 className="ml-4">Sort by</h2>
              </div>
              <h2 className="text-specialRed">Best match</h2>
            </div> */}
            <div className="  ">
              <div>
                <div>
                  {SideBarContent.map((item: any, index) =>
                    item.shouldRenderFunction ? (
                      item.shouldRenderFunction(filters) && (
                        <Filter key={index} item={item} />
                      )
                    ) : (
                      <Filter key={index} item={item} />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            key="filteroptions"
            initial={{ x: "60%" }}
            animate={{ x: 0 }}
            exit={{ x: "60%" }}
            transition={{ duration: 0.2 }}
            className=""
          >
            {sideBarContentFilters[toggledFilter]}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideBar;
