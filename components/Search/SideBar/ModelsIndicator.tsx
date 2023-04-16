import React from "react";
import { setOptionDeleted } from "../../../features/car/carSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import FilterIndicator from "./FilterIndicator";
import { deleteSelectedOption } from "../../../features/search/searchSlice";
import { useRouter } from "next/router";

const ModelsIndicator = ({ label }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  let { filters } = useAppSelector((state) => state.search);
  let selectedModels = filters.model;

  const handleDelete = async () => {
    await Promise.all([
      dispatch(
        deleteSelectedOption({
          field: "model",
          value: label,
        })
      ),
    ]);
    let newSelectedModels = selectedModels?.filter(
      (item) => item !== label
    ) as string[];
    router.push(
      {
        pathname: "/search",
        query: { ...router.query, model: newSelectedModels },
      },
      undefined,
      { shallow: true }
    );
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
