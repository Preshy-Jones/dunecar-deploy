import React from "react";
import SideBarContent from "./sideBarContent";

import Filter from "./Filter";

const SideBar = () => {
  return (
    <div className="  border-r-[0.1rem] border-r-borderMain font-robotoserif">
      <div>
        <div className="py-[1.5rem] px-[2rem] border-b border-b-borderMain">
          <h1 className="font-extrabold">Filters</h1>
        </div>
        <div >
          {SideBarContent.map((item, index) => (
            <Filter key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
