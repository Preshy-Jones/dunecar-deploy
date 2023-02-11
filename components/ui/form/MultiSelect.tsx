import React, { useState } from "react";
import { setFilterTotal } from "../../../features/car/carSlice";
import { useAppDispatch } from "../../../store/hooks";
import { MATHOPERATIONS } from "../../../types/methods";
import { capitalizeFirstLetter } from "../../../utils/utilityFunctions";
import { CaretDownIcon } from "../icons";

interface MultiSelectProps {
  placeHolder?: string;
  options?: { value: string; label: string }[];
  handleOperation: (value: string[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  placeHolder,
  options,
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

  //sort options and place checked options at the top
  options?.sort((a, b) => {
    if (selected.includes(a.value) && !selected.includes(b.value)) {
      return -1;
    } else if (!selected.includes(a.value) && selected.includes(b.value)) {
      return 1;
    } else {
      return 0;
    }
  });

  //handle checkbox onchange
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
      {/* <pre className="text-white relative bottom-[10rem]">{selected}</pre> */}
      {isToggled && (
        <div className="relative bottom-[7.7rem] overflow-scroll h-[17.3125rem] z-20 bg-white rounded-[4px] bottom-50 border border-[#081314] border-opacity-10 py-4 px-4 w-[10rem]">
          {options?.map((item, index) => (
            <div key={index} className="flex items-center mb-5">
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
        onClick={() => handleToggled()}
        className={` w-[12.4375rem] h-[3rem] border border-[#081314] border-opacity-10 rounded-[4px] flex items-center px-4 cursor-pointer ${
          !isToggled
            ? "relative top-[10rem] justify-between"
            : "justify-between relative bottom-[7.3rem]"
        }`}
      >
        {selected.length >= 1 ? (
          <h2 className="text-[#081314] ">
            {capitalizeFirstLetter(selected[0])}
            {"   "} {"   "}
            {selected.length > 1 && `| ${capitalizeFirstLetter(selected[1])}...`}
          </h2>
        ) : (
          <h2 className="">{placeHolder}</h2>
        )}
        <CaretDownIcon />
      </div>
    </div>
  );
};

export default MultiSelect;
