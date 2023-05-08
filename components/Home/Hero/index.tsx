import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { getCars } from "../../../features/car/carSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { MultiMultiSelect, MultiSelect } from "../../ui/form";
import Loader from "../../../public/assets/Loader.json";
import { setModelsSelected } from "../../../features/model/modelSlice";
import { setSelectedMakes } from "../../../features/make/makeSlice";
import { useRouter } from "next/router";
import { formatMultipleValueKeyQuery } from "../../../utils/utilityFunctions";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import MobileForm from "./MobileForm";
import {
  getFilterOptions,
  setSelectedFilters,
} from "../../../features/search/searchSlice";
import {
  ModelOptions,
  setFilterOptions,
  setModelOptions,
} from "../../../features/filters_options/filterOptionsSlice";

// import heroImage from "../../assets/heroimage.svg";

const Hero = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  let { cars, isLoading, pageInfo } = useAppSelector((state) => state.car);

  //  const isLoading = true;

  let { locationOptions, makeOptions, modelOptions } = useAppSelector(
    (state) => state.filterOptions
  );

  let { models, makes, locations, filters, filtersLoading } = useAppSelector(
    (state) => state.search
  );

  let selectedMakes = filters.make;
  let selectedModels = filters.model;
  let selectedLocations = filters.location;

  let makeOptionsPayload = makes.map((make) => ({
    value: make.make._id,
    label: make.make.title,
  }));

  const locationOptionsPayload = locations.map((location) => ({
    value: location._id,
    label: location._id,
  }));

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

  console.log("groupedByMake", groupedByMake);

  const [makeToggled, setMakeToggled] = React.useState(true);
  const [modelToggled, setModelToggled] = React.useState(false);
  const [locationToggled, setLocationToggled] = React.useState(false);

  //setting options handlers

  const makeHandleSetOptions = (options) => {
    dispatch(
      setFilterOptions({
        field: "makeOptions",
        value: options,
      })
    );
  };

  const modelHandleSetOptions = (options) => {
    dispatch(setModelOptions(options));
  };

  const locationHandleSetOptions = (options) => {
    dispatch(
      setFilterOptions({
        field: "locationOptions",
        value: options,
      })
    );
  };

  //setting selected handlers

  const makeHandleSetSelected = (selected) => {
    dispatch(setSelectedFilters({ field: "make", value: selected }));
  };

  const modelHandleSetSelected = (selected) => {
    dispatch(setSelectedFilters({ field: "model", value: selected }));
  };

  const locationHandleSetSelected = (selected) => {
    dispatch(
      setSelectedFilters({
        field: "location",
        value: selected,
      })
    );
  };

  const makeCloseHandleOperation = async (makes: string[]) => {
    if (makes.length > 0) {
      dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            make: makes,
          },
        })
      );
      await dispatch(
        getFilterOptions({
          key: "models",
          group_by: "model_id",
          filters: {
            make: makes,
            ...filters,
          },
        })
      );

      await dispatch(
        getFilterOptions({
          key: "locations",
          group_by: "location",
          filters: {
            make: makes,
          },
        })
      );
      setModelToggled(true);
      setLocationToggled(true);
    } else {
      setLocationToggled(false);
      setModelToggled(false);
    }
  };

  const makeOpenHandleOperation = () => {
    setModelToggled(false);
    dispatch(setModelsSelected([]));
  };

  const modelCloseHandleOperation = async (models: string[]) => {
    // dispatch(getCars({ models, makes: carFilter.makes }));
    await dispatch(
      getCars({
        page: "1",
        perPage: "20",
        filters: {
          model: models,
          ...filters,
        },
      })
    );
    setMakeToggled(true);
    setLocationToggled(true);
  };

  const modelOpenHandleOperation = () => {
    setMakeToggled(false);
    setLocationToggled(false);
  };

  const locationCloseHandleOperation = async (locations: string[]) => {
    // dispatch(getCars({ models, makes: carFilter.makes }));
    await dispatch(
      getCars({
        page: "1",
        perPage: "20",
        filters: {
          location: locations,
          ...filters,
        },
      })
    );
    setMakeToggled(true);
  };

  const locationOpenHandleOperation = () => {
    setMakeToggled(false);
    setModelToggled(false);
  };

  const handleSearchCars = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let { makes, models, locations } = {
      makes: selectedMakes,
      models: selectedModels,
      locations: selectedLocations,
    };
    const makesPayload = makes
      ? typeof makes === "string"
        ? [makes]
        : makes
      : [""];
    const modelsPayload = models
      ? typeof models === "string"
        ? [models]
        : models
      : [""];

    const locationsPayload = locations
      ? typeof locations === "string"
        ? [locations]
        : locations
      : [""];

    //    console.log({ makesPayload, modelsPayload, makes, models });

    const url = `/search?${
      models
        ? models.length > 1
          ? formatMultipleValueKeyQuery("model", modelsPayload)
          : `model=${models[0]}`
        : ""
    }&${
      makes
        ? makes.length > 1
          ? formatMultipleValueKeyQuery("make", makesPayload)
          : `make=${makes[0]}`
        : ""
    }
    &${
      locations
        ? locations.length > 1
          ? formatMultipleValueKeyQuery("location", locationsPayload)
          : `location=${locations[0]}`
        : ""
    }
          
    `;

    console.log(url);

    router.push(url);
  };
  useEffect(() => {
    dispatch(
      getCars({
        page: "1",
        perPage: "20",
        filters: {},
      })
    );
    dispatch(
      getFilterOptions({
        key: "makes",
        group_by: "make_id",
        filters: {},
      })
    );
  }, []);

  useEffect(() => {
    let makeOptionsPayload = makes.map((make) => ({
      value: make.make._id,
      label: make.make.title,
    }));
    dispatch(
      setFilterOptions({
        field: "makeOptions",
        value: makeOptionsPayload,
      })
    );
  }, [makes, dispatch]);

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
    dispatch(setModelOptions(groupedByMake as ModelOptions[]));
  }, [models, dispatch]);

  useEffect(() => {
    let locationOptionsPayload = locations.map((option) => ({
      value: option._id,
      label: option._id,
    }));
    dispatch(
      setFilterOptions({
        field: "locationOptions",
        value: locationOptionsPayload,
      })
    );
  }, [locations, dispatch]);

  return (
    <div className="font-roboto">
      <div className="relative mb-10">
        <div
          className="top-0 w-full h-[21.625rem] sm:h-[29.875rem] bg-cover bg-center bg-no-repeat flex justify-center md:justify-center "
          style={{
            backgroundImage: `url("assets/heroimage.svg")`,
          }}
        >
          <div className="md:grid md:grid-cols-2 w-[70.97%] sm:mb-16">
            <div className="flex  text-white flex-col justify-start md:justify-center md:pt-0 pt-11 ">
              <h1 className="md:text-[3.6875rem] text-[1.75rem] font-extrabold leading-[1.9375rem] md:leading-[3.75rem] mb-3 tracking-[-0.01em]">
                Drive away in your dream car today
              </h1>
              <p className="md:text-[1.25rem]  md:leading-[1.9375rem] leading-[1.5rem] tracking-[-0.01em]">
                We offer a wide selection of used cars, we’re confident you’ll
                find the perfect vehicle at our store
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <MobileForm
          makeOptions={makeOptions}
          modelOptions={modelOptions}
          makeToggled={makeToggled}
          modelToggled={modelToggled}
          modelsSelected={selectedModels as string[]}
          setModelsSelected={setModelsSelected}
          makeOptionsPayload={makeOptionsPayload}
          locationOptions={locationOptions}
          isLoading={isLoading}
          handleSearchCars={handleSearchCars}
          makeCloseHandleOperation={makeCloseHandleOperation}
          makeOpenHandleOperation={makeOpenHandleOperation}
          modelCloseHandleOperation={modelCloseHandleOperation}
          modelOpenHandleOperation={modelOpenHandleOperation}
          selectedMakes={selectedMakes as string[]}
          setSelectedMakes={makeHandleSetSelected}
          makeHandleSetOptions={makeHandleSetOptions}
          modelHandleSetOptions={modelHandleSetOptions}
          locationHandleSetOptions={locationHandleSetOptions}
          groupedByMake={groupedByMake as ModelOptions[]}
          setSelectedLocations={locationHandleSetSelected}
          selectedLocations={selectedLocations as string[]}
          locationCloseHandleOperation={locationCloseHandleOperation}
          locationOpenHandleOperation={locationOpenHandleOperation}
          locationOptionsPayload={locationOptionsPayload}
          locationToggled={locationToggled}
          cars={cars}
          count={pageInfo.count}
        />
        <div className="absolute top-[21rem]  lg:flex justify-center w-full hidden h-[13.25rem] ">
          <div className="  md:flex justify-center w-[70.97%] ">
            <div className="flex bg-white p-6 rounded-[3px] shadow-bigCard w-full">
              <div className="flex-4 mr-8 flex flex-col justify-between">
                <h2 className="font-bold text text-[1.5rem] leading-[1.75rem] mb-4">
                  Buy car
                </h2>
                <div className="flex  justify-between mb-6">
                  <MultiSelect
                    placeHolder="Select Make"
                    payloadOptions={makeOptionsPayload}
                    options={makeOptions}
                    isDisabled={!makeToggled || filtersLoading.makes}
                    selected={selectedMakes as string[]}
                    setSelected={makeHandleSetSelected}
                    setOptions={makeHandleSetOptions}
                    handleCloseOperation={makeCloseHandleOperation}
                    handleOpenOperation={makeOpenHandleOperation}
                  />
                  <MultiMultiSelect
                    placeHolder="Select Model"
                    isDisabled={!modelToggled || filtersLoading.models}
                    fieldOptions={modelOptions}
                    payloadOptions={groupedByMake}
                    selected={selectedModels as string[]}
                    setSelected={modelHandleSetSelected}
                    setOptions={modelHandleSetOptions}
                    handleCloseOperation={modelCloseHandleOperation}
                    handleOpenOperation={modelOpenHandleOperation}
                  />
                  <MultiSelect
                    placeHolder="Select Location"
                    payloadOptions={locationOptionsPayload}
                    options={locationOptions}
                    isDisabled={!locationToggled || filtersLoading.locations}
                    selected={selectedLocations as string[]}
                    setSelected={locationHandleSetSelected}
                    setOptions={locationHandleSetOptions}
                    handleCloseOperation={locationCloseHandleOperation}
                    handleOpenOperation={locationOpenHandleOperation}
                  />
                </div>
                <button
                  onClick={handleSearchCars}
                  className={`"
                  } bg-specialRed w-full text-white font-semibold rounded-[4px] flex items-center justify-center h-[3rem]`}
                >
                  {!isLoading ? (
                    <div className="flex items-center justify-center">
                      <AiOutlineSearch className="mr-3 text-[1.5rem]" />
                      View all {pageInfo.count} cars
                    </div>
                  ) : (
                    <Player
                      src={Loader}
                      autoplay
                      loop
                      style={{
                        height: "80px",
                        width: "300px",
                        color: "#fff",
                      }}
                    />
                  )}
                </button>
              </div>
              <div className="flex-2 text-[#212121] ">
                <h2 className="font-bold text text-[1.5rem] leading-[1.75rem] tracking-[-0.01em]">
                  Sell car
                </h2>
                <p className="sm:mb-3 1.5xl:mb-[1.1rem] lg:mb-[1.7rem] xs: mt-2 text-lg leading-[1.1rem] 1.5xl:leading-[1.9375rem] font-light text-black tracking-[-0.01em]">
                  Get an instant offer and a fast payment on handover day when
                  you sell outright.
                </p>
                <button className="bg-black text-white h-[48px] px-4 rounded-[4px] w-[12.1875rem]">
                  Start Valuation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
