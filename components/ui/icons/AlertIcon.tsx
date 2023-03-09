import React from "react";

const AlertIcon = ({ type }: { type?: string }) => {
  return <div>{type === "outlined" ? <OutLined /> : <Filled />}</div>;
};

export default AlertIcon;

const OutLined = () => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.50008 12.6667C8.73619 12.6667 8.93425 12.5867 9.09425 12.4267C9.25369 12.2673 9.33341 12.0695 9.33341 11.8334V8.47925C9.33341 8.24314 9.25369 8.04869 9.09425 7.89591C8.93425 7.74314 8.73619 7.66675 8.50008 7.66675C8.26397 7.66675 8.06619 7.74647 7.90675 7.90591C7.74675 8.06591 7.66675 8.26397 7.66675 8.50008V11.8542C7.66675 12.0904 7.74675 12.2848 7.90675 12.4376C8.06619 12.5904 8.26397 12.6667 8.50008 12.6667ZM8.50008 6.00008C8.73619 6.00008 8.93425 5.92008 9.09425 5.76008C9.25369 5.60064 9.33341 5.40286 9.33341 5.16675C9.33341 4.93064 9.25369 4.73258 9.09425 4.57258C8.93425 4.41314 8.73619 4.33341 8.50008 4.33341C8.26397 4.33341 8.06619 4.41314 7.90675 4.57258C7.74675 4.73258 7.66675 4.93064 7.66675 5.16675C7.66675 5.40286 7.74675 5.60064 7.90675 5.76008C8.06619 5.92008 8.26397 6.00008 8.50008 6.00008ZM8.50008 16.8334C7.3473 16.8334 6.26397 16.6145 5.25008 16.1767C4.23619 15.7395 3.35425 15.1459 2.60425 14.3959C1.85425 13.6459 1.26064 12.764 0.823415 11.7501C0.385637 10.7362 0.166748 9.65286 0.166748 8.50008C0.166748 7.3473 0.385637 6.26397 0.823415 5.25008C1.26064 4.23619 1.85425 3.35425 2.60425 2.60425C3.35425 1.85425 4.23619 1.26036 5.25008 0.822581C6.26397 0.385359 7.3473 0.166748 8.50008 0.166748C9.65286 0.166748 10.7362 0.385359 11.7501 0.822581C12.764 1.26036 13.6459 1.85425 14.3959 2.60425C15.1459 3.35425 15.7395 4.23619 16.1767 5.25008C16.6145 6.26397 16.8334 7.3473 16.8334 8.50008C16.8334 9.65286 16.6145 10.7362 16.1767 11.7501C15.7395 12.764 15.1459 13.6459 14.3959 14.3959C13.6459 15.1459 12.764 15.7395 11.7501 16.1767C10.7362 16.6145 9.65286 16.8334 8.50008 16.8334ZM8.50008 15.1667C10.3473 15.1667 11.9204 14.5176 13.2192 13.2192C14.5176 11.9204 15.1667 10.3473 15.1667 8.50008C15.1667 6.65286 14.5176 5.0798 13.2192 3.78091C11.9204 2.48258 10.3473 1.83341 8.50008 1.83341C6.65286 1.83341 5.08008 2.48258 3.78175 3.78091C2.48286 5.0798 1.83341 6.65286 1.83341 8.50008C1.83341 10.3473 2.48286 11.9204 3.78175 13.2192C5.08008 14.5176 6.65286 15.1667 8.50008 15.1667Z"
        fill="#D14532"
      />
    </svg>
  );
};

const Filled = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 15C10.2833 15 10.521 14.904 10.713 14.712C10.9043 14.5207 11 14.2833 11 14V9.975C11 9.69167 10.9043 9.45833 10.713 9.275C10.521 9.09167 10.2833 9 10 9C9.71667 9 9.47933 9.09567 9.288 9.287C9.096 9.479 9 9.71667 9 10V14.025C9 14.3083 9.096 14.5417 9.288 14.725C9.47933 14.9083 9.71667 15 10 15ZM10 7C10.2833 7 10.521 6.904 10.713 6.712C10.9043 6.52067 11 6.28333 11 6C11 5.71667 10.9043 5.479 10.713 5.287C10.521 5.09567 10.2833 5 10 5C9.71667 5 9.47933 5.09567 9.288 5.287C9.096 5.479 9 5.71667 9 6C9 6.28333 9.096 6.52067 9.288 6.712C9.47933 6.904 9.71667 7 10 7ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20Z"
        fill="#D14532"
      />
    </svg>
  );
};