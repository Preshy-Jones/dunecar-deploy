import React, { useState } from "react";
import { RxChevronDown, RxChevronUp } from "react-icons/rx";
import {
  getFilterOptions,
  setFilter,
} from "../../../features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { CaretRightIcon } from "../../ui/icons";
import { Spinner } from "../../ui/others";
import { sortOptions } from "./Filters/SortBy";
import { SideBarContentType } from "./sideBarContent";

interface Props {
  item: {
    title: string;
    filterComponentKey: string;
    slug: string;
  };
}

const Filter: React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();

  const { selectedSort, filtersLoading, filters } = useAppSelector(
    (state) => state.search
  );
  let [isLoading, setisLoading] = useState(false);

  // const { isLoading: makeIsLoading } = useAppSelector((state) => state.make);
  // const { isLoading: modelIsLoading } = useAppSelector((state) => state.model);

  // const { isLoading: bodyTypeIsLoading } = useAppSelector(
  //   (state) => state.bodyType
  // );

  // let loading;
  // switch (item.slug) {
  //   case "make":
  //     loading = makeIsLoading;
  //     break;
  //   case "model":
  //     loading = modelIsLoading;
  //     break;
  //   case "body-type":
  //     loading = bodyTypeIsLoading;
  //     break;
  //   default:
  //     break;
  // }

  const handleFilterOpen = async (filter: SideBarContentType) => {
    setisLoading(true);
    const fetchRequiredFilters = [
      "makes",
      "models",
      "bodyTypes",
      "fuelTypes",
      "features",
      "exterior_colors",
      "interior_colors",
      "transmissions",
      "locations",
      "series",
      "bodyStyles",
      "trims",
      "vehicleConditions",
      "cylinders",
    ];
    if (fetchRequiredFilters.includes(filter.slug)) {
      //from the filters object, remove the field that is equal to the filter.filterComponentKey

      let newFilters = Object.keys(filters).reduce((acc, key) => {
        if (key !== filter.filterComponentKey) {
          acc[key] = filters[key];
        }
        return acc;
      }, {} as any);

      await dispatch(
        getFilterOptions({
          key: filter.slug,
          filters: newFilters,
          group_by: filter.groupByKey as string,
        })
      );
      setisLoading(false);
      await dispatch(setFilter(filter.filterComponentKey));
    } else {
      setisLoading(false);
      await dispatch(setFilter(filter.filterComponentKey));
    }
  };

  return (
    <div className=" border-b border-b-dividerGray">
      <div
        className="flex h-[3.25rem] items-center px-[2rem] justify-between hover:bg-specialRed hover:bg-opacity-5 cursor-pointer hover:text-specialRed"
        onClick={() => handleFilterOpen(item)}
      >
        <h1 className="font-normal text-secondaryGray">
          {item.title} {item.slug === "sort-by" ? sortKeys[selectedSort] : ""}
        </h1>
        {isLoading ? (
          <div className="flex justify-center items-center">
            <div className="spinner w-5 h-5 border-[3px] border-specialRed border-t-white"></div>
          </div>
        ) : (
          <CaretRightIcon className="hover:text-specialRed fill-current text-secondaryGray" />
        )}
      </div>
    </div>
  );
};

export default Filter;

const sortKeys = {
  "best-match": "Best Match",
  "nearest-distance": "Nearest Distance",
  "lowest-price": "Lowest Price",
  "highest-price": "Highest Price",
  "lowest-mileage": "Lowest Mileage",
  "highest-mileage": "Highest Mileage",
  "newest-year": "Newer Year",
  "oldest-year": "Older Year",
  "new-match": "New Match",
};
