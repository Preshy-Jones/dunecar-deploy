import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { getCars } from "../../../../features/car/carSlice";
import {
  getModels,
  setModelsSelected,
} from "../../../../features/model/modelSlice";
import { setFilter } from "../../../../features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { dummyModels } from "../../../../utils/dummies/dummyModels";
import { CaretLeftIcon } from "../../../ui/icons";

const Model = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();
  const { models, modelsSelected } = useAppSelector((state) => state.model);

  const { makes, selectedMakes } = useAppSelector((state) => state.make);

  const [currentIndex, setCurrentIndex] = useState(0);

  const modelOptions = models.map((model) => ({
    collection_name: model.make_name,
    options: model.models.map((model) => ({
      value: model.slug,
      label: model.title,
    })),
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (modelsSelected.includes(e.target.value)) {
      dispatch(
        setModelsSelected(
          modelsSelected.filter((item) => item !== e.target.value)
        )
      );
    } else {
      dispatch(setModelsSelected([...modelsSelected, e.target.value]));
    }
  };
  const handleTabChange = (index: number) => {
    setCurrentIndex(index);
  };
  const handleClose = () => {
    dispatch(setFilter(""));

    dispatch(
      getCars({ makes: selectedMakes, models: modelsSelected, limit: "20" })
    );
    //update the query strings but don't reload the page
    router.push(
      {
        pathname: "/search",
        query: {
          ...router.query,
          make: selectedMakes,
          model: modelsSelected,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  useEffect(() => {
    //get models
    dispatch(getModels({ makes: selectedMakes }));
  }, [dispatch]);

  return (
    <div className="px-6">
      <div
        className="flex border-t-dividerGray border-t border-b pb-[1.25rem] pt-[1.25rem] items-center"
        onClick={handleClose}
      >
        <CaretLeftIcon className="mr-7" />
        <h1 className="leading-secondary text-secondary font-medium">Model</h1>
      </div>

      <div>
        <div className="flex">
          {modelOptions?.map((item, index: number) => (
            <div
              key={index}
              className={`w-[6.21875rem]  pb-1.5 cursor-pointer ${
                index === currentIndex - 1 && "flex justify-end"
              }`}
              onClick={() => handleTabChange(index)}
            >
              <h2
                className={`${
                  index === currentIndex
                    ? "text-black font-medium"
                    : "text-[#081314] text-opacity-20 font-light"
                }   text-[1.25rem] `}
              >
                {modelOptions[index]?.collection_name}
              </h2>
            </div>
          ))}
        </div>

        <div className="pt-3">
          {modelOptions[currentIndex]?.options.map((item, index) => (
            <div className="flex items-center mb-5" key={index}>
              <input
                type="checkbox"
                className="border-specialRed border rounded-sm w-[1.5rem] h-[1.5rem]  mr-3 text-specialRed focus:outline-none focus:shadow-outline-specialRed focus:ring-0"
                value={item.value}
                name="make"
                checked={modelsSelected.includes(item.value)}
                onChange={handleChange}
              />
              <label
                className="leading-primary text-secondary text-lighterDark font-normal"
                style={{ marginLeft: "5px" }}
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Model;
