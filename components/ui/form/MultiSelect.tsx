import React, { useState } from "react";
import { CaretDownIcon } from "../icons";

interface MultiSelectProps {
  placeHolder?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ placeHolder, ...rest }) => {
  const [isToggled, setIsToggled] = useState(true);
const repeater =[0,0,0,0,0,0,0]
  return (
    <div>
      {isToggled && (
        <div className=" top-[22.6rem] z-20 bg-white rounded-[4px] bottom-50 border border-[#081314] border-opacity-10 py-4 px-4 w-[10rem]">
          <div className="flex justify-between">
            <input
              type="checkbox"
              className="border-specialRed focus:ring-red-700 "
            />
            <label style={{ marginLeft: "5px" }}>hello</label>
          </div>
        </div>
      )}
      <div
        {...rest}
        onClick={() => setIsToggled(!isToggled)}
        className={` relative w-[12.4375rem] h-[3rem] border border-[#081314] border-opacity-10 rounded-[4px] flex items-center px-4 cursor-pointer ${
          !isToggled ? "justify-between" : "justify-between"
        }`}
      >
        <h2>{placeHolder}</h2>
        <CaretDownIcon />
      </div>
    </div>
  );
};

export default MultiSelect;
