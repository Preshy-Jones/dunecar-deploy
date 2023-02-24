import React from "react";
import { getCars, setOptionDeleted } from "../../../features/car/carSlice";
import { deleteSelectedMake } from "../../../features/make/makeSlice";
import { deleteModelsofMake } from "../../../features/model/modelSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import FilterIndicator from "./FilterIndicator";

const MakesIndicator = ({ label }) => {
  const dispatch = useAppDispatch();
  const { modelsSelected } = useAppSelector((state) => state.model);
  const { selectedMakes } = useAppSelector((state) => state.make);

  const handleDelete = async () => {
    await Promise.all([
      dispatch(deleteSelectedMake(label)),
      dispatch(deleteModelsofMake({ make: label, models: modelsSelected })),
    ]);
    dispatch(setOptionDeleted(true));
    // console.log({ selectedMakes, modelsSelected });
  };

  return <FilterIndicator label={label} handleDelete={handleDelete} />;
};

export default MakesIndicator;
