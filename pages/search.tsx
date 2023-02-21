import { useRouter } from "next/router";
import React, { useEffect } from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import ProductCatalogue from "../components/Search/Products";
import SearchBar from "../components/Search/SearchBar";
import SideBar from "../components/Search/SideBar";
import { getCars } from "../features/car/carSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Api from "../api";

const Search = ({ cars, filters, count, limit }) => {
  const dispatch = useAppDispatch();

  const { cars: clientSideCars } = useAppSelector((state) => state.car);

  // const router = useRouter();
  // const { makes, models } = router.query;
  // console.log(router.query);

  // useEffect(() => {
  //   dispatch(getCars({ makes: makes, models: models }));
  // }, [dispatch]);

  return (
    <div className="font-roboto">
      {/* <pre>{JSON.stringify(router.query, null, 2)}</pre> */}
      <SearchBar />
      <div className="grid grid-cols-store bg-pageBg">
        <div className=" col-start-1 col-end-2 ">
          <SideBar filters={filters} />
        </div>
        <div className="col-start-2 col-end-3">
          {cars && (
            <ProductCatalogue cars={cars} count={count} filters={filters} />
          )}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ query }: any) {
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

  const limit = query.limit ? query.limit : 20;
  const api = new Api();
  const { data } = await api.getCars({ makes, models, limit });

  console.log({
    makes,
    models,
  });

  // const data = await fetchApi(
  //   `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  // );

  return {
    props: {
      cars: data.data.results.cars,
      count: data.data.results.count,
      filters: {
        makes,
        models,
        limit: data.data.filter.limit,
        displayedCount: data.data.filter.displayedCount,
      },
    },
  };
}

Search.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default Search;
