import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Product from "./Product";
import { useRouter } from "next/router";
import { getCars, getMoreCarsPagination } from "../../../features/car/carSlice";
import { Spinner } from "../../ui/others";
import FilterIcon from "../../ui/icons/FilterIcon";
import FilterComponent from "./MobileFilter/FilterComponent";
import { setMobileFilterSortOpen } from "../../../features/search/searchSlice";
import { motion } from "framer-motion";

const ProductCatalogue = ({ cars, count }) => {
  const repeater = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const router = useRouter();

  const dispatch = useAppDispatch();
  const { moreCarsLoading } = useAppSelector((state) => state.car);

  const getMoreCars = () => {
    const path = router.pathname;
    const { query } = router;
    const makes = query.make
      ? typeof query.make === "string"
        ? [query.make]
        : query.make
      : [""];
    const models = query.model
      ? typeof query.model === "string"
        ? [query.model]
        : query.model
      : [""];
    console.log({ path, query });

    // dispatch(
    //   getMoreCarsPagination({
    //     makes: makes,
    //     models: models,
    //     limit: (Number(filters.limit) + 20).toString(),
    //   })
    // );

    // router.push(
    //   {
    //     pathname: path,
    //     query: { ...query, limit: Number(filters.limit) + 20 },
    //   },
    //   {
    //     shallow: true,
    //   }
    // );
  };

  const toggleFilterSort = () => {
    dispatch(setMobileFilterSortOpen(true));
    document.body.classList.add("hide-overflow");
    // if (!filterSortOpen) {
    //   document.body.classList.add("hide-overflow");
    // } else {
    //   document.body.classList.remove("hide-overflow");
    // }
  };

  return (
    <div className="bg-pageBg">
      <div
        className=" sm:hidden flex items-center bg-white px-[1.5rem] border-t border-b border-t-dividerGray cursor-pointer"
        onClick={toggleFilterSort}
      >
        <FilterIcon height="24" width="24" />

        <h2 className="text-specialRed py-2 font-semibold leading-secondary ml-6">
          FILTER & SORT (2)
        </h2>
      </div>
      <div className="flex items-center py-4 px-[1.5rem]">
        <h2 className="text-secondaryBlack">Used Cars for sale</h2>
        <div className="w-[1px] bg-dividerGray h-[24px] mx-4"></div>
        <h2 className="text-secondaryGray text-[0.875rem] leading-secondary">
          {count} Matches
        </h2>
      </div>
      <div className="grid lg:grid-cols-4 tablet:grid-cols-3 sm:grid-cols-2 iphone:grid-cols-2 grid-cols-1 gap-x-[1rem] gap-y-[1rem] sm:px-[1.6rem]">
        {cars.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Product key={index} car={item} />
            </motion.div>
          );
        })}
      </div>

      {moreCarsLoading ? (
        <div className="flex justify-center items-center py-8">
          <div className="spinner w-6 h-6 border-4 border-specialRed border-t-white"></div>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col my-8">
          <p className="text-secondaryGray mb-4">
            Currently viewing {cars.length} out of {count} Matches
          </p>

          <button
            className="bg-black text-white h-[48px] px-4 rounded-[4px] w-[12.1875rem]"
            onClick={getMoreCars}
          >
            See More Matches
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCatalogue;
