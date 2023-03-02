import React, { useEffect } from "react";
import {
  getBodyTypes,
  setBodyTypeOptions,
  setSelectedBodyTypes,
} from "../../../../features/bodyType/bodyTypeSlice";
import { getCars } from "../../../../features/car/carSlice";
import { setFilter } from "../../../../features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { CaretLeftIcon } from "../../../ui/icons";
import { Spinner } from "../../../ui/others";

const BodyType = () => {
  const dispatch = useAppDispatch();

  const { selectedMakes } = useAppSelector((state) => state.make);
  const { modelsSelected } = useAppSelector((state) => state.model);

  const { bodyTypes, selectedBodyTypes, isLoading, bodyTypeOptions } =
    useAppSelector((state) => state.bodyType);

  let initialMakeOptions = bodyTypes.map((bodyType) => ({
    value: bodyType.slug,
    label: bodyType.title,
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    if (selectedBodyTypes.includes(e.target.value)) {
      dispatch(
        setSelectedBodyTypes(
          selectedBodyTypes.filter((item) => item !== e.target.value)
        )
      );
    } else {
      dispatch(setSelectedBodyTypes([...selectedBodyTypes, e.target.value]));
    }
    console.log(selectedBodyTypes);
  };

  const handleClose = () => {
    dispatch(setFilter(""));
    let result = initialMakeOptions?.sort((a, b) => {
      if (
        selectedBodyTypes.includes(a.value) &&
        !selectedBodyTypes.includes(b.value)
      ) {
        return -1;
      } else if (
        !selectedBodyTypes.includes(a.value) &&
        selectedBodyTypes.includes(b.value)
      ) {
        return 1;
      } else {
        return 0;
      }
    });
    // setOptionsUpdated(optionsUpdated);
    // console.log(optionsUpdated);

    dispatch(setBodyTypeOptions(result));
    dispatch(
      getCars({
        makes: selectedMakes,
        models: modelsSelected,
        body_types: selectedBodyTypes,
        limit: "20",
      })
    );
  };
  //update the query strings but don't reload the page
  //   router.push(
  //     {
  //       pathname: "/search",
  //       query: { ...router.query, make: selectedMakes },
  //     },
  //     undefined,
  //     { shallow: true }
  //   );
  // };

  useEffect(() => {
    dispatch(
      getBodyTypes({
        makes: selectedMakes,
      })
    );
  }, [dispatch, selectedMakes]);

  useEffect(() => {
    let bodyTypeOptionsPayload = bodyTypes.map((make) => ({
      value: make.slug,
      label: make.title,
    }));

    dispatch(setBodyTypeOptions(bodyTypeOptionsPayload));
  }, [bodyTypes, dispatch]);

  return (
    <div className="px-6">
      <div
        className="flex border-t-dividerGray border-t border-b pb-[1.25rem] pt-[1.25rem] items-center"
        onClick={handleClose}
      >
        <CaretLeftIcon className="mr-7" />
        <h1 className="leading-secondary text-secondary font-medium">
          Body Type
        </h1>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <Spinner />
        </div>
      ) : (
        <div>
          {bodyTypeOptions?.map((item, index) => (
            <div key={index} className="flex items-center mt-5">
              <input
                type="checkbox"
                className="border-specialRed border rounded-sm w-[1.5rem] h-[1.5rem]  mr-3 text-specialRed focus:outline-none focus:shadow-outline-specialRed focus:ring-0"
                value={item.value}
                name="make"
                checked={selectedBodyTypes.includes(item.value)}
                onChange={handleChange}
              />
              <label
                className="leading-primary text-secondary text-lighterDark font-normal"
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

export default BodyType;
