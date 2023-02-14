import React, { useEffect, useState } from "react";
import { getCars, getModels } from "../../../../features/car/carSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { CarMake, CarModel } from "../../../../types/car";

const MakeModel = () => {
  return (
    <div className="mb-6">
      <h1>Model</h1>
    </div>
  );
};

export default MakeModel;
