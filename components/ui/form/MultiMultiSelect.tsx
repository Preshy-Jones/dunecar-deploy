import React, { useState } from "react";
import { setFilterTotal } from "../../../features/car/carSlice";
import { useAppDispatch } from "../../../store/hooks";
import { MATHOPERATIONS } from "../../../types/methods";
import { CaretDownIcon } from "../icons";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { capitalizeFirstLetter } from "../../../utils/utilityFunctions";
import { motion } from "framer-motion";

interface MultiSelectProps {
  placeHolder?: string;
  fieldOptions: any;
  isDisabled: boolean;
  handleOperation: (value: string[]) => void;
}

const MultiMultiSelect: React.FC<MultiSelectProps> = ({
  placeHolder,
  fieldOptions,
  isDisabled,
  handleOperation,
  ...rest
}) => {
  const dispatch = useAppDispatch();

  const [isToggled, setIsToggled] = useState(false);

  const [selected, setSelected] = useState<string[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(2);

  const [active, setActive] = React.useState(0);

  const handleToggled = () => {
    if (!isDisabled) {
      if (!isToggled) {
        dispatch(setFilterTotal(MATHOPERATIONS.ADD));
      } else if (isToggled) {
        dispatch(setFilterTotal(MATHOPERATIONS.SUBTRACT));
        handleOperation(selected);
      }

      setIsToggled(!isToggled);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    if (selected.includes(e.target.value)) {
      setSelected(selected.filter((item) => item !== e.target.value));
    } else {
      setSelected([...selected, e.target.value]);
    }
  };

  const handleTabChange = (index: number) => {
    setCurrentIndex(index);
    setActive(1);
  };

  const handleSlide = (direction: string) => {
    if (direction === "left") {
      if (startIndex > 0) {
        setStartIndex(startIndex - 1);
        setEndIndex(endIndex - 1);
      }
    } else if (direction === "right") {
      if (endIndex < fieldOptions.length) {
        setStartIndex(startIndex + 1);
        setEndIndex(endIndex + 1);
      }
    }
  };

  //sort fieldOptions and place checked options at the top

  return (
    <div>
      {isToggled && isDisabled === false && (
        <div className="md:relative md:bottom-[7.7rem] overflow-y-auto overflow-x-hidden h-[17.3125rem] z-20 bg-white rounded-[4px] bottom-50 border border-[#081314] border-opacity-10 py-2 px-3.5 w-[12.4375rem]">
          <div className="flex pb-1 font-outfit font-medium justify-between border-b-[0.5px] border-b-[#D5D5D5]">
            <div
              className="absolute left-0"
              onClick={() => handleSlide("left")}
            >
              <BsFillArrowLeftCircleFill className="text-specialRed" />
            </div>
            {fieldOptions?.map(
              (item, index: number) =>
                index >= startIndex &&
                index < endIndex && (
                  <div
                    className={`w-[6.21875rem]  pb-1.5  cursor-pointer ${
                      index === endIndex - 1 && "flex justify-end"
                    }`}
                    onClick={() => handleTabChange(index)}
                  >
                    <h2
                      className={`${
                        index === currentIndex
                          ? "text-black font-medium"
                          : "text-[#081314] text-opacity-20 font-light"
                      }   text-[1.25rem] `}
                    >
                      {fieldOptions[index]?.collection_name}
                    </h2>
                  </div>
                )
            )}
            <div
              className="absolute right-0"
              onClick={() => handleSlide("right")}
            >
              <BsFillArrowRightCircleFill className="text-specialRed" />
            </div>
          </div>
          <motion.div
            animate={{ x: active === 1 ? 160 : 0 }}
            className="h-[2px] bg-red-700 w-[50%] relative bottom-[0.05rem] rounded-md"
          ></motion.div>
          <div className="pt-3">
            {fieldOptions[currentIndex].options.map((item, index) => (
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
        </div>
      )}
      <div
        {...rest}
        onClick={() => handleToggled()}
        className={` w-[12.4375rem] h-[3rem] border border-[#081314] border-opacity-10 rounded-[4px] flex items-center px-4 cursor-pointer ${
          !isToggled
            ? "md:relative md:top-[10rem] justify-between"
            : "justify-between relative bottom-[7.3rem]"
        }`}
      >
        {selected.length >= 1 ? (
          <h2 className="text-[#081314] ">
            {capitalizeFirstLetter(selected[0])}
            {"   "} {"   "}
            {selected.length > 1 &&
              `| ${capitalizeFirstLetter(selected[1])}...`}
          </h2>
        ) : (
          <h2 className="">{placeHolder}</h2>
        )}
        <CaretDownIcon />
      </div>
    </div>
  );
};

export default MultiMultiSelect;
