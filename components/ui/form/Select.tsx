/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from "react";
import { Option } from "../../../types/form";
import { capitalizeFirstLetter } from "../../../utils/utilityFunctions";
import { CaretDownIcon } from "../icons";
import { Link } from "react-scroll";

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
}
export const CustomSelect: React.FC<SelectProps> = ({
  placeHolder,
  options,
  ...rest
}) => {
  const [isToggled, setIsToggled] = useState(false);

  const [selected, setSelected] = useState<string | null>(null);
  const handleToggled = () => {
    setIsToggled(!isToggled);
  };
  const handleSelect = (value) => {
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
            {capitalizeFirstLetter(selected)}
          </h2>
        ) : (
          <h2 className={`leading-[19px]  text-black`}>{placeHolder}</h2>
        )}
        <CaretDownIcon />
      </div>
    </div>
  );
};
