import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import CarSpecs from "../../components/CarDetails/CarSpecs/CarSpecs";
import ExtraLinks from "../../components/CarDetails/ExtraLinks";
import Gallery from "../../components/CarDetails/Gallery";
import HistoryInspection from "../../components/CarDetails/HistoryInspection";
import RatingsReview from "../../components/CarDetails/RatingsReview";
import RecommendedCars from "../../components/CarDetails/RecommendedCars/RecommendedCars";
import TopDetails from "../../components/CarDetails/TopDetails";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import { getCar } from "../../features/car/carSlice";
import { useAppDispatch } from "../../store/hooks";

const CarDetails = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query as { id: string };


  useEffect(() => {
    if (!router.isReady) return;
    dispatch(getCar(id));
  }, [dispatch, router]);

  return (
    <div className="font-roboto">
      <Head>
        <title>Car Details</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <TopDetails />
      <Gallery />
      <CarSpecs />
      <HistoryInspection />
      <RecommendedCars />
      <RatingsReview />
      <ExtraLinks />
    </div>
  );
};

CarDetails.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default CarDetails;