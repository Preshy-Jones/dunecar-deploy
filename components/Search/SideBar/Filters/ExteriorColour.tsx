import { useRouter } from "next/router";
import React from "react";
import { getCars } from "../../../../features/car/carSlice";
import { setFilter, setSelectedExteriorColours } from "../../../../features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { FilterCustomSelect as Select } from "../../../ui/form/Select";
import { CaretLeftIcon } from "../../../ui/icons";

const ExteriorColour = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { selectedExteriorColours } = useAppSelector((state) => state.search);
  const handleClose = () => {
    dispatch(setFilter(""));

    // setOptionsUpdated(optionsUpdated);
    // console.log(optionsUpdated);

    //    dispatch(getCars({ makes: selectedMakes, limit: "20" }));

    //update the query strings but don't reload the page
    // router.push(
    //   {
    //     pathname: "/search",
    //     query: { ...router.query, make: selectedMakes },
    //   },
    //   undefined,
    //   { shallow: true }
    // );
  };

  const colors = [
    "Black",
    "Blue",
    "Brown",
    "Gold",
    "Gray",
    "Green",
    "Orange",
    "Purple",
    "Red",
  ];

  const coloursData = [
    {
      value: "black",
      label: "Black",
      colorCode: "#000000",
    },
    {
      value: "blue",
      label: "Blue",
      colorCode: "#0000FF",
    },
    {
      value: "brown",
      label: "Brown",
      colorCode: "#A52A2A",
    },
    {
      value: "gold",
      label: "Gold",
      colorCode: "#FFD700",
    },
    {
      value: "gray",
      label: "Gray",
      colorCode: "#808080",
    },
    {
      value: "green",
      label: "Green",
      colorCode: "#008000",
    },
    {
      value: "orange",
      label: "Orange",
      colorCode: "#FFA500",
    },
    {
      value: "purple",
      label: "Purple",
      colorCode: "#800080",
    },
    {
      value: "red",
      label: "Red",
      colorCode: "#FF0000",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedExteriorColours.includes(e.target.value)) {
      dispatch(
        setSelectedExteriorColours(
          selectedExteriorColours.filter((item) => item !== e.target.value)
        )
      );
    } else {
      dispatch(
        setSelectedExteriorColours([...selectedExteriorColours, e.target.value])
      );
    }
    console.log(selectedExteriorColours);
  };
  const handleLabelClick = (value) => {
    if (selectedExteriorColours.includes(value)) {
      dispatch(
        setSelectedExteriorColours(
          selectedExteriorColours.filter((item) => item !== value)
        )
      );
    } else {
      dispatch(setSelectedExteriorColours([...selectedExteriorColours, value]));
    }
  };

  return (
    <div className="">
      <div
        className="flex border-t-dividerGray border-t border-b pb-[1.25rem] pt-[1.25rem] items-center px-6 hover:bg-specialRed hover:bg-opacity-10 hover:text-specialRed"
        onClick={handleClose}
      >
        <CaretLeftIcon className="mr-7 hover:text-specialRed fill-current" />
        <h1 className="leading-secondary text-secondary font-medium font-roboto ">
          Exterior Colour
        </h1>
      </div>

      <div>
        {coloursData?.map((item, index) => (
          <div
            className="flex items-center pl-6 py-2.5 hover:bg-specialRed hover:bg-opacity-5 cursor-pointer"
            key={index}
            onClick={() => handleLabelClick(item.value)}
          >
            <input
              type="checkbox"
              className="border-specialRed border bg-go rounded-sm w-[1.5rem] h-[1.5rem]  mr-3 text-specialRed focus:outline-none focus:shadow-outline-specialRed focus:ring-0"
              value={item.value}
              name="make"
              checked={selectedExteriorColours.includes(item.value)}
              onChange={handleChange}
            />
            <div
            style={{ backgroundColor: item.colorCode }}
            className={`h-[1.1875rem] w-[1.1875rem] rounded-secondary mr-3 ml-1`}
            >

            </div>
            <label
              className={`leading-primary text-secondary font-normal cursor-pointer ${
                selectedExteriorColours.includes(item.value)
                  ? "font-bold text-specialRed"
                  : "text-lighterDark"
              }`}
              style={{ marginLeft: "5px" }}
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExteriorColour;
