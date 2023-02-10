import React, { useState } from "react";
import { setFilterTotal } from "../../../features/car/carSlice";
import { useAppDispatch } from "../../../store/hooks";
import { MATHOPERATIONS } from "../../../types/methods";
import { CaretDownIcon } from "../icons";

interface MultiSelectProps {
  placeHolder?: string;
  options: any;
  isDisabled?: boolean;
  handleOperation: (value: string[]) => void;
}

const MultiMultiSelect: React.FC<MultiSelectProps> = ({
  placeHolder,
  options,
  isDisabled,
  handleOperation,
  ...rest
}) => {
  const dispatch = useAppDispatch();

  const [isToggled, setIsToggled] = useState(false);

  const [selected, setSelected] = useState<string[]>([]);

  const handleToggled = () => {
    if (!isToggled) {
      dispatch(setFilterTotal(MATHOPERATIONS.ADD));
    } else if (isToggled) {
      dispatch(setFilterTotal(MATHOPERATIONS.SUBTRACT));
      handleOperation(selected);
    }

    setIsToggled(!isToggled);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    if (selected.includes(e.target.value)) {
      setSelected(selected.filter((item) => item !== e.target.value));
    } else {
      setSelected([...selected, e.target.value]);
    }
  };

  return (
    <div>
      {isToggled && (
        <div className="relative bottom-[7.7rem] overflow-y-auto overflow-x-hidden h-[17.3125rem] z-20 bg-white rounded-[4px] bottom-50 border border-[#081314] border-opacity-10 py-4 px-3.5 w-[11rem]">
          <div className="flex pb-3 font-outfit font-medium justify-between">
            <div className="w-[4.5625rem] border-b-[0.5px] pb-1.5 border-b-[#D5D5D5]">
              <h2 className="text-black  text-[1.25rem]">
                {options[0].collection_name}
              </h2>
            </div>
            <div className="flex justify-end w-[4.5625rem] pb-1.5 border-b-[0.5px] border-b-[#D5D5D5]">
              <h2 className="text-black  text-[1.25rem]">
                {options[1].collection_name}
              </h2>
            </div>
          </div>
          {options[0].options.map((item, index) => (
            <div className="flex items-center mb-5" key={index}>
              <input
                type="checkbox"
                className="border-specialRed border  mr-3 text-specialRed"
                value={item.value}
                name="make"
                checked={selected.includes(item.value)}
                onChange={handleChange}
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
