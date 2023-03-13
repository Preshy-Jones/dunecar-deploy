import React from "react";
import { useAppSelector } from "../../../../../store/hooks";
import { AlertIcon, PlayIcon } from "../../../../ui/icons";
import Category from "./Category";

const Features = () => {
  const { car } = useAppSelector((state) => state.car);
  const exteriorData = car?.carFeatures.filter(
    (features) => features.feature.category === "exterior-and-mechanical"
  );
  const techData = car?.carFeatures.filter(
    (features) => features.feature.category === "tech"
  );

  const entertainmentData = car?.carFeatures.filter(
    (features) => features.feature.category === "entertainment"
  );

  const interiorData = car?.carFeatures.filter(
    (features) => features.feature.category === "interior"
  );

  const mechanicalData = car?.carFeatures.filter(
    (features) => features.feature.category === "mechanical"
  );

  console.log(exteriorData);

  return (
    <div>
      <h1 className="text-specialRed font-extrabold text-[2rem] leading-[37.5px] mt-4 mb-[1rem]">
        Features
      </h1>
      <Category categoryData={exteriorData} title="Exterior & Mechanical" />
      <Category categoryData={techData} title="Tech" />
      <Category categoryData={interiorData} title="Interior" />
      <Category categoryData={mechanicalData} title="Mechanical" />
      <Category categoryData={entertainmentData} title="Entertainment" />
    </div>
  );
};

export default Features;
