import React from "react";

const SlideCaretRightIcon = ({
  colour,
  className,
  onClick,
  ...rest
}: {
  colour?: string;
  className?: string;
  onClick?: () => void;
  rest?: any;
}) => {
  return (
    <svg
      {...rest}
      viewBox="0 0 15 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.61999 0.00587034L14.0527 11.4386L2.61999 22.8714L0.590673 20.8421L9.99411 11.4386L0.590673 2.03518L2.61999 0.00587034Z"
        fill={colour ? colour : "white"}
      />
    </svg>
  );
};

export default SlideCaretRightIcon;
