import MakeModel from "./Filters/MakeModel";
import Price from "./Filters/Price";
import Year from "./Filters/Year";

const SideBarContent = [
  {
    title: "Location",
    filterComponent: <MakeModel />,
  },
  {
    title: "Make",
    filterComponent: <Price />,
  },
  {
    title: "Model",
  },
  {
    title: "Body Type",
    filterComponent: <Year />,
  },
  {
    title: "Fuel Type",
  },
  {
    title: "Year",
  },
  {
    title: "Price",
  },
  {
    title: "Mileage",
  },
  {
    title: "Features",
  },
  {
    title: "Exterior Color",
  },
  {
    title: "Interior Color",
  },
];

export default SideBarContent;
