import { useRouter } from "next/router";
import React, { useEffect } from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import ProductCatalogue from "../components/Search/Products";
import SearchBar from "../components/Search/SearchBar";
import SideBar from "../components/Search/SideBar";
import { getCars, setOptionDeleted } from "../features/car/carSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Api from "../api";
import { Spinner } from "../components/ui/others";
import { setSelectedMakes } from "../features/make/makeSlice";
import { setModelsSelected } from "../features/model/modelSlice";
import FilterComponent from "../components/Search/Products/MobileFilter/FilterComponent";
import Sticky from "react-stickynode";

const Search = () => {
  const dispatch = useAppDispatch();

  const {
    cars,
    carFilter: filters,
    isLoading,
    optionDeleted,
    moreCarsLoading,
    count,
  } = useAppSelector((state) => state.car);

  const { selectedMakes } = useAppSelector((state) => state.make);
  const { modelsSelected } = useAppSelector((state) => state.model);
  const { mobileFilterSortOpen } = useAppSelector((state) => state.search);

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const { query } = router;
    const makes = query.make
      ? typeof query.make === "string"
        ? [query.make]
        : query.make
      : [];
    const models = query.model
      ? typeof query.model === "string"
        ? [query.model]
        : query.model
      : [];

    const limit = (query.limit as string) ? (query.limit as string) : "80";
    console.log(query);
    if (cars.length === 0) {
      dispatch(getCars({ makes: makes, models: models, limit: limit }));
      dispatch(setSelectedMakes(makes));
      dispatch(setModelsSelected(models));
    }
  }, [router, dispatch]);

  useEffect(() => {
    console.log("hello there");
    if (optionDeleted) {
      console.log({ selectedMakes, modelsSelected });

      dispatch(
        getCars({
          makes: selectedMakes,
          models: modelsSelected,
          limit: "20",
        })
      );
      dispatch(setOptionDeleted(false));
    }
  }, [optionDeleted, dispatch, selectedMakes, modelsSelected]);

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
        <Sticky enabled={true} top={0} bottomBoundary="#my-target" className="z-30">
          <div className=" col-start-1 col-end-2 hidden sm:block z-30">
            <SideBar filters={filters} />
          </div>
        </Sticky>

        <div className="sm:col-start-2 col-end-3 col-start-1 z-70">
          {isLoading ? (
            <div className="flex justify-center items-center pt-[6rem]">
              <Spinner />
            </div>
          ) : (
            <ProductCatalogue cars={cars} count={count} filters={filters} />
          )}
        </div>
        <div className="col-start-1 col-end-3 self-center justify-self-center h-[20rem] mb-[5rem]" id="my-target"></div>
        {mobileFilterSortOpen && <FilterComponent />}
      </div>

    </div>
  );
};

Search.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default Search;
