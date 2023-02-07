import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Select, { StylesConfig } from "react-select";
import { MultiSelect } from "../ui/form";
import { Option } from "../ui/form/MultiSelect";

// import heroImage from "../../assets/heroimage.svg";

const Hero = () => {
  // const options = [
  //   { value: "blues", label: "Blues" },
  //   { value: "rock", label: "Rock" },
  //   { value: "jazz", label: "Jazz" },
  //   { value: "orchestra", label: "Orchestra" },
  // ];

  const [optionSelected, setSelected] = useState<Option[] | null>();
  const handleChange = (selected: Option[]) => {
    setSelected(selected);
  };
  const options = [
    { value: 0, label: "Goranboy" },
    { value: 1, label: "Safikurd" },
    { value: 2, label: "Baku" },
    { value: 3, label: "Ganja" },
    { value: 4, label: "Shusha" },
    { value: 5, label: "Agdam" },
  ];
  return (
    <div>
      <div className="relative mb-10">
        <div
          className="top-0 w-full h-[55vh] bg-cover bg-center bg-no-repeat flex justify-start md:justify-start md:pl-40 px-6"
          style={{
            backgroundImage: `url("assets/heroimage.svg")`,
          }}
        >
          <div className="flex text-white flex-col justify-start md:justify-center md:w-[40%] md:pt-0 pt-11">
            <h1 className="md:text-[3.6875rem] text-[1.75rem] font-extrabold leading-[1.9375rem] md:leading-[3.75rem] mb-6">
              Drive away in your dream car today
            </h1>
            <p className="md:text-[1.25rem]  md:leading-[1.9375rem] leading-[1.5rem]">
              We offer a wide selection of used cars, we’re confident you’ll
              find the perfect vehicle at our store
            </p>
          </div>
        </div>
        <div className="absolute top-60  flex justify-center w-full md:hidden ">
          <div className="bg-white px-4 pt-4 pb-8 shadow-card">
            <div className="flex mb-4">
              <div className="px-6 border-b border-b-[#D1D1D1] pb-3 ">
                <h2 className="text-[1.125rem] font-bold">Buy a Car</h2>
              </div>
              <div className="px-6 border-b border-b-[#D1D1D1] pb-3">
                <h2 className="text-[1.125rem]">Sell a Car</h2>
              </div>
            </div>
            <div className="mb-3">
              <MultiSelect
                className="w-full mr-4 text-[1rem] leading-[10px]"
                key="example_id"
                options={options}
                onChange={handleChange}
                value={optionSelected}
                isSelectAll={true}
                menuPlacement={"top"}
                placeholder="Select Make"
              />
            </div>
            <div className="mb-3">
              <MultiSelect
                className="w-full mr-4"
                key="example_id"
                options={options}
                onChange={handleChange}
                value={optionSelected}
                isSelectAll={true}
                menuPlacement={"top"}
                placeholder="Select Make"
              />
            </div>
            <div className="mb-6">
              <MultiSelect
                className="w-full mr-4"
                key="example_id"
                options={options}
                onChange={handleChange}
                value={optionSelected}
                isSelectAll={true}
                menuPlacement={"top"}
                placeholder="Select Make"
              />
            </div>
            <button className="bg-specialRed w-full text-white font-semibold rounded-[4px] flex items-center justify-center h-[3rem]">
              <AiOutlineSearch className="mr-3 text-[1.5rem]" />
              Search all 22 cars
            </button>
          </div>
        </div>
        <div className="absolute top-90  md:flex justify-center w-full hidden ">
          <div className="flex bg-white p-6">
            <div className="flex-4 mr-8">
              <h2 className="font-bold text text-[1.5rem] leading-[1.75rem] mb-4">
                Buy car
              </h2>
              <div className="flex justify-between mb-6">
                <MultiSelect
                  className="w-full mr-4"
                  key="example_id"
                  options={options}
                  onChange={handleChange}
                  value={optionSelected}
                  isSelectAll={true}
                  menuPlacement={"top"}
                  placeholder="Select Make"
                />
                <MultiSelect
                  className="w-full mr-4"
                  key="example_id"
                  options={options}
                  onChange={handleChange}
                  value={optionSelected}
                  isSelectAll={true}
                  menuPlacement={"top"}
                  placeholder="Select Model"
                />
                <MultiSelect
                  className="w-full mr-4"
                  key="example_id"
                  options={options}
                  onChange={handleChange}
                  value={optionSelected}
                  isSelectAll={true}
                  menuPlacement={"top"}
                  placeholder="Select Location"
                />
              </div>
              <button className="bg-specialRed w-full text-white font-semibold rounded-[4px] flex items-center justify-center h-[3rem]">
                <AiOutlineSearch className="mr-3 text-[1.5rem]" />
                Search all 22 cars
              </button>
            </div>
            <div className="flex-2">
              <h2 className="font-bold text text-[1.5rem] leading-[1.75rem] ">
                Sell car
              </h2>
              <p className="mb-[1.3rem] mt-2">
                Get an instant offer and a fast payment on handover day when you
                sell outright.
              </p>
              <button className="bg-black text-white h-[48px] px-4 rounded-[4px]">
                Start Valuation
              </button>
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
