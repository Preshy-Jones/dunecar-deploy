import React from "react";
import Select, { components, ValueContainerProps } from "react-select";
import options, { Option } from "./options";

const ValueContainer = ({
  children,
  ...props
}: ValueContainerProps<Option>) => {
  let [values, input] = children as any;

  if (Array.isArray(values)) {
    const plural = values.length === 1 ? "" : "s";
    values = `${values.length} item${plural} selected`;
  }

  return (
    <components.ValueContainer {...props}>
      {values}
      {input}
    </components.ValueContainer>
  );
};

export default function MySelect() {
  const [selected, setSelected] = React.useState<Option[]>([]);

  return (
    <Select
      value={selected}
      onChange={(s: any) => setSelected(s)}
      options={options}
      isMulti
      isSearchable
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      components={{
        ValueContainer
      }}
    />
  );
}
