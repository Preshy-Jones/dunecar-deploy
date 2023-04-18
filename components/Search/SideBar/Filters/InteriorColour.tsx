import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { getCars } from "../../../../features/car/carSlice";
import {
  setFilter,
  setSelectedFilters,
} from "../../../../features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { CaretLeftIcon } from "../../../ui/icons";
import { setFilterOptions } from "../../../../features/filters_options/filterOptionsSlice";

const InteriorColour = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { filters, interior_colors } = useAppSelector((state) => state.search);
  const { interiorColourOptions } = useAppSelector(
    (state) => state.filterOptions
  );

  let selectedInteriorColours = filters.interior_color;
  const handleClose = () => {
    dispatch(setFilter(""));
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedInteriorColours?.includes(e.target.value)) {
      let newSelectedInteriorColours = selectedInteriorColours?.filter(
        (item) => item !== e.target.value
      ) as string[];

      dispatch(
        setSelectedFilters({
          field: "interior_color",
          value: newSelectedInteriorColours,
        })
      );
      dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            interior_color: newSelectedInteriorColours,
          },
        })
      );
    } else {
      dispatch(
        setSelectedFilters({
          field: "interior_color",
          value: [...(selectedInteriorColours as string[]), e.target.value],
        })
      );
      dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            interior_color: [
              ...(selectedInteriorColours as string[]),
              e.target.value,
            ],
          },
        })
      );
    }
    console.log(selectedInteriorColours);
  };
  const handleLabelClick = (value) => {
    if (selectedInteriorColours?.includes(value)) {
      let newSelectedInteriorColours = selectedInteriorColours?.filter(
        (item) => item !== value
      ) as string[];
      dispatch(
        setSelectedFilters({
          field: "interior_color",
          value: newSelectedInteriorColours,
        })
      );
      dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            interior_color: newSelectedInteriorColours,
          },
        })
      );
    } else {
      dispatch(
        setSelectedFilters({
          field: "interior_color",
          value: [...(selectedInteriorColours as string[]), value],
        })
      );
      dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            interior_color: [...(selectedInteriorColours as string[]), value],
          },
        })
      );
    }
  };

  useEffect(() => {
    let optionsPayload = interior_colors.map((colour) => ({
      value: colour._id,
      label: colour._id,
      count: colour.count,
    }));

    dispatch(
      setFilterOptions({
        field: "interiorColourOptions",
        value: optionsPayload,
      })
    );
  }, [dispatch, interior_colors]);

  return (
    <div className="">
      <div
        className="flex border-t-dividerGray border-t border-b pb-[1.25rem] pt-[1.25rem] items-center px-6 hover:bg-specialRed hover:bg-opacity-10 hover:text-specialRed"
        onClick={handleClose}
      >
        <CaretLeftIcon className="mr-7 hover:text-specialRed fill-current" />
        <h1 className="leading-secondary text-secondary font-medium font-roboto ">
          Interior Colour
        </h1>
      </div>

      <div>
        {interiorColourOptions?.map((item, index) => (
          <div
            className="flex items-center pl-6 py-2.5 hover:bg-specialRed hover:bg-opacity-5 cursor-pointer"
            key={index}
            onClick={() => handleLabelClick(item.value)}
          >
            <input
              type="checkbox"
              className="border-specialRed border bg-go rounded-sm w-[1.5rem] h-[1.5rem]  mr-3 text-specialRed focus:outline-none focus:shadow-outline-specialRed focus:ring-0"
              value={item.value}
              name="interiorColour"
              checked={selectedInteriorColours?.includes(item.value)}
              onChange={handleChange}
            />
            <div
              style={{ backgroundColor: colorCodeKey[item.value] }}
              className={`h-[1.1875rem] w-[1.1875rem] rounded-secondary mr-3 ml-1`}
            ></div>
            <label
              className={`leading-primary text-secondary font-normal cursor-pointer ${
                selectedInteriorColours?.includes(item.value)
                  ? "font-bold text-specialRed"
                  : "text-lighterDark"
              }`}
              style={{ marginLeft: "5px" }}
            >
              {item.label} ({item.count})
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteriorColour;

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

const colorCodeKey = {
  Black: "#000000",
  Blue: "#0000FF",
  Brown: "#A52A2A",
  Gold: "#FFD700",
  Gray: "#808080",
  Green: "#008000",
  Orange: "#FFA500",
  Purple: "#800080",
  Red: "#FF0000",
  Tan: "#D2B48C",
  Silver: "#C0C0C0",
  Yellow: "#FFFF00",
};
