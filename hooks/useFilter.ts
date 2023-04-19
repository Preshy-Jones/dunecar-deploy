import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getCars } from "../features/car/carSlice";
import { setSelectedFilters } from "../features/search/searchSlice";
import { useRouter } from "next/router";

interface FilterParams {
  filterData: any;
  selected: string[];
  field: string;
  setOptionsHandler: any;
}

const useFilter = (payload: FilterParams) => {
  const { filterData, selected, field, setOptionsHandler } = payload;
  const dispatch = useAppDispatch();
  const router = useRouter();
  let { filters } = useAppSelector((state) => state.search);

  const handleChange = async (value) => {
    //console.log(value);

    if (selected?.includes(value)) {
      let newSelected = selected?.filter((item) => item !== value) as string[];
      await dispatch(
        setSelectedFilters({
          field,
          value: newSelected,
        })
      );

      await dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            [field]: newSelected,
          },
        })
      ).then(() => {
        //update route params
        router.push(
          {
            pathname: "/search",
            query: { ...router.query, make: newSelected },
          },
          undefined,
          { shallow: true }
        );
      });
    } else {
      await dispatch(
        setSelectedFilters({
          field,
          value: [...(selected as string[]), value],
        })
      );
      await dispatch(
        getCars({
          page: "1",
          perPage: "20",
          filters: {
            ...filters,
            [field]: [...(selected as string[]), value],
          },
        })
      ).then(() => {
        router.push(
          {
            pathname: "/search",
            query: {
              ...router.query,
              [field]: [...(selected as string[]), value],
            },
          },
          undefined,
          { shallow: true }
        );
      });
    }
  };

  useEffect(() => {
    setOptionsHandler();

    // }
  }, [filterData, dispatch]);

  return { handleChange };
};

export default useFilter;
