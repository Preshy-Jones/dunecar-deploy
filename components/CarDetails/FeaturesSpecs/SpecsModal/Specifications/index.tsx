import React from "react";
import { useAppSelector } from "../../../../../store/hooks";
import Category from "./Category";

const Specifications = () => {
  const { car } = useAppSelector((state) => state.car);
  return (
    <div>
      <h1 className="text-specialRed font-extrabold text-[2rem] leading-[37.5px] mt-4 mb-[1rem]">
        Specifications
      </h1>
      <Category
        data={car?.performance}
        title="Performance"
        keys={performanceKeys}
      />
      <Category
        data={car?.measurement}
        title="Measurements"
        keys={measurementKeys}
      />
    </div>
  );
};

export default Specifications;

const performanceKeys = [
  {
    title: "Torque (ft-lbs)",
    keyFunc: (payload) => payload?.torque?.value + " " + payload?.torque?.unit,
  },
  {
    title: "Horsepower",
    keyFunc: (payload) =>
      payload?.horsePower?.value + " " + payload?.horsePower?.unit,
  },
  {
    title: "Fuel Capacity",
    keyFunc: (payload) =>
      payload?.fuel_capacity?.value + " " + payload?.fuel_capacity?.unit,
  },
];

const measurementKeys = [
  {
    title: "Dimensions",
    keyFunc: (payload) =>
      `${payload?.dimensions?.length} ${payload?.dimensions.unit} x ${payload?.dimensions?.width} ${payload?.dimensions.unit} x ${payload?.dimensions?.height} ${payload?.dimensions.unit} `,
  },
  {
    title: "Wheelbase",
    keyFunc: (payload) =>
      payload?.wheelBase.value + " " + payload?.wheelBase.unit,
  },
  {
    title: "Front Tire Size (standard)",
    keyFunc: (payload) => payload?.frontTireSize,
  },

  {
    title: "Driver Leg Room",
    keyFunc: (payload) =>
      payload?.driverLegRoom.value + " " + payload?.driverLegRoom.unit,
  },
  {
    title: "Driver Head Room",
    keyFunc: (payload) =>
      payload?.driverHeadRoom.value + " " + payload?.driverHeadRoom.unit,
  },
  {
    title: "Curb Weight",
    keyFunc: (payload) =>
      payload?.curbWeight.value + " " + payload?.curbWeight.unit,
  },
];
