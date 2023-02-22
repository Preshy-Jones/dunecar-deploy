import MakeFilter from "./Filters/Make";
import Model from "./Filters/Model";
import Price from "./Filters/Price";
import Year from "./Filters/Year";

export const SideBarContent = [
  {
    title: "Location",
    filterComponentKey: "location",
  },
  {
    title: "Make",
    filterComponentKey: "make",
  },
  {
    title: "Model",
    filterComponentKey: "model",
  },
  {
    title: "Body Type",
    filterComponentKey: "bodyType",
  },
  {
    title: "Fuel Type",
    filterComponentKey: "fuelType",
  },
  {
    title: "Year",
    filterComponentKey: "year",
  },
  {
    title: "Price",
    filterComponentKey: "price",
  },
  {
    title: "Mileage",
    filterCompomentKey: "mileage",
  },
  {
    title: "Features",
    filterComponentKey: "features",
  },
  {
    title: "Exterior Color",
    filterComponentKey: "exteriorColor",
  },
  {
    title: "Interior Color",
    filterComponentKey: "interiorColor",
  },
];

export const sideBarContentFilters = {
  make: <MakeFilter />,

  price: <Price />,

  year: <Year />,

  model: <Model/>
};
