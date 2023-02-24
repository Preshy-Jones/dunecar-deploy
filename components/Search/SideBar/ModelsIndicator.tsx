import React from "react";
import { setOptionDeleted } from "../../../features/car/carSlice";
import { deleteSelectedModel } from "../../../features/model/modelSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import FilterIndicator from "./FilterIndicator";

const ModelsIndicator = ({ label }) => {
  const dispatch = useAppDispatch();

  const handleDelete = async () => {
    await Promise.all([
      dispatch(deleteSelectedModel(label)),
    ]);
    dispatch(setOptionDeleted(true));
    // console.log({ selectedMakes, modelsSelected });
  };
  return (
    <div>
      <FilterIndicator label={label} handleDelete={handleDelete} />
    </div>
  );
};

export default ModelsIndicator;
