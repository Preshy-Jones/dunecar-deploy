import React, { useEffect, useState } from "react";
import { getMakes } from "../../../../features/make/makeSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";

const MakeFilter = () => {

  let { makes } = useAppSelector((state) => state.make);

  let makeOptions = makes.map((make) => ({
    value: make.slug,
    label: make.title,
  }));

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMakes());
    // console.log(modelOptions);
  }, [dispatch]);

  const [selected, setSelected] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    if (selected.includes(e.target.value)) {
      setSelected(selected.filter((item) => item !== e.target.value));
    } else {
      setSelected([...selected, e.target.value]);
    }
    console.log(selected);
  };
  return (
    <div className="px-6">
      <div>
        {makeOptions?.map((item, index) => (
          <div key={index} className="flex items-center mt-5">
            <input
              type="checkbox"
              className="border-specialRed border rounded-sm w-[1.5rem] h-[1.5rem]  mr-3 text-specialRed focus:outline-none focus:shadow-outline-specialRed focus:ring-0"
              value={item.value}
              name="make"
              checked={selected.includes(item.value)}
              onChange={handleChange}
            />
            <label
              className="leading-primary text-secondary text-lighterDark font-normal"
              style={{ marginLeft: "5px" }}
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MakeFilter;
