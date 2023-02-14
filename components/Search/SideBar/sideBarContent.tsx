import MakeModel from "./Filters/MakeModel";
import Price from "./Filters/Price";
import Year from "./Filters/Year";

const SideBarContent = [
  {
    title: "Make & Model",
    filterComponent: <MakeModel />,
  },
  {
    title: "Price",
    filterComponent: <Price />,
  },
  {
    title: "Fuel & Efficiency",
  },
  {
    title: "Year",
    filterComponent: <Year />,
  },
  {
    title: "Mileasge",
  },
  {
    title: "Gearbox & Engine",
  },
  {
    title: "Colour",
  },
  {
    title: "Body Type",
  },
  {
    title: "Drive Type",
  },
  {
    title: "Doors & Seats",
  },
  {
    title: "Features",
  },
  {
    title: "CO2 Emissions",
  },
];

export default SideBarContent;
