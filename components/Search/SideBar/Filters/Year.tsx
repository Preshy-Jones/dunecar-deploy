import React from "react";
import { getCars } from "../../../../features/car/carSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";

const Year = () => {
  return (
    <div className="mb-6">
      <h1>year</h1>
    </div>
  );
};

export default Year;
