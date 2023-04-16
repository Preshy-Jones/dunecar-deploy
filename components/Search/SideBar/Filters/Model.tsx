import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { getCars } from "../../../../features/car/carSlice";
import {
  getModels,
  setModelOptions,
} from "../../../../features/model/modelSlice";
import {
  setFilter,
  setFilterOptions,
} from "../../../../features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { dummyModels } from "../../../../utils/dummies/dummyModels";
import { CaretLeftIcon } from "../../../ui/icons";
import { motion } from "framer-motion";

const Model = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();
  const { modelOptions } = useAppSelector((state) => state.model);

  let { filters, models } = useAppSelector((state) => state.search);

  let selectedModels = filters.model;

  const [currentIndex, setCurrentIndex] = useState(0);

  const groupedByMake = Object.values(
    models.reduce((acc, model) => {
      const make = model.make.title;
      if (!acc[make]) {
        acc[make] = {
          make: model.make.title,
          models: [],
        };
      }
      acc[make].models.push({
        value: model.model._id,
        label: model.model.title,
      });
      return acc;
    }, {})
  );
  // const modelOptions = models.map((model) => ({
  //   collection_name: model.make_name,
  //   options: model.models.map((model) => ({
  //     value: model.slug,
  //     label: model.title,
  //   })),
  // }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedModels?.includes(e.target.value)) {
      let newSelectedModels = selectedModels?.filter(
        (item) => item !== e.target.value
      ) as string[];

      dispatch(
        setFilterOptions({
          field: "model",
          value: newSelectedModels,
        })
      );
      dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            model: newSelectedModels,
          },
        })
      ).then(() => {
        router.push(
          {
            pathname: "/search",
            query: { ...router.query, model: newSelectedModels },
          },
          undefined,
          { shallow: true }
        );
      });
    } else {
      dispatch(
        setFilterOptions({
          field: "model",
          value: [...(selectedModels as string[]), e.target.value],
        })
      );

      dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            model: [...(selectedModels as string[]), e.target.value],
          },
        })
      ).then(() => {
        router.push(
          {
            pathname: "/search",
            query: {
              ...router.query,
              model: [...(selectedModels as string[]), e.target.value],
            },
          },
          undefined,
          { shallow: true }
        );
      });
    }
  };

  const handleLabelClick = (value) => {
    if (selectedModels?.includes(value)) {
      let newSelectedModels = selectedModels?.filter(
        (item) => item !== value
      ) as string[];
      dispatch(
        setFilterOptions({
          field: "model",
          value: newSelectedModels,
        })
      );
      dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            model: [...(selectedModels as string[]), value],
          },
        })
      ).then(() => {
        router.push(
          {
            pathname: "/search",
            query: { ...router.query, model: newSelectedModels },
          },
          undefined,
          { shallow: true }
        );
      });
    } else {
      dispatch(
        setFilterOptions({
          field: "model",
          value: [...(selectedModels as string[]), value],
        })
      );
      dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            model: [...(selectedModels as string[]), value],
          },
        })
      ).then(() => {
        router.push(
          {
            pathname: "/search",
            query: {
              ...router.query,
              model: [...(selectedModels as string[]), value],
            },
          },
          undefined,
          { shallow: true }
        );
      });
    }
  };

  const handleTabChange = (index: number) => {
    setCurrentIndex(index);
  };
  const handleClose = () => {
    dispatch(setFilter(""));

    // dispatch(
    //   getCars({ makes: selectedMakes, models: selectedModels?, limit: "20" })
    // );
    //update the query strings but don't reload the page
    // router.push(
    //   {
    //     pathname: "/search",
    //     query: {
    //       ...router.query,
    //       make: selectedMakes,
    //       model: selectedModels,
    //     },
    //   },
    //   undefined,
    //   { shallow: true }
    // );
  };

  useEffect(() => {
    const groupedByMake = Object.values(
      models.reduce((acc, model) => {
        const make = model.make.title;
        if (!acc[make]) {
          acc[make] = {
            make: model.make.title,
            models: [],
          };
        }
        acc[make].models.push({
          value: model.model._id,
          label: model.model.title,
        });
        return acc;
      }, {})
    );
    dispatch(setModelOptions(groupedByMake));
    //get models
  }, [dispatch, models]);

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
                {modelOptions[index]?.make}
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
          {modelOptions[currentIndex]?.models.map((item, index) => (
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
                checked={selectedModels?.includes(item.value)}
                onChange={handleChange}
              />
              <label
                className={`leading-primary text-secondary  font-normal ${
                  selectedModels?.includes(item.value)
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
