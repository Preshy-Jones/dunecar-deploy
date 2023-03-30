import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { getCars } from "../../../features/car/carSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { motion } from "framer-motion";
import { MultiMultiSelect, MultiSelect } from "../../ui/form";
import { DotLoader, Spinner } from "../../ui/others";
import Loader from "../../../public/assets/Loader.json";
import Lottie from "lottie-react";
import {
  getModels,
  setModelOptions,
  setModelsSelected,
} from "../../../features/model/modelSlice";
import { getMakes, setMakeOptions } from "../../../features/make/makeSlice";
import { useRouter } from "next/router";
import { formatMultipleValueKeyQuery } from "../../../utils/utilityFunctions";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import MobileForm from "./MobileForm";

// import heroImage from "../../assets/heroimage.svg";

const Hero = () => {
  const locations = [
    "Lagos",
    "Abuja",
    "Port Harcourt",
    "Ibadan",
    "Kano",
    "Akure",
    "Ibadan",
    "Jos",
    "Owerri",
    "Enugu",
    "Benin",
    "Aba",
    "Kaduna",
    "Uyo",
    "Ilorin",
    "Abeokuta",
    "Onitsha",
    "Sokoto",
    "Katsina",
    "Maiduguri",
    "Zaria",
    "Ogbomosho",
    "Iwo",
    "Ife",
    "Ilesha",
    "Ila Orangun",
    "Ikerre",
  ];

  const locationOptions = locations.map((location) => ({
    value: location,
    label: location,
  }));

  const router = useRouter();
  const dispatch = useAppDispatch();
  let { cars, carFilter, isLoading, filterTotal } = useAppSelector(
    (state) => state.car
  );

  //  const isLoading = true;
  let { models, modelsSelected, modelOptions } = useAppSelector(
    (state) => state.model
  );

  let { makes, makeOptions } = useAppSelector((state) => state.make);

  let makeOptionsPayload = makes.map((make) => ({
    value: make.slug,
    label: make.title,
  }));

  const modelOptionsPayload = models.map((model) => ({
    collection_name: model.make_name,
    options: model.models.map((model) => ({
      value: model.slug,
      label: model.title,
    })),
  }));

  const [makeToggled, setMakeToggled] = React.useState(true);
  const [modelToggled, setModelToggled] = React.useState(false);

  const makeCloseHandleOperation = (makes: string[]) => {
    dispatch(getModels({ makes: makes }));
    dispatch(getCars({ makes }));
    if (makes.length > 0) {
      setModelToggled(true);
    } else {
      setModelToggled(false);
    }
  };

  const makeOpenHandleOperation = () => {
    setModelToggled(false);
    dispatch(setModelsSelected([]));
  };

  const modelCloseHandleOperation = (models: string[]) => {
    dispatch(getCars({ models, makes: carFilter.makes }));
    setMakeToggled(true);
  };

  const modelOpenHandleOperation = () => {
    setMakeToggled(false);
  };
  const locationHandleOperation = (locations: string[]) => {
    // dispatch(getCars({ locations }));
  };

  const handleSearchCars = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("hello");

    let { makes, models } = carFilter;
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

    console.log({ makesPayload, modelsPayload, makes, models });

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
    }`;
    console.log(url);

    router.push(url);
  };
  useEffect(() => {
    dispatch(getMakes());
    dispatch(getCars({ makes: [], models: [] }));
    // console.log(modelOptions);
  }, [dispatch]);

  useEffect(() => {
    let makeOptionsPayload = makes.map((make) => ({
      value: make.slug,
      label: make.title,
    }));
    dispatch(setMakeOptions(makeOptionsPayload));
  }, [makes, dispatch]);

  useEffect(() => {
    let modelOptions = models.map((model) => ({
      collection_name: model.make_name,
      options: model.models.map((model) => ({
        value: model.slug,
        label: model.title,
      })),
    }));
    dispatch(setModelOptions(modelOptions));
  }, [models, dispatch]);

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
          modelsSelected={modelsSelected}
          setModelsSelected={setModelsSelected}
          makeOptionsPayload={makeOptionsPayload}
          locationOptions={locationOptions}
          isLoading={isLoading}
          handleSearchCars={handleSearchCars}
          makeCloseHandleOperation={makeCloseHandleOperation}
          makeOpenHandleOperation={makeOpenHandleOperation}
          modelCloseHandleOperation={modelCloseHandleOperation}
          modelOpenHandleOperation={modelOpenHandleOperation}
          cars={cars}
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
                    isDisabled={!makeToggled}
                    handleCloseOperation={makeCloseHandleOperation}
                    handleOpenOperation={makeOpenHandleOperation}
                  />
                  <MultiMultiSelect
                    placeHolder="Select Model"
                    isDisabled={!modelToggled}
                    fieldOptions={modelOptions}
                    payloadOptions={modelOptionsPayload}
                    selected={modelsSelected}
                    setSelected={setModelsSelected}
                    handleCloseOperation={modelCloseHandleOperation}
                    handleOpenOperation={modelOpenHandleOperation}
                  />
                  <MultiSelect
                    placeHolder="Select Location"
                    payloadOptions={locationOptions}
                    options={locationOptions}
                    isDisabled={false}
                    handleCloseOperation={makeCloseHandleOperation}
                    handleOpenOperation={makeOpenHandleOperation}
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
                      Search all {cars.length} cars
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
