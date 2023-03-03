import React from "react";

export const PrimaryButton = ({ children }) => {
  return (
    <button className=" bg-black text-white h-[3rem] px-4 rounded-[4px] w-[12.1875rem] mb-7">
      {children}
    </button>
  );
};

