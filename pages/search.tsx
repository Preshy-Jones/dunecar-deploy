import { useRouter } from "next/router";
import React, { useEffect } from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import ProductCatalogue from "../components/Search/Products";
import SearchBar from "../components/Search/SearchBar";
import SideBar from "../components/Search/SideBar";
import { getCars, setOptionDeleted } from "../features/car/carSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Spinner } from "../components/ui/others";
import { setSelectedMakes } from "../features/make/makeSlice";
import { setModelsSelected } from "../features/model/modelSlice";
import FilterComponent from "../components/Search/Products/MobileFilter/FilterComponent";
import Sticky from "react-stickynode";
import {
  setAllFilters,
  setSelectedFilters,
} from "../features/search/searchSlice";

const Search = () => {
  const dispatch = useAppDispatch();

  const { cars, isLoading, optionDeleted, moreCarsLoading, count } =
    useAppSelector((state) => state.car);

  // const { modelsSelected } = useAppSelector((state) => state.model);
  const { mobileFilterSortOpen, filters } = useAppSelector(
    (state) => state.search
  );

  let selectedMakes = filters.make;
  let modelsSelected = filters.model;

  const router = useRouter();

  useEffect(() => {
    const filterKeys = Object.keys(filters);

    if (!router.isReady) return;

    // const query = filterKeys.reduce((acc, key) => {
    //   if (filters[key].length > 0) {
    //     acc[key] = filters[key];
    //   }
    //   return acc;
    // }, {});

    const { query } = router;

    const queryKeys = Object.keys(query);

    const presentQueryKeys = queryKeys.filter((key) =>
      filterKeys.includes(key)
    );

    console.log({ presentQueryKeys });

    // const makes = query.make
    //   ? typeof query.make === "string"
    //     ? [query.make]
    //     : query.make
    //   : [];
    // const models = query.model
    //   ? typeof query.model === "string"
    //     ? [query.model]
    //     : query.model
    //   : [];

    const limit = (query.limit as string) ? (query.limit as string) : "20";
    console.log(query);

    // convert every field's value in the query to an array
    const newQueryObject = presentQueryKeys.reduce((acc, key) => {
      if (typeof query[key] === "string") {
        acc[key] = [query[key]];
      } else {
        acc[key] = query[key];
      }
      return acc;
    }, {});

    console.log({ newQueryObject });

    if (cars.length === 0) {
      dispatch(
        getCars({
          perPage: limit,
          page: "1",
          filters: {
            ...filters,
            ...newQueryObject,
          },
        })
      );

      dispatch(setAllFilters(newQueryObject));
      // // for (let key of presentQueryKeys) {
      // //   dispatch(
      // //     setSelectedFilters({
      // //       field: key,
      // //       value: query[key],
      // //     })
      // //   );
      // // }
      // dispatch(
      //   setSelectedFilters({
      //     field: "make",
      //     value: makes,
      //   })
      // );
      // dispatch(
      //   setSelectedFilters({
      //     field: "model",
      //     value: models,
      //   })
      // );
    }
  }, [router, dispatch]);

  useEffect(() => {
    //    console.log("hello there");
    if (optionDeleted) {
      console.log({ selectedMakes, modelsSelected });

      dispatch(
        getCars({
          perPage: "20",
          page: "1",
          filters,
        })
      );
      dispatch(setOptionDeleted(false));
    }
  }, [
    optionDeleted,
    dispatch,
    // selectedMakes, modelsSelected
  ]);

  useEffect(() => {
    function handleWindowResize() {
      if (window.innerWidth >= 640) {
        document.body.classList.remove("hide-overflow");
      }
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="font-roboto">
      {/* <pre>{JSON.stringify(router.query, null, 2)}</pre> */}
      <SearchBar />
      <div className="grid tablet:grid-cols-store sm:grid-cols-store_sm bg-pageBg">
        <Sticky
          enabled={true}
          top={0}
          bottomBoundary="#my-target"
          className="z-30"
        >
          <div className=" col-start-1 col-end-2 hidden sm:block z-30">
            <SideBar />
          </div>
        </Sticky>

        <div className="sm:col-start-2 col-end-3 col-start-1 z-70">
          {isLoading ? (
            <div className="flex justify-center items-center pt-[6rem]">
              <div className="spinner w-8 h-8 border-4 border-specialRed border-t-white"></div>
            </div>
          ) : (
            <ProductCatalogue cars={cars} count={count} />
          )}
        </div>
        <div
          className="col-start-1 col-end-3 self-center justify-self-center h-[20rem] mb-[5rem]"
          id="my-target"
        ></div>
        {mobileFilterSortOpen && <FilterComponent />}
      </div>
    </div>
  );
};

Search.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default Search;
