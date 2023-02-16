import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Hello = () => {
  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {
    console.log(pid);
  }, []);

  return (
    <div>
      <h1>{pid}</h1>
    </div>
  );
};

export default Hello;
