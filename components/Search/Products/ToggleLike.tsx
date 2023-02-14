import Image from "next/image";
import React, { useState } from "react";
import { HeartIcon, HeartIconRed } from "../../ui/icons";

const ToggleLike = () => {
  const [liked, setLiked] = useState(false);
  return (
    <div>
      {!liked ? (
        <HeartIcon
          className="absolute top-[1rem] left-[0.8rem] w-[1.26125rem]"
          onClick={() => setLiked(!liked)}
        />
      ) : (
        <HeartIconRed
          className="absolute top-[0.8rem] left-[0.9rem] w-[1.109375rem]"
          onClick={() => setLiked(!liked)}
        />
      )}
    </div>
  );
};

export default ToggleLike;
