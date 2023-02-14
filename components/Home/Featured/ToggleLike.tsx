import Image from "next/image";
import React, { useState } from "react";
import { HeartIcon, HeartIconRed } from "../../ui/icons";

const ToggleLike = () => {
  const [liked, setLiked] = useState(false);
  return (
    <div>
      {!liked ? (
        <HeartIcon
          className="absolute top-[1rem] left-[1rem]"
          onClick={() => setLiked(!liked)}
        />
      ) : (
        <HeartIconRed
          className="absolute top-[1.2rem] left-[1.25rem]"
          onClick={() => setLiked(!liked)}
        />
      )}
    </div>
  );
};

export default ToggleLike;
