import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { getCars, getMakes, getModels } from "../../features/car/carSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { CarModel } from "../../types/car";
import { MultiMultiSelect, MultiSelect } from "../ui/form";

// import heroImage from "../../assets/heroimage.svg";

const Hero = () => {
  const dispatch = useAppDispatch();
  const { makes, models, cars, carFilter, filterTotal } = useAppSelector(
    (state) => state.car
  );
  const makeOptions = makes.map((make) => ({
    value: make.slug,
    label: make.title,
  }));
  const modelOptions = models.map((model) => ({
    value: model.slug,
    label: model.title,
  }));

  const [modelToggled, setModelToggled] = React.useState(false);
  // const options = [
  //   { value: "blues", label: "Blues" },
  //   { value: "rock", label: "Rock" },
  //   { value: "jazz", label: "Jazz" },
  //   { value: "orchestra", label: "Orchestra" },
  // ];

  const options = [
    { value: 0, label: "Goranboy" },
    { value: 1, label: "Safikurd" },
    { value: 2, label: "Baku" },
    { value: 3, label: "Ganja" },
    { value: 4, label: "Shusha" },
    { value: 5, label: "Agdam" },
  ];

  useEffect(() => {
    dispatch(getMakes());
  }, []);

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
        <div className="absolute top-[19.5rem]  flex justify-center w-full md:hidden ">
          <div className="bg-white px-4 pt-4 pb-8 shadow-card rounded-[4px]">
            <div className="flex mb-4">
              <div className="px-9 border-b border-b-[#D1D1D1] pb-3 ">
                <h2 className="text-[1.125rem] font-bold">Buy a Car</h2>
              </div>
              <div className="px-9 border-b border-b-[#D1D1D1] pb-3">
                <h2 className="text-[1.125rem]">Sell a Car</h2>
              </div>
            </div>
            <div className="mb-3">
              <MultiSelect />
            </div>
            <div className="mb-3">
              <MultiSelect />
            </div>
            <div className="mb-6">
              <MultiSelect />
            </div>
            <button className="bg-specialRed w-full text-white font-semibold rounded-[4px] flex items-center justify-center h-[3rem]">
              <AiOutlineSearch className="mr-3 text-[1.5rem]" />
              Search all 22 cars
            </button>
          </div>
        </div>
        <div className="absolute top-[21rem]  md:flex justify-center w-full hidden h-[13.25rem] ">
          <div className="  md:flex justify-center w-[70.97%] ">
            <div className="flex bg-white p-6 rounded-[3px] shadow-bigCard">
              <div className="flex-4 mr-8">
                <h2 className="font-bold text text-[1.5rem] leading-[1.75rem] mb-4">
                  Buy car
                </h2>
                <div className="flex  relative bottom-[10rem] justify-between mb-6">
                  <MultiSelect
                    placeHolder="Select Make"
                    options={makeOptions}
                  />
                  <MultiMultiSelect
                    placeHolder="Select Model"
                    isDisabled={!modelToggled}
                  />
                  <MultiSelect placeHolder="Select Location" />
                </div>
                <button
                  className={`${
                    filterTotal === 0 ? "" : "relative bottom-[17.35rem]"
                  } bg-specialRed w-full text-white font-semibold rounded-[4px] flex items-center justify-center h-[3rem]`}
                >
                  <AiOutlineSearch className="mr-3 text-[1.5rem]" />
                  Search all {cars.length} cars
                </button>
              </div>
              <div className="flex-2 text-[#212121] ">
                <h2 className="font-bold text text-[1.5rem] leading-[1.75rem] tracking-[-0.01em]">
                  Sell car
                </h2>
                <p className="mb-[1.1rem] mt-2 text-lg leading-[1.9375rem] font-light text-black tracking-[-0.01em]">
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
      {/* <div className="flex justify-center">
        <div className="w-[30%]">
          <MultiSelect
            key="example_id"
            options={options}
            onChange={handleChange}
            value={optionSelected}
            isSelectAll={true}
            menuPlacement={"top"}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Hero;

// const selectOptions: StylesConfig = {
//   option: (styles) => {
//     return {
//       ...styles,
//     };
//   },
//   placeholder: (styles) => {
//     return {
//       ...styles,
//       color: "black",
//     };
//   },
//   dropdownIndicator: (styles) => {
//     return {
//       ...styles,
//       color: "black",
//     };
//   },
// };
