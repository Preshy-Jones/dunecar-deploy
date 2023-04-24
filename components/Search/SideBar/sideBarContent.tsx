import BodyStyleFilter from "./Filters/BodyStyle";
import BodyType from "./Filters/BodyType";
import CylinderFilter from "./Filters/CylinderCount";
import ExteriorColour from "./Filters/ExteriorColour";
import Feature from "./Filters/Feature";
import FuelTypeFilter from "./Filters/FuelType";
import InteriorColour from "./Filters/InteriorColour";
import LocationFilter from "./Filters/Locations";
import MakeFilter from "./Filters/Make";
import Mileage from "./Filters/Mileage";
import Model from "./Filters/Model";
import Price from "./Filters/Price";
import SeriesFilter from "./Filters/Series";
import SortBy from "./Filters/SortBy";
import TransmissionFilter from "./Filters/Transmission";
import TrimsFilter from "./Filters/Trims";
import VehicleConditionFilter from "./Filters/VehicleCondition";
import Year from "./Filters/Year";

const shouldRenderModel = (filters: any) => {
  return filters.make && filters.make.length > 0 && filters.make[0] !== "";
};

interface SideBarContent {
  title: string;
  slug: string;
  groupByKey?: string;
  filterComponentKey: string;
  shouldRenderFunction?: (filters: any) => boolean;
}

export const SideBarContent: SideBarContent[] = [
  {
    title: "Sort By",
    slug: "sort-by",
    filterComponentKey: "sortBy",
  },
  {
    title: "Location",
    slug: "locations",
    groupByKey: "location",
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
    shouldRenderFunction: shouldRenderModel,
  },
  {
    title: "Series",
    slug: "series",
    groupByKey: "series_id",
    filterComponentKey: "series",
  },
  {
    title: "Trims",
    slug: "trims",
    groupByKey: "trim_id",
    filterComponentKey: "trim",
  },
  {
    title: "Body Type",
    slug: "bodyTypes",
    groupByKey: "body_type_id",
    filterComponentKey: "body_type",
  },
  {
    title: "Body Style",
    slug: "bodyStyles",
    groupByKey: "body_style_id",
    filterComponentKey: "body_style",
  },
  {
    title: "Fuel Type",
    slug: "fuelTypes",
    groupByKey: "fuel_type_id",
    filterComponentKey: "fuel_type",
  },
  {
    title: "Year",
    slug: "years",
    groupByKey: "year",
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
    filterComponentKey: "exterior_color",
  },
  {
    title: "Interior Color",
    slug: "interior_colors",
    groupByKey: "interior_color",
    filterComponentKey: "interior_color",
  },
  {
    title: "Transmission",
    slug: "transmissions",
    groupByKey: "transmission_id",
    filterComponentKey: "transmission",
  },
  {
    title: "Vehicle Conditions",
    slug: "vehicleConditions",
    groupByKey: "vehicle_condition",
    filterComponentKey: "vehicle_condition",
  },
  {
    title: "Cylinders",
    slug: "cylinders",
    groupByKey: "cylinder_count",
    filterComponentKey: "cylinder_count",
  }
];

export type SideBarContentType = typeof SideBarContent[number];

export const sideBarContentFilters = {
  make: <MakeFilter />,

  price: <Price />,

  year: <Year />,

  model: <Model />,

  body_type: <BodyType />,

  fuel_type: <FuelTypeFilter />,

  sortBy: <SortBy />,

  exterior_color: <ExteriorColour />,

  interior_color: <InteriorColour />,

  features: <Feature />,

  mileage: <Mileage />,

  transmission: <TransmissionFilter />,

  location: <LocationFilter />,

  series: <SeriesFilter />,

  body_style: <BodyStyleFilter />,

  trim: <TrimsFilter />,

  vehicle_condition: <VehicleConditionFilter />,

  cylinder_count: <CylinderFilter />,
};
