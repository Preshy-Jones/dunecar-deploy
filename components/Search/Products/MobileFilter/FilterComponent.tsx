import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import MakesIndicator from "../../SideBar/MakesIndicator";
import ModelsIndicator from "../../SideBar/ModelsIndicator";
import FilterIcon from "../../../ui/icons/FilterIcon";
import SortIcon from "../../../ui/icons/SortIcon";
import {
  SideBarContent,
  sideBarContentFilters,
} from "../../SideBar/sideBarContent";
import Filter from "../../SideBar/Filter";
import { CancelIcon } from "../../../ui/icons";
import { setMobileFilterSortOpen } from "../../../../features/search/searchSlice";

const FilterComponent = () => {
  const [isFilter, setIsFilter] = React.useState(false);

  const { toggledFilter } = useAppSelector((state) => state.search);

  const dispatch = useAppDispatch();

  const { selectedMakes } = useAppSelector((state) => state.make);
  const { modelsSelected } = useAppSelector((state) => state.model);

  return (
    <div className="bg-white inset-0 absolute z-40 font-roboto overflow-y-auto block sm:hidden  scrollbar-thin scrollbar-thumb-rounded my-scrollbar scrollbar-thumb-specialRed scrollbar-track-gray-200 ">
      <div className="mb-24">
        {!toggledFilter ? (
          <div>
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
                <div
                  className="cursor-pointer"
                  onClick={() => dispatch(setMobileFilterSortOpen(false))}
                >
                  <CancelIcon className="cursor-pointer" />
                </div>
              </div>
              <div className="flex flex-wrap w-full px-6 text-white pb-4">
                {selectedMakes &&
                  selectedMakes &&
                  selectedMakes.length > 0 &&
                  selectedMakes[0] !== "" &&
                  selectedMakes.map((make, index) => (
                    <div key={index}>
                      <MakesIndicator key={index} label={make} />
                    </div>
                  ))}
                {modelsSelected &&
                  modelsSelected &&
                  modelsSelected.length > 0 &&
                  modelsSelected[0] !== "" &&
                  modelsSelected.map((model, index) => (
                    <div key={index}>
                      <ModelsIndicator key={index} label={model} />
                    </div>
                  ))}
              </div>
            </div>
            <div className="border-t-dividerGray  border-t py-[1.6rem] flex justify-between items-center bg-white">
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
            <div className="">
              <div className="flex items-end justify-between px-6 border-t-dividerGray border-t border-b h-[5.0625rem] leading-secondary pb-3">
                <div className="flex justify-between items-center">
                  <SortIcon />
                  <h2 className="ml-4">Sort by</h2>
                </div>
                <h2 className="text-specialRed">Best match</h2>
              </div>
              <div className=" ">
                <div>
                  <div>
                    {SideBarContent.map((item: any, index) => (
                      <Filter key={index} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>{toggledFilter && sideBarContentFilters[toggledFilter]}</div>
        )}
      </div>

      <div className=" shadow-lg flex justify-center">
        <button
          className="bg-specialRed text-white h-[48px] px-4 rounded-[4px] w-[80%] font-semibold text-secondary"
          type="button"
        >
          See Matches
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
