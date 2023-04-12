import BodyType from "./Filters/BodyType";
import ExteriorColour from "./Filters/ExteriorColour";
import Feature from "./Filters/Feature";
import FuelType from "./Filters/FuelType";
import InteriorColour from "./Filters/InteriorColour";
import MakeFilter from "./Filters/Make";
import Mileage from "./Filters/Mileage";
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
    slug: "makes",
    groupByKey: "make_id",
    filterComponentKey: "make",
  },
  {
    title: "Model",
    slug: "models",
    groupByKey: "model_id",
    filterComponentKey: "model",
  },
  {
    title: "Body Type",
    slug: "body_types",
    groupByKey: "body_type_id",
    filterComponentKey: "bodyType",
  },
  {
    title: "Fuel Type",
    slug: "fuel_types",
    groupByKey: "fuel_type_id",
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
    filterComponentKey: "mileage",
  },
  {
    title: "Features",
    slug: "features",
    groupByKey: "features",
    filterComponentKey: "features",
  },
  {
    title: "Exterior Color",
    slug: "exterior_colors",
    groupByKey: "exterior_color",
    filterComponentKey: "exteriorColor",
  },
  {
    title: "Interior Color",
    slug: "interior_colors",
    groupByKey: "interior_color",
    filterComponentKey: "interiorColor",
  },
];

export type SideBarContentType = typeof SideBarContent[number] ;

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

  mileage: <Mileage />,
};
