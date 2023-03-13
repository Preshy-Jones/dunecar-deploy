import React from "react";

const Category = ({ data, keys, title }) => {
  return (
    <div>
      <h2 className="text-[#081314] text-[1.375rem] font-semibold">{title}</h2>
      <div className="divide-dividerGray divide-y">
        {keys.map((entry,index) => (
          <div key={index} className="flex py-[2rem] justify-between w-full leading-primary text-secondaryBlack ">
            <h2 className="mr-3 font-light">{entry.title}</h2>
            <h2 className="font-semibold">{entry.keyFunc(data)}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
