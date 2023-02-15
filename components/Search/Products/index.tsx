import React from "react";
import Product from "./Product";

const ProductCatalogue = () => {
  const repeater = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12];
  return (
    <div className="bg-pageBg">
      <div className="flex items-center py-4 px-[1.5rem]">
        <h2 className="text-secondaryBlack">Used Cars for sale</h2>
        <div className="w-[1px] bg-dividerGray h-[24px] mx-4"></div>
        <h2 className="text-secondaryGray text-[0.875rem] leading-secondary">
          20,000 Matches
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-x-[1rem] gap-y-[1rem] px-[1.6rem]">
        {repeater.map((item, index) => {
          return <Product key={index} />;
        })}
      </div>

      <div className="flex justify-center items-center flex-col my-8">
        <p className="text-secondaryGray mb-4">
          Currently viewing 20 out of 20,000 Matches
        </p>

        <button className="bg-black text-white h-[48px] px-4 rounded-[4px] w-[12.1875rem]">
          See More Matches
        </button>
      </div>
    </div>
  );
};

export default ProductCatalogue;
