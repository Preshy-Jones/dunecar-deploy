import React from "react";
import { getCars, setOptionDeleted } from "../../../features/car/carSlice";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import FilterIndicator from "./FilterIndicator";
import { deleteSelectedMake } from "../../../features/search/searchSlice";

const MakesIndicator = ({ label }) => {
  const dispatch = useAppDispatch();
  const { modelsSelected } = useAppSelector((state) => state.model);
  const { selectedMakes } = useAppSelector((state) => state.make);

  const handleDelete = async () => {
    await Promise.all([dispatch(deleteSelectedMake(label))]);
    dispatch(setOptionDeleted(true));
    // console.log({ selectedMakes, modelsSelected });
  };

  return <FilterIndicator label={label} handleDelete={handleDelete} />;
};

export default MakesIndicator;
