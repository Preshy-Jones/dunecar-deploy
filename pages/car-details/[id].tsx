import React from "react";
import CarSpecs from "../../components/CarDetails/CarSpecs";
import Gallery from "../../components/CarDetails/Gallery";
import TopDetails from "../../components/CarDetails/TopDetails";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import { LeftArrowIcon } from "../../components/ui/icons";

const CarDetails = () => {
  return (
    <div className="font-roboto">
      <TopDetails />
      <Gallery />
      <CarSpecs />
    </div>
  );
};

CarDetails.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default CarDetails;
