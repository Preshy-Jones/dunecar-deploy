import React from "react";
import { ThumbsUpIcon } from "../ui/icons";
import StarFilled from "../ui/icons/StarFilled";
import StarOutlined from "../ui/icons/StarOutlined";
import ThumbsDown from "../ui/icons/ThumbsDown";

const RatingsReview = () => {
  return (
    <div
      className="flex justify-center mt-[4rem] font-roboto bg-white ratings"
      id="ratings"
    >
      <div className="w-primary grid grid-cols-2">
        <div>
          <h1 className="font-extrabold text-thirdBlack text-[2rem] leading-[2.375rem] w-primary">
            Ratings & Reviews
          </h1>
          <div className="flex items-center mt-[1.5rem]">
            <div className="flex items-center mr-3">
              <StarFilled className="mr-2" />
              <StarFilled className="mr-2" />
              <StarFilled className="mr-2" />
              <StarFilled className="mr-2" />
              <StarOutlined className="mr-2" />
            </div>
            <h2 className="text-secondaryBlack mr-3 font-light">
              4.1 out of 5
            </h2>
            <h2 className="text-specialRed font-light leading-fifth">
              16 customer reviews
            </h2>
          </div>
          {/* rating bar */}
          <div className="mt-[0.9rem] mb-[3rem]">
            <RatingBar percentage="80%" starNumber="5" count="7" />
            <RatingBar percentage="23%" starNumber="4" count="5" />
            <RatingBar percentage="30%" starNumber="3" count="2" />
            <RatingBar percentage="50%" starNumber="2" count="2" />
            <RatingBar percentage="30%" starNumber="1" count="3" />
          </div>
          <button className="border-[1.5px] rounded-tertiary border-specialRed text-specialRed h-[3rem] font-semibold w-[25.5625rem]">
            View all Ratings & Reviews
          </button>
        </div>
        <div>
          <div className="mb-8">
            <h1 className="font-semibold text-fourth text-fourthBlack leading-[1.8125rem] mb-2.5 ">
              Pros
            </h1>
            <div className="flex items-center">
              <ThumbsUpIcon />
              <p className="font-light ml-3 leading-fifth text-secondaryBlack">
                Interior Space, Ride and Handling, Power.
              </p>
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-fourth leading-[1.8125rem] mb-2.5 ">
              Cons
            </h1>
            <div className="flex items-center">
              <ThumbsDown />
              <p className="font-light ml-3 leading-fifth text-secondaryBlack">
                Fuel Economy, Cost to Maintain, Technology and Entertainment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingsReview;

const RatingBar = ({ percentage, starNumber, count }) => {
  return (
    <div className="flex items-center mb-5">
      <h2 className="font-light leading-fifth mr-3">{starNumber}</h2>
      <div className="relative w-[25.0625rem] flex items-center mr-3">
        <div className="h-[9px] bg-lighterRed w-full absolute rounded-[2px]"></div>
        <div
          style={{ width: percentage }}
          className={`h-[9px] bg-specialRed absolute rounded-l-[2px]`}
        ></div>
      </div>
      <h2 className="font-light leading-fifth">{count}</h2>
    </div>
  );
};
