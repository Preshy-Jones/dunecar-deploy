import React from "react";

const DotLoader = () => {
  return (
    <svg
      width="24"
      height="16"
      viewBox="0 0 24 16"
      aria-label="Loading"
      className="sc-1ludawb-0 text-white"
      fill="white"
    >
      <circle cx="4" cy="8" r="3"></circle>
      <circle cx="12" cy="8" r="3" opacity="0.4"></circle>
      <circle cx="20" cy="8" r="3" opacity="0.3"></circle>
    </svg>
  );
};

export default DotLoader;
