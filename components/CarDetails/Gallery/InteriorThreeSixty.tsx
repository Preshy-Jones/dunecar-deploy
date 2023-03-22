import React from "react";
import dynamic from "next/dynamic";

const ExteriorThreeSixty = () => {
  const basePath = "https://fastly-production.24c.in/webin/360";
  return (
    <div className="font-roboto">
      <div className=" fixed top-0 left-0 right-0 bottom-0 h-[100vh] w-[100vw] z-50">
        <div>
          <ReactPhotoSphereViewer
            src="https://res.cloudinary.com/xxolcare/image/upload/v1679435104/photo_2023-03-21_22-43-23_uhrmhm.jpg"
            height={"100vh"}
            width={"100%"}
            container={"#container"}
          ></ReactPhotoSphereViewer>
        </div>
      </div>
    </div>
  );
};

export default ExteriorThreeSixty;

const ReactPhotoSphereViewer = dynamic(
  () =>
    import("react-photo-sphere-viewer").then(
      (mod) => mod.ReactPhotoSphereViewer
    ),
  {
    ssr: false,
  }
);