/* eslint-disable react/prop-types */
import React from "react";

export const Select = ({ id, type, name, children, ...props }) => {
  return (
    <select
      className="bg-fill border-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full appearance-none rounded cursor-text text-input py-2 px-4 text-sm"
      id={id}
      name={name}
    >
      {children}
    </select>
  );
};
