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
import useClickOutside from "../../../hooks/ClickOutside";
import { setModelOptions } from "../../../features/model/modelSlice";

interface MultiMultiSelectProps {
  placeHolder?: string;
  fieldOptions: any;
  payloadOptions?: any;
  isDisabled: boolean;
  selected: string[];
  setSelected(selected: string[]): any;
  handleCloseOperation: (value: string[]) => void;
  handleOpenOperation: () => void;
}

const MultiMultiSelect: React.FC<MultiMultiSelectProps> = ({
  placeHolder,
  fieldOptions,
  payloadOptions,
  isDisabled,
  selected,
  setSelected,
  handleCloseOperation,
  handleOpenOperation,
  ...rest
}) => {
  const dispatch = useAppDispatch();

  const [isToggled, setIsToggled] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(2);

  const [active, setActive] = React.useState(0);

  const handleToggled = () => {
    if (!isDisabled) {
      if (!isToggled) {
        // dispatch(setFilterTotal(MATHOPERATIONS.ADD));
        handleOpenOperation();
      } else if (isToggled) {
        console.log(payloadOptions);
        let result = payloadOptions?.map((make, index) => {
          return {
            ...make,
            models: make.models?.sort((a, b) => {
              if (selected.includes(a.value) && !selected.includes(b.value)) {
                return -1;
              } else if (
                !selected.includes(a.value) &&
                selected.includes(b.value)
              ) {
                return 1;
              } else {
                return 0;
              }
            }),
          };
        });
        console.log(result);

        dispatch(setModelOptions(result));
        // dispatch(setFilterTotal(MATHOPERATIONS.SUBTRACT));
        handleCloseOperation(selected);
      }

      setIsToggled(!isToggled);
    }
  };

  const handleCloseModal = () => {
    let result = payloadOptions?.map((make, index) => {
      return {
        ...make,
        options: make.options?.sort((a, b) => {
          if (selected.includes(a.value) && !selected.includes(b.value)) {
            return -1;
          } else if (
            !selected.includes(a.value) &&
            selected.includes(b.value)
          ) {
            return 1;
          } else {
            return 0;
          }
        }),
      };
    });
    console.log(result);

    dispatch(setModelOptions(result));
    handleCloseOperation(selected);
    setIsToggled(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    if (selected.includes(e.target.value)) {
      dispatch(setSelected(selected.filter((item) => item !== e.target.value)));
    } else {
      dispatch(setSelected([...selected, e.target.value]));
    }
  };

  const handleLabelClick = (value) => {
    console.log(value);
    if (selected.includes(value)) {
      dispatch(setSelected(selected.filter((item) => item !== value)));
    } else {
      dispatch(setSelected([...selected, value]));
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
  let { domNode1, domNode2 } = useClickOutside(() => {
    handleCloseModal();
  });
  //sort fieldOptions and place checked options at the top

  return (
    <div>
      {isToggled && isDisabled === false && (
        <div
          ref={domNode1}
          className="bg-white rounded-[4px]  z-30 absolute bottom-[10rem] sm:bottom-[10rem] border border-[#081314] border-opacity-10 py-2 px-3.5"
        >
          <div className="flex font-outfit font-medium mb-1 h-10 items-center overflow-scroll no-scrollbar w-[80%] sm:w-[12.4375rem]">
            {/* no-scrollbar */}
            {/* <div
              className="absolute left-0"
               onClick={() => handleSlide("left")}
            ></div> */}
            {fieldOptions?.map((item, index: number) => (
              <div
                key={index}
                className={`min-w-[5rem] mr-6 cursor-pointer flex flex-col items-center justify-between h-full  ${
                  index === currentIndex - 1 && "flex justify-end"
                }`}
                onClick={() => handleTabChange(index)}
              >
                <h2
                  className={`${
                    index === currentIndex
                      ? "text-black font-medium"
                      : "text-[#081314] text-opacity-20 font-light"
                  } leading-tertiary  text-[1.25rem]`}
                >
                  {fieldOptions[index]?.make}
                </h2>
                {currentIndex === index && (
                  <motion.div
                    transition={{ duration: 0.4 }}
                    layoutId="makeOptions"
                    className="bg-specialRed h-[3px] -mt-2 rounded-lg w-full  z-60"
                  ></motion.div>
                )}
              </div>
            ))}
          </div>
          <div className="h-[1px] bg-dividerGray relative bottom-1.5"></div>
          {/* <motion.div
            animate={{ x: active === 1 ? 160 : 0 }}
            className="h-[2px] bg-red-700 w-[50%] relative bottom-[0.05rem] rounded-md"
          ></motion.div> */}
          <div className="pt-1.5 overflow-y-scroll h-[13.55rem] w-[80%] sm:w-[12.4375rem] z-0">
            {fieldOptions[currentIndex].models.map((item, index) => (
              <div
                className="flex items-center py-2.5 px-4 hover:bg-specialRed hover:bg-opacity-5 cursor-pointer"
                key={index}
                onClick={() => handleLabelClick(item.value)}
              >
                <input
                  type="checkbox"
                  className="border-specialRed border  mr-3 text-specialRed focus:ring-0 rounded-sm"
                  value={item.value}
                  name="make"
                  checked={selected.includes(item.value)}
                  onChange={handleChange}
                />
                <label
                  className={`leading-[19px] font-normal cursor-pointer group-hover:text-specialRed ${
                    selected.includes(item.value)
                      ? "text-specialRed font-bold"
                      : "text-black"
                  }`}
                  style={{ marginLeft: "5px" }}
                >
                  {item.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
      <div
        {...rest}
        ref={domNode2}
        onClick={() => handleToggled()}
        className={` xl:w-[12.4375rem] h-[3rem] bg-white border border-[#081314] border-opacity-10 rounded-[4px] flex items-center px-4 cursor-pointer ${
          !isToggled ? " justify-between" : "justify-between "
        }`}
      >
        {selected.length >= 1 ? (
          <h2 className={`text-[#081314] `}>
            {capitalizeFirstLetter(selected[0])}
            {"   "} {"   "}
            {selected.length > 1 &&
              `| ${capitalizeFirstLetter(selected[1])}...`}
          </h2>
        ) : (
          <h2
            className={`${
              isDisabled ? "text-[#081314] text-opacity-30" : " text-black"
            } leading-[19px]`}
          >
            {placeHolder}
          </h2>
        )}
        <CaretDownIcon />
      </div>
    </div>
  );
};

export default MultiMultiSelect;
