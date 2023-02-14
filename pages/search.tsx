import React from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import ProductCatalogue from "../components/Search/Products";
import SearchBar from "../components/Search/SearchBar";
import SideBar from "../components/Search/SideBar";

const Search = () => {
  return (
    <div className="font-roboto">
      <SearchBar />
      <div className="grid grid-cols-store bg-pageBg">
        <div className=" col-start-1 col-end-2 ">
          <SideBar />
        </div>
        <div className="col-start-2 col-end-3">
          <ProductCatalogue />
        </div>
      </div>
    </div>
  );
};

Search.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default Search;
