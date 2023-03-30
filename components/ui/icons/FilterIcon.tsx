import React from "react";

const FilterIcon = ({ width, height, ...rest }) => {
  return (
    <svg
      {...rest}
      width={width}
      height={height}
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 12H11V10H7V12ZM0 0V2H18V0H0ZM3 7H15V5H3V7Z" fill="#081314" />
    </svg>
  );
};

export default FilterIcon;
