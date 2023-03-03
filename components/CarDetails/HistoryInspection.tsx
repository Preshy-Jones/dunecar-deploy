import React from "react";
import { AlertIcon, CheckIcon, TickIcon } from "../ui/icons";

const HistoryInspection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[85.1267992%]">
        <h2>This Car is Dune Certified</h2>
        <div className="flex justify">
          <div>
            <h2>History</h2>
            <p>
              Access details like number of previous owners, reported accidents
              and more in your free AutoCheck® vehicle history report.
            </p>
            <div>
              <div className="flex justify-between">
                <div>
                  <TickIcon />
                  <h3>Owner</h3>
                </div>
                <AlertIcon />
              </div>
            </div>
          </div>
          <div>
            <h2>History</h2>
            <p>
              Access details like number of previous owners, reported accidents
              and more in your free AutoCheck® vehicle history report.
            </p>
            <div>
              <div className="flex justify-between">
                <div>
                  <TickIcon />
                  <h3>Owner</h3>
                </div>
                <AlertIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryInspection;
