import React, { useState } from "react";
import { setFilterTotal } from "../../../features/car/carSlice";
import { useAppDispatch } from "../../../store/hooks";
import { MATHOPERATIONS } from "../../../types/methods";
import { CaretDownIcon } from "../icons";

interface MultiSelectProps {
  placeHolder?: string;
  options?: { value: string; label: string }[];
  isDisabled?: boolean;
}

const MultiMultiSelect: React.FC<MultiSelectProps> = ({
  placeHolder,
  options,
  isDisabled,
  ...rest
}) => {
  const dispatch = useAppDispatch();

  const [isToggled, setIsToggled] = useState(false);
  const repeater = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const handleToggled = () => {
    if (!isToggled) {
      dispatch(setFilterTotal(MATHOPERATIONS.ADD));
    } else if (isToggled) {
      dispatch(setFilterTotal(MATHOPERATIONS.SUBTRACT));
    }

    setIsToggled(!isToggled);
  };
  return (
    <div>
      {isToggled && (
        <div className="relative bottom-[7.7rem] overflow-scroll h-[17.3125rem] z-20 bg-white rounded-[4px] bottom-50 border border-[#081314] border-opacity-10 py-4 px-4 w-[10rem]">
          {options?.map((item, index) => (
            <div className="flex justify-between mb-3">
              <input
                type="checkbox"
                className="border-specialRed focus:ring-red-700 "
              />
              <label style={{ marginLeft: "5px" }}>{item.label}</label>
            </div>
          ))}
        </div>
      )}
      <div
        {...rest}
        onClick={() => !isDisabled && handleToggled()}
        className={` w-[12.4375rem] h-[3rem] border border-[#081314] border-opacity-10 rounded-[4px] flex items-center px-4 cursor-pointer ${
          !isToggled
            ? "relative top-[10rem] justify-between"
            : "justify-between relative bottom-[7.3rem]"
        }`}
      >
        <h2>{placeHolder}</h2>
        <CaretDownIcon />
      </div>
    </div>
  );
};

export default MultiMultiSelect;
