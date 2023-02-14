import React from "react";

const HeartIconRed = ({ ...rest }) => {
  return (
    <svg
      {...rest}
      width="25"
      height="22"
      viewBox="0 0 25 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 6.87497C25 10.3812 22.9514 13.9791 18.912 17.577C17.0778 19.2095 15.0807 20.653 12.9514 21.8853C12.8131 21.9606 12.6578 22 12.5 22C12.3422 22 12.1869 21.9606 12.0486 21.8853C11.5509 21.6103 0 15.1135 0 6.87497C0 5.43204 0.458593 4.02568 1.31082 2.85511C2.16304 1.68453 3.3657 0.809098 4.74842 0.352801C6.13114 -0.103496 7.62383 -0.117519 9.01505 0.312718C10.4063 0.742955 11.6255 1.59564 12.5 2.74999C13.3745 1.59564 14.5937 0.742955 15.9849 0.312718C17.3762 -0.117519 18.8689 -0.103496 20.2516 0.352801C21.6343 0.809098 22.837 1.68453 23.6892 2.85511C24.5414 4.02568 25 5.43204 25 6.87497Z"
        fill="#D14532"
      />
    </svg>
  );
};

export default HeartIconRed;