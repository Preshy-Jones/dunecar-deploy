import React from "react";
import { AlertIcon, CheckIcon, TickIcon } from "../ui/icons";

const HistoryInspection = () => {
  return (
    <div className="flex justify-center bg-[#F5F6F7] py-[2rem] mt-[6rem]">
      <div className="w-[85.1267992%]">
        <h2 className="font-extrabold text-thirdBlack text-[2rem] leading-[2.375rem]">
          This Car is Dune Certified
        </h2>
        <div className=" mt-[2rem]">
          <div className="flex w-full">
            <h2 className="text-[1.5625rem] text-fourthBlack leading-[1.8125rem] w-[50%] font-semibold">
              History
            </h2>
            <h2 className="text-[1.5625rem] text-fourthBlack leading-[1.8125rem] w-[50%] font-semibold">
              Inspection
            </h2>
          </div>
          <div className="flex">
            <p className="font-light leading-fifth text-secondaryBlack mt-[0.5rem] w-[50%]">
              Access details like number of previous owners, reported accidents
              and more in your free AutoCheck® vehicle history report.
            </p>
            <p className="font-light leading-fifth text-secondaryBlack mt-[0.5rem] w-[50%]">
              Every car we sell undergoes a 125-point inspection and
              reconditioning process to meet Dune Certified standards. Anything
              that doesn’t meet our standards is repaired or replaced by our
              highly trained technicians.
            </p>
          </div>
          <div className="flex">
            <div className="mr-4 flex-1">
              <div className="border border-dividerGray rounded-[9px] mt-[2rem]">
                <div className="flex justify-between items-center border border-b border-dividerGray h-[3.3125rem] px-4">
                  <div className="flex items-center">
                    <TickIcon />
                    <h3 className="text-secondaryBlack font-light leading-fifth ml-3">
                      1 Owner
                    </h3>
                  </div>
                  <AlertIcon type="outlined" />
                </div>
                <div className="flex justify-between items-center border border-b border-dividerGray h-[3.3125rem] px-4">
                  <div className="flex items-center">
                    <TickIcon />
                    <h3 className="text-secondaryBlack font-light leading-fifth ml-3">
                      No flood or frame damage
                    </h3>
                  </div>
                  <AlertIcon type="outlined" />
                </div>
                <div className="flex justify-between items-center h-[3.3125rem] px-4">
                  <div className="flex items-center">
                    <TickIcon />
                    <h3 className="text-secondaryBlack font-light leading-fifth ml-3">
                      No odometer problems
                    </h3>
                  </div>
                  <AlertIcon type="outlined" />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="border border-dividerGray rounded-[9px] mt-[2rem]">
                <div className="flex justify-between items-center border border-b border-dividerGray h-[3.3125rem] px-4">
                  <div className="flex items-center">
                    <TickIcon />
                    <h3 className="text-secondaryBlack font-light leading-fifth ml-3">
                      No major dents or dings
                    </h3>
                  </div>
                  <AlertIcon type="outlined" />
                </div>
                <div className="flex justify-between items-center border border-b border-dividerGray h-[3.3125rem] px-4">
                  <div className="flex items-center">
                    <TickIcon />
                    <h3 className="text-secondaryBlack font-light leading-fifth ml-3">
                      Tires & wheels checked 15 ways
                    </h3>
                  </div>
                  <AlertIcon type="outlined" />
                </div>
                <div className="flex justify-between items-center h-[3.3125rem] px-4">
                  <div className="flex items-center">
                    <TickIcon />
                    <h3 className="text-secondaryBlack font-light leading-fifth ml-3">
                      Deep cleaned Interior
                    </h3>
                  </div>
                  <AlertIcon type="outlined" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryInspection;
