import React from "react";
import { getCars, setOptionDeleted } from "../../../../features/car/carSlice";

import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import FilterIndicator from "../FilterIndicator";
import { deleteSelectedMake } from "../../../../features/search/searchSlice";
import { useRouter } from "next/router";

const MakesIndicator = ({ label }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  let { filters } = useAppSelector((state) => state.search);
  let selectedMakes = filters.make;
  let newSelectedMakes = selectedMakes?.filter(
    (item) => item !== label
  ) as string[];
  const handleDelete = async () => {
    await Promise.all([dispatch(deleteSelectedMake(label))]);
    router.push(
      {
        pathname: "/search",
        query: { ...router.query, make: newSelectedMakes },
      },
      undefined,
      { shallow: true }
    );
    dispatch(setOptionDeleted(true));
    // console.log({ selectedMakes, modelsSelected });
  };

  return <FilterIndicator label={label} handleDelete={handleDelete} />;
};

export default MakesIndicator;
