import React from "react";
import ProductCatalogue from "./Products";

const RecommendedCars = () => {
  return (
    <div className="mt-[4rem]">
      <div className="flex justify-center mb-6">
        <h1 className="font-extrabold text-thirdBlack text-[2rem] leading-[2.375rem] w-primary">
          Recommended Cars
        </h1>
      </div>
      <div className="flex justify-end">
        <ProductCatalogue />
      </div>
    </div>
  );
};

export default RecommendedCars;
