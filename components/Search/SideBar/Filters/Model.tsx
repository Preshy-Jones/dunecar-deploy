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
import { motion } from "framer-motion";

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

  const handleLabelClick = (value) => {
    if (modelsSelected.includes(value)) {
      dispatch(
        setModelsSelected(modelsSelected.filter((item) => item !== value))
      );
    } else {
      dispatch(setModelsSelected([...modelsSelected, value]));
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
  }, [dispatch, selectedMakes]);

  return (
    <div className="">
      <div
        className="flex border-t-dividerGray border-t border-b pb-[1.25rem] pt-[1.25rem] items-center pl-6 hover:bg-specialRed hover:bg-opacity-10 hover:text-specialRed "
        onClick={handleClose}
      >
        <CaretLeftIcon className="mr-7 hover:text-specialRed fill-current" />
        <h1 className="leading-secondary text-secondary font-medium">Model</h1>
      </div>

      <div>
        <div className="flex overflow-x-auto no-scrollbar mb-1 h-[3.1875rem] items-center pt-3  pl-6">
          {modelOptions?.map((item, index: number) => (
            <div
              key={index}
              className={`min-w-[6.21875rem] mr-6 flex flex-col justify-between items-center h-full cursor-pointer  ${
                index === currentIndex - 1 && "flex "
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
              {currentIndex === index && (
                <motion.div
                  transition={{ duration: 0.4 }}
                  layoutId="makeOptionsFilter"
                  className="bg-specialRed h-[3px] -mt-2 rounded-lg w-full  z-60"
                ></motion.div>
              )}
            </div>
          ))}
        </div>
        <div className="h-[1px] bg-dividerGray relative bottom-1.5"></div>
        <div className="pt-3 ">
          {modelOptions[currentIndex]?.options.map((item, index) => (
            <div
              className="flex items-center pl-6 py-2.5 hover:bg-specialRed hover:bg-opacity-5 cursor-pointer"
              key={index}
              onClick={() => handleLabelClick(item.value)}
            >
              <input
                type="checkbox"
                className="border-specialRed border rounded-sm w-[1.5rem] h-[1.5rem]  mr-3 text-specialRed focus:outline-none focus:shadow-outline-specialRed focus:ring-0"
                value={item.value}
                name="make"
                checked={modelsSelected.includes(item.value)}
                onChange={handleChange}
              />
              <label
                className={`leading-primary text-secondary  font-normal ${
                  modelsSelected.includes(item.value)
                    ? "font-bold text-specialRed"
                    : "text-lighterDark"
                }`}
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
