import React from "react";

const SearchIcon = ({...rest}) => {
  return (
    <svg
      {...rest}
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5143 17.3L10.9143 11.7C10.4143 12.1 9.83926 12.4167 9.18926 12.65C8.53926 12.8833 7.84759 13 7.11426 13C5.29759 13 3.76026 12.371 2.50226 11.113C1.24359 9.85433 0.614258 8.31667 0.614258 6.5C0.614258 4.68333 1.24359 3.14567 2.50226 1.887C3.76026 0.629 5.29759 0 7.11426 0C8.93092 0 10.4686 0.629 11.7273 1.887C12.9853 3.14567 13.6143 4.68333 13.6143 6.5C13.6143 7.23333 13.4976 7.925 13.2643 8.575C13.0309 9.225 12.7143 9.8 12.3143 10.3L17.9393 15.925C18.1226 16.1083 18.2143 16.3333 18.2143 16.6C18.2143 16.8667 18.1143 17.1 17.9143 17.3C17.7309 17.4833 17.4976 17.575 17.2143 17.575C16.9309 17.575 16.6976 17.4833 16.5143 17.3ZM7.11426 11C8.36426 11 9.42692 10.5627 10.3023 9.688C11.1769 8.81267 11.6143 7.75 11.6143 6.5C11.6143 5.25 11.1769 4.18733 10.3023 3.312C9.42692 2.43733 8.36426 2 7.11426 2C5.86426 2 4.80159 2.43733 3.92626 3.312C3.05159 4.18733 2.61426 5.25 2.61426 6.5C2.61426 7.75 3.05159 8.81267 3.92626 9.688C4.80159 10.5627 5.86426 11 7.11426 11Z"
        fill="#081314"
        fillOpacity="0.6"
      />
    </svg>
  );
};

export default SearchIcon;