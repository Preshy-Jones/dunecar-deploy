import Image from "next/image";
import React, { useState } from "react";
import { HeartIcon, HeartIconRed } from "../../ui/icons";

const ToggleLike = ({...rest}) => {
  const [liked, setLiked] = useState(false);
  return (
    <div
    {...rest}
    >
      {!liked ? (
        <HeartIcon
          color="#053361"
          className="  w-[1.26125rem]"
          onClick={() => setLiked(!liked)}
        />
      ) : (
        <HeartIconRed
          className=" w-[1.109375rem]"
          onClick={() => setLiked(!liked)}
        />
      )}
    </div>
  );
};

export default ToggleLike;
