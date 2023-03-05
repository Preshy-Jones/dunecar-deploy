import React, { useEffect } from "react";
import Product from "./Product";

const ProductCatalogue = () => {
  return (
    <div className="bg-pageBg w-[99%]">
      <div className="flex gap-x-[1rem] gap-y-[1rem] px-[1.6rem] overflow-x-auto no-scrollbar">
        {dummyCars.map((item, index) => {
          return <Product key={index} car={item} />;
        })}
      </div>
    </div>
  );
};

export default ProductCatalogue;

const dummyCars = [
  {
    title: "2019 Toyota Camry",
    price: "N 3,000,000",
  },
  {
    title: "2016 Jaguar XF",
    price: "N 3,000,000",
  },
  {
    title: "2017 Mercedes Benz",
    price: "N 9,000,000",
  },
  {
    title: "2015 Honda Accord",
    price: "N 5,000,000",
  },
  {
    title: "2018 BMW 5 Series",
    price: "N 7,000,000",
  },
  {
    title: "2019 Ford Mustang",
    price: "N 3,000,000",
  }
];
