import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Product from "./Product";
import { useRouter } from "next/router";
import { getCars, getMoreCarsPagination } from "../../../features/car/carSlice";
import { Spinner } from "../../ui/others";

const ProductCatalogue = ({ cars, count, filters }) => {
  const repeater = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const router = useRouter();

  const dispatch = useAppDispatch();
  const { moreCarsLoading } = useAppSelector((state) => state.car);
  const { selectedMakes } = useAppSelector((state) => state.make);
  const { modelsSelected } = useAppSelector((state) => state.model);

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

    dispatch(
      getMoreCarsPagination({
        makes: makes,
        models: models,
        limit: (Number(filters.limit) + 20).toString(),
      })
    );

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

  return (
    <div className="bg-pageBg">
      <div className="flex items-center py-4 px-[1.5rem]">
        <h2 className="text-secondaryBlack">Used Cars for sale</h2>
        <div className="w-[1px] bg-dividerGray h-[24px] mx-4"></div>
        <h2 className="text-secondaryGray text-[0.875rem] leading-secondary">
          {count} Matches
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-x-[1rem] gap-y-[1rem] px-[1.6rem]">
        {cars.map((item, index) => {
          return <Product key={index} car={item} />;
        })}
      </div>

      {moreCarsLoading ? (
        <div className="flex justify-center items-center py-8">
          <Spinner />
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col my-8">
          <p className="text-secondaryGray mb-4">
            Currently viewing {filters.displayedCount} out of {count} Matches
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
