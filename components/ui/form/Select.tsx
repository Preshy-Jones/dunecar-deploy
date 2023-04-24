/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from "react";
import { Option } from "../../../types/form";
import { capitalizeFirstLetter } from "../../../utils/utilityFunctions";
import { CaretDownIcon, CaretDownThickIcon } from "../icons";
import { Link } from "react-scroll";
import CaretDown from "../icons/CaretDown";

// export const Select = ({ id, type, name, children, ...props }) => {
//   return (
//     <select
//       className="bg-fill border-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full appearance-none rounded cursor-text text-input py-2 px-4 text-sm"
//       id={id}
//       name={name}
//     >
//       {children}
//     </select>
//   );
// };

interface SelectProps {
  placeHolder?: string;
  options?: Option[] | undefined;
  label?: string;
  onChange?: (value: any) => void;
  value?: string | number| null;
}
export const CustomSelect: React.FC<SelectProps> = ({
  placeHolder,
  options,
  onChange,
  value,
  ...rest
}) => {
  const [isToggled, setIsToggled] = useState(false);

  const [selected, setSelected] = useState<string | null| number>(value || null);
  const handleToggled = () => {
    setIsToggled(!isToggled);
  };
  const handleSelect = (value) => {
    // console.log(value);

    onChange && onChange(value);
    setSelected(value);
    setIsToggled(false);
  };
  return (
    <div className="relative">
      {isToggled && (
        <div className="  z-40 bg-white rounded-[4px] absolute top-[4rem] sm:bottom-[10rem] border border-[#081314] border-opacity-10 py-4 px-4">
          {options?.map((item, index) => (
            <div key={index} className="flex items-center mb-5">
              <Link
                to={item.value}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="flex items-center"
              >
                <label
                  className="leading-[1rem] text-[0.875rem] text-secondaryBlack font-normal cursor-pointer"
                  style={{ marginLeft: "5px" }}
                  onClick={() => handleSelect(item.value)}
                >
                  {item.label}
                </label>
              </Link>
            </div>
          ))}
        </div>
      )}
      <div
        {...rest}
        onClick={() => handleToggled()}
        className={` xl:w-[12.4375rem] h-[3rem]  bg-white  rounded-[4px] flex items-center pr-4 cursor-pointer ${
          !isToggled ? " justify-between" : "justify-between "
        }`}
      >
        {selected !== null ? (
          <h2 className="leading-[19px] text-black ">
            {typeof selected === "string"
              ? capitalizeFirstLetter(selected)
              : selected}
          </h2>
        ) : (
          <h2 className={`leading-[19px]  text-black`}>{placeHolder}</h2>
        )}
        <CaretDownIcon />
      </div>
    </div>
  );
};

export const FilterCustomSelect: React.FC<SelectProps> = ({
  placeHolder,
  label,
  options,
  onChange,
  value,
  ...rest
}) => {
  const [isToggled, setIsToggled] = useState(false);

  // const [selected, setSelected] = useState<string | null|number>(value || null);
  const handleToggled = () => {
    setIsToggled(!isToggled);
  };
  const handleSelect = (value) => {
    // console.log(value);

    onChange && onChange(value);
    // setSelected(value);
    setIsToggled(false);
  };

  return (
    <div className="relative w-full">
      <label className="text-black text-sme leading-[1rem] text-opacity-90">
        {label}
      </label>
      <div className="relative">
        <div
          {...rest}
          onClick={() => handleToggled()}
          className={` w-full h-[3rem]  bg-white rounded-[4px] flex items-center pr-4 cursor-pointer border border-dividerGray px-3 ${
            !isToggled ? " justify-between" : "justify-between "
          }`}
        >
          {value !== null ? (
            <h2 className="leading-[19px] text-black ">
              {typeof value === "string"
                ? capitalizeFirstLetter(value)
                : value}
            </h2>
          ) : (
            <h2 className={`leading-[19px]  text-black`}>{placeHolder}</h2>
          )}
          <CaretDownThickIcon />
        </div>
        {isToggled && (
          <div className="w-full h-[20rem] z-50 bg-white rounded-[4px] absolute top-[3rem] overflow-y-auto custom-scroll sm:bottom-[10rem] border border-[#081314] border-opacity-10 py-4">
            {options?.map((item, index) => (
              <div
                key={index}
                className="flex items-center hover:bg-opacity-10 py-2 hover:bg-specialRed px-4"
                onClick={() => handleSelect(item.value)}
              >
                <h2
                  className="leading-[1rem] text-[0.875rem] text-secondaryBlack font-normal cursor-pointer"
                  style={{ marginLeft: "5px" }}
                >
                  {item.label}
                </h2>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
