import React from "react";
import { ChatIcon, DollarIcon } from "../ui/icons";

const ExtraLinks = () => {
  return (
    <div className="flex justify-center mt-[5rem] bg-pageBg2 py-[3.5rem]">
      <div className="flex justify-between w-primary">
        <div className="border border-dividerGray px-4 pt-4 rounded-[20px] w-[32.4%] pb-[6rem]">
          <DollarIcon />
          <p className="text-fourthBlack leading-ninth text-fourth mt-3 mb-2.5">
            Get an Offer on Your Car
          </p>
          <h2 className="font-light leading-fifth mb-5">
            Selling or trading in? We want your car.
          </h2>
          <h2 className="text-specialRed underline font-medium leading-fifth">
            Get your offer.
          </h2>
        </div>
        <div className="border border-dividerGray px-4 pt-4 rounded-[20px] w-[32.4%] pb-[6rem]">
          <ChatIcon />
          <p className="text-fourthBlack leading-ninth text-fourth mt-3 mb-2.5">
            Have a Question? Just Ask
          </p>
          <h2 className="font-light leading-fifth mb-5">We’re here to help</h2>
          <h2 className="text-specialRed underline font-medium leading-fifth">
            Get your offer.
          </h2>
        </div>
        <div className="border border-dividerGray px-4 pt-4 rounded-[20px] w-[32.4%] pb-[6rem]">
          <DollarIcon />
          <p className="text-fourthBlack leading-ninth text-fourth mt-3 mb-2.5">
            Need Financing?
          </p>
          <h2 className="font-light leading-fifth mb-5">
            Get pre-qualified with no impact to your credit score.
          </h2>
          <h2 className="text-specialRed underline font-medium leading-fifth">
            Ger prequalified
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ExtraLinks;
