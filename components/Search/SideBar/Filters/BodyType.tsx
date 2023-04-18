import React, { useEffect } from "react";
import {
  getBodyTypes,
  setBodyTypeOptions,
  setSelectedBodyTypes,
} from "../../../../features/bodyType/bodyTypeSlice";
import { getCars } from "../../../../features/car/carSlice";
import {
  setFilter,
  setSelectedFilters,
} from "../../../../features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { CaretLeftIcon } from "../../../ui/icons";
import { Spinner } from "../../../ui/others";
import { useRouter } from "next/router";

const BodyType = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { filters, bodyTypes } = useAppSelector((state) => state.search);
  let selectedBodyTypes = filters.body_type;

  const { bodyTypeOptions } = useAppSelector((state) => state.bodyType);

  // let initialOptions = bodyTypes.map((bodyType) => ({
  //   value: bodyType.body_type._id,
  //   label: bodyType.body_type.title,
  //   count: bodyType.count,
  // }));

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    let selectedBodyTypes = filters.body_type;
    if (selectedBodyTypes?.includes(e.target.value)) {
      let newSelectedBodyTypes = selectedBodyTypes?.filter(
        (item) => item !== e.target.value
      ) as string[];
      await dispatch(
        setSelectedFilters({
          field: "body_type",
          value: newSelectedBodyTypes,
        })
      );

      await dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            body_type: newSelectedBodyTypes,
          },
        })
      ).then(() => {
        //update route params
        router.push(
          {
            pathname: "/search",
            query: { ...router.query, body_type: newSelectedBodyTypes },
          },
          undefined,
          { shallow: true }
        );
      });
    } else {
      await dispatch(
        setSelectedFilters({
          field: "body_type",
          value: [...(selectedBodyTypes as string[]), e.target.value],
        })
      );
      await dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            body_type: [...(selectedBodyTypes as string[]), e.target.value],
          },
        })
      ).then(() => {
        //update route params
        router.push(
          {
            pathname: "/search",
            query: {
              ...router.query,
              body_type: [...(selectedBodyTypes as string[]), e.target.value],
            },
          },
          undefined,
          { shallow: true }
        );
      });
    }
    console.log(selectedBodyTypes);
  };

  const handleLabelClick = async (value) => {
    let selectedBodyTypes = filters.body_type;
    let newSelectedBodyTypes = selectedBodyTypes?.filter(
      (item) => item !== value
    ) as string[];

    if (selectedBodyTypes?.includes(value)) {
      await dispatch(
        setSelectedFilters({
          field: "body_type",
          value: newSelectedBodyTypes,
        })
      );

      await dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            body_type: newSelectedBodyTypes,
          },
        })
      ).then(() => {
        //update route params
        router.push(
          {
            pathname: "/search",
            query: { ...router.query, body_type: newSelectedBodyTypes },
          },
          undefined,
          { shallow: true }
        );
      });
    } else {
      await dispatch(
        setSelectedFilters({
          field: "body_type",
          value: [...(selectedBodyTypes as string[]), value],
        })
      );
      await dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            body_type: [...(selectedBodyTypes as string[]), value],
          },
        })
      ).then(() => {
        //update route params
        router.push(
          {
            pathname: "/search",
            query: {
              ...router.query,
              body_type: [...(selectedBodyTypes as string[]), value],
            },
          },
          undefined,
          { shallow: true }
        );
      });
    }
  };

  const handleClose = () => {
    dispatch(setFilter(""));
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
    let bodyTypeOptionsPayload = bodyTypes.map((bodyType) => ({
      value: bodyType.body_type._id,
      label: bodyType.body_type.title,
      count: bodyType.count,
    }));

    dispatch(setBodyTypeOptions(bodyTypeOptionsPayload));
  }, [bodyTypes, dispatch]);

  return (
    <div className="">
      <div
        className="flex border-t-dividerGray border-t border-b pb-[1.25rem] pt-[1.25rem] items-center px-6 hover:bg-specialRed hover:bg-opacity-10 hover:text-specialRed"
        onClick={handleClose}
      >
        <CaretLeftIcon className="mr-7 hover:text-specialRed fill-current" />
        <h1 className="leading-secondary text-secondary font-medium font-roboto">
          Body Type
        </h1>
      </div>

      <div className="h-[29rem] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded my-scrollbar scrollbar-thumb-specialRed scrollbar-track-gray-200">
        {bodyTypeOptions?.map((item, index) => (
          <div
            key={index}
            className="flex items-center pl-6 py-2.5 hover:bg-specialRed hover:bg-opacity-5 cursor-pointer"
            onClick={() => handleLabelClick(item.value)}
          >
            <input
              type="checkbox"
              className="border-specialRed border rounded-sm w-[1.5rem] h-[1.5rem]  mr-3 text-specialRed focus:outline-none focus:shadow-outline-specialRed focus:ring-0"
              value={item.value}
              name="make"
              checked={selectedBodyTypes?.includes(item.value)}
              onChange={handleChange}
            />
            <label
              className="leading-primary text-secondary text-lighterDark font-normal"
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

export default BodyType;
