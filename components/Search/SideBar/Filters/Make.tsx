import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getCars } from "../../../../features/car/carSlice";
import {
  getMakes,
  setMakeOptions,
  setSelectedMakes,
} from "../../../../features/make/makeSlice";
import { getModels } from "../../../../features/model/modelSlice";
import { setFilter } from "../../../../features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { CaretLeftIcon } from "../../../ui/icons";
import { Spinner } from "../../../ui/others";

const MakeFilter = () => {
  let { makes, makeOptions, selectedMakes, isLoading } = useAppSelector(
    (state) => state.make
  );

  const router = useRouter();

  let { carFilter: filters } = useAppSelector((state) => state.car);

  let initialMakeOptions = makes.map((make) => ({
    value: make.slug,
    label: make.title,
  }));

  const dispatch = useAppDispatch();

  // const [selected, setSelected] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    console.log("shhah");
    if (selectedMakes.includes(e.target.value)) {
      dispatch(
        setSelectedMakes(
          selectedMakes.filter((item) => item !== e.target.value)
        )
      );
    } else {
      dispatch(setSelectedMakes([...selectedMakes, e.target.value]));
    }
    console.log(selectedMakes);
  };
  const handleLabelClick = (value) => {
    console.log(value);
    console.log("helshhshshlo");

    if (selectedMakes.includes(value)) {
      dispatch(
        setSelectedMakes(selectedMakes.filter((item) => item !== value))
      );
    } else {
      dispatch(setSelectedMakes([...selectedMakes, value]));
    }
  };
  const handleClose = () => {
    dispatch(setFilter(""));
    let result = initialMakeOptions?.sort((a, b) => {
      if (selectedMakes.includes(a.value) && !selectedMakes.includes(b.value)) {
        return -1;
      } else if (
        !selectedMakes.includes(a.value) &&
        selectedMakes.includes(b.value)
      ) {
        return 1;
      } else {
        return 0;
      }
    });

    console.log(result);

    // setOptionsUpdated(optionsUpdated);
    // console.log(optionsUpdated);

    dispatch(setMakeOptions(result));
    dispatch(getCars({ makes: selectedMakes, limit: "20" }));
    dispatch(getModels({ makes: selectedMakes }));

    //update the query strings but don't reload the page
    router.push(
      {
        pathname: "/search",
        query: { ...router.query, make: selectedMakes },
      },
      undefined,
      { shallow: true }
    );
  };

  useEffect(() => {
    dispatch(getMakes());
    // console.log(modelOptions);
  }, [dispatch]);

  useEffect(() => {
    //when there are no makeOptions loaded yet
    if (!makeOptions || makeOptions.length === 0) {
      let makeOptionsPayload = makes.map((make) => ({
        value: make.slug,
        label: make.title,
      }));
      let result = makeOptionsPayload?.sort((a, b) => {
        if (
          selectedMakes.includes(a.value) &&
          !selectedMakes.includes(b.value)
        ) {
          return -1;
        } else if (
          !selectedMakes.includes(a.value) &&
          selectedMakes.includes(b.value)
        ) {
          return 1;
        } else {
          return 0;
        }
      });
      dispatch(setMakeOptions(result));
    }
  }, [makes, dispatch]);

  return (
    <div className="px-6">
      <div
        className="flex border-t-dividerGray border-t border-b pb-[1.25rem] pt-[1.25rem] items-center pl-6 hover:bg-specialRed hover:bg-opacity-10 hover:text-specialRed "
        onClick={handleClose}
      >
        <CaretLeftIcon className="mr-7 hover:text-specialRed fill-current" />
        <h1 className="leading-secondary text-secondary font-medium">Make</h1>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <Spinner />
        </div>
      ) : (
        <div>
          {makeOptions?.map((item, index) => (
            <div
              className="flex items-center pl-6 py-2.5 hover:bg-specialRed hover:bg-opacity-5 cursor-pointer"
              key={index}
              onClick={() => handleLabelClick(item.value)}
            >
              <input
                type="checkbox"
                className="border-specialRed border rounded-sm w-[1.5rem] h-[1.5rem]  mr-3 text-specialRed focus:outline-none focus:shadow-outline-specialRed focus:ring-0"
                value={item.value}
                name="make"
                checked={selectedMakes.includes(item.value)}
                onChange={handleChange}
              />
              <label
                className={`leading-primary text-secondary font-normal cursor-pointer ${
                  selectedMakes.includes(item.value)
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
      )}
    </div>
  );
};

export default MakeFilter;
