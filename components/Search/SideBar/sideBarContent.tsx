import BodyType from "./Filters/BodyType";
import ExteriorColour from "./Filters/ExteriorColour";
import Feature from "./Filters/Feature";
import FuelType from "./Filters/FuelType";
import InteriorColour from "./Filters/InteriorColour";
import MakeFilter from "./Filters/Make";
import Model from "./Filters/Model";
import Price from "./Filters/Price";
import SortBy from "./Filters/SortBy";
import Year from "./Filters/Year";

export const SideBarContent = [
  {
    title: "Sort By",
    slug: "sort-by",
    filterComponentKey: "sortBy",
  },
  {
    title: "Location",
    slug: "location",
    filterComponentKey: "location",
  },
  {
    title: "Make",
    slug: "make",
    filterComponentKey: "make",
  },
  {
    title: "Model",
    slug: "model",
    filterComponentKey: "model",
  },
  {
    title: "Body Type",
    slug: "body-type",
    filterComponentKey: "bodyType",
  },
  {
    title: "Fuel Type",
    slug: "fuel-type",
    filterComponentKey: "fuelType",
  },
  {
    title: "Year",
    slug: "year",
    filterComponentKey: "year",
  },
  {
    title: "Price",
    slug: "price",
    filterComponentKey: "price",
  },
  {
    title: "Mileage",
    slug: "mileage",
    filterCompomentKey: "mileage",
  },
  {
    title: "Features",
    slug: "features",
    filterComponentKey: "features",
  },
  {
    title: "Exterior Color",
    slug: "exterior-color",
    filterComponentKey: "exteriorColor",
  },
  {
    title: "Interior Color",
    slug: "interior-color",
    filterComponentKey: "interiorColor",
  },
];

export const sideBarContentFilters = {
  make: <MakeFilter />,

  price: <Price />,

  year: <Year />,

  model: <Model />,

  bodyType: <BodyType />,

  fuelType: <FuelType />,

  sortBy: <SortBy />,

  exteriorColor: <ExteriorColour />,

  interiorColor: <InteriorColour />,

  features: <Feature />,
};
