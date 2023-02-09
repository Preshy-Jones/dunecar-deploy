import React from "react";
import { DoorDelivery, MoneyBackIcon, QualityAssurance } from "../ui/icons";

const WhyChooseUs = () => {
  return (
    <div className="sm:mt-28 mt-[20rem] flex justify-center font-roboto">
      <div className="w-[80%]">
        <h1 className="font-extrabold text-[2rem] mb-8">Why Choose Us</h1>
        <div className="flex flex-col sm:flex-row sm:justify-between items-baseline">
          {content.map((item, index) => {
            return (
              <div key={index} className="flex flex-col items-center sm:w-[30%] sm:mb-0 mb-24">
                {item.icon}
                <h2 className="font-semibold text-[1.5rem] mt-8">
                  {item.title}
                </h2>
                <p className="font-light text-[1.125rem] mb-8 text-center text-[#221121] leading-[2rem]">
                  {item.description}
                </p>
                <button className="bg-black text-white h-[48px] px-4 rounded-[4px] w-[12.25rem]">
                  {item.linkText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

const content = [
  {
    title: "High Quality Cars Assured",
    description:
      "Every car has been thoroughly inspected, fully reconditioned and has had a recent service and MOT, if required.",
    linkText: "Quality Assurance",
    icon: <QualityAssurance />,
  },
  {
    title: "7 Days Money Back",
    description:
      "More comprehensive than a typical test drive. If you change your mind, you can return it for a full refund.",
    linkText: "Money Back Policy",
    icon: <MoneyBackIcon />,
  },
  {
    title: "DoorStep Delivery",
    description:
      "More comprehensive than a typical test drive. If you change your mind, you can return it for a full refund",
    linkText: "Delivery Policy",
    icon: <DoorDelivery />,
  },
];
