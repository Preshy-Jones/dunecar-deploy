import React, { useState, useRef } from "react";
import { setMakeOptions } from "../../../features/make/makeSlice";
import useClickOutside from "../../../hooks/ClickOutside";
import { Option } from "../../../types/form";

import { capitalizeFirstLetter } from "../../../utils/utilityFunctions";
import { CaretDownIcon } from "../icons";

interface MultiSelectProps {
  placeHolder?: string;
  options?: Option[] | undefined;
  payloadOptions?: Option[] | undefined;
  isDisabled?: boolean;
  setOptions(options: Option[]): any;
  handleCloseOperation: (value: string[]) => void;
  handleOpenOperation: () => void;
  selected: string[];
  setSelected(selected: string[]): any;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  placeHolder,
  options,
  payloadOptions,
  isDisabled,
  selected,
  setSelected,
  handleOpenOperation,
  setOptions,
  handleCloseOperation,
  ...rest
}) => {
  const [isToggled, setIsToggled] = useState(false);

  // const [selected, setSelected] = useState<string[]>([]);

  // const selected = useRef<string[]>([]);

  const handleToggled = () => {
    if (!isDisabled) {
      if (!isToggled) {
        handleOpenOperation();
      } else if (isToggled) {
        let result = payloadOptions?.sort((a, b) => {
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
        });
        // setOptionsUpdated(optionsUpdated);
        // console.log(optionsUpdated);

        setOptions(result as Option[]);
        handleCloseOperation(selected);
      }

      setIsToggled(!isToggled);
    }
  };

  const handleCloseModal = () => {
    let result = payloadOptions?.sort((a, b) => {
      if (selected.includes(a.value) && !selected.includes(b.value)) {
        return -1;
      } else if (!selected.includes(a.value) && selected.includes(b.value)) {
        return 1;
      } else {
        return 0;
      }
    });
    // setOptionsUpdated(optionsUpdated);
    // console.log(optionsUpdated);

    setOptions(result as Option[]);
    console.log(selected);

    handleCloseOperation(selected);

    setIsToggled(false);
  };
  //sort options and place checked options at the top

  //handle checkbox onchange
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //console.log(e.target.value);
    if (selected.includes(e.target.value)) {
      setSelected(selected.filter((item) => item !== e.target.value));
    } else {
      setSelected([...selected, e.target.value]);
    }
    // console.log(selected);
  };

  const handleLabelClick = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
    //  console.log(selected);
  };

  let { domNode1, domNode2 } = useClickOutside(() => {
    handleCloseModal();
  });

  return (
    <div className="font-roboto">
      {/* <pre className="text-white relative bottom-[20rem]">{selected}</pre> */}
      {isToggled && isDisabled === false && (
        <div
          ref={domNode1}
          className=" overflow-scroll h-[17.3125rem] z-20 bg-white rounded-[4px] absolute bottom-[10rem] sm:bottom-[10rem] border border-[#081314] border-opacity-10 py-4  w-[80%] sm:w-[10rem]"
        >
          {options?.map((item, index) => (
            <div
              key={index}
              className="flex items-center py-2.5 px-4 hover:bg-specialRed hover:bg-opacity-10"
              onClick={() => handleLabelClick(item.value)}
            >
              <input
                type="checkbox"
                className="border-specialRed border rounded-sm  mr-3 text-specialRed focus:outline-none focus:shadow-outline-specialRed focus:ring-0"
                value={item.value}
                name={placeHolder}
                checked={selected.includes(item.value)}
                onChange={handleChange}
              />
              <label
                className={`leading-[19px]  font-normal cursor-pointer ${
                  selected.includes(item.value)
                    ? "font-bold text-specialRed"
                    : "text-black"
                }`}
                style={{ marginLeft: "5px" }}
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
      )}
      <div
        ref={domNode2}
        {...rest}
        onClick={() => handleToggled()}
        className={` xl:w-[12.4375rem] h-[3rem]  bg-white border border-[#081314] border-opacity-10 rounded-[4px] flex items-center px-4 cursor-pointer ${
          !isToggled ? " justify-between" : "justify-between "
        }`}
      >
        {selected.length >= 1 ? (
          <h2 className="leading-[19px] text-black ">
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
        <CaretDownIcon
          className={`${
            isDisabled ? "text-[#081314] text-opacity-30" : "text-black"
          }text-[#081314] fill-current`}
        />
      </div>
    </div>
  );
};

export default MultiSelect;
