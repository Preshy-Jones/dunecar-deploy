import React from "react";
import threeSSixtyPanoramaImage from "../public/assets/threesixty.jpg";
import dynamic from "next/dynamic";
import ReactPannellum, { getConfig } from "react-pannellum";

const ThreesixtyPage = () => {
  const config = {
    autoRotate: -2,
  };
  const basePath = "https://fastly-production.24c.in/webin/360";
  return (
    <div className="relative">
      <div className="bg-black">

          <ThreeSixty
          // @ts-ignore
            amount={75}
            imagePath={basePath}
            fileName="output_{index}.jpeg"
          />

      </div>

      {/* <ReactPhotoSphereViewer
        src="https://res.cloudinary.com/xxolcare/image/upload/v1678889232/threesixty_lijzkq.jpg"
        height={"100vh"}
        width={"100%"}
        container={"#container"}
      ></ReactPhotoSphereViewer> */}
      {/* <div className="bg-red-500 absolute top-0">
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
      </div> */}
      {/* <ReactPannellum
        id="1"
        sceneId="firstScene"
        imageSource="https://res.cloudinary.com/xxolcare/image/upload/v1678889232/threesixty_lijzkq.jpg"
        // config={config}
      /> */}
      {/* <div onClick={this.click}>Click me</div> */}
    </div>
  );
};

export default ThreesixtyPage;

const ThreeSixty = dynamic(() => import("react-360-view"), {
  ssr: false,
});

const ReactPhotoSphereViewer = dynamic(
  () =>
    import("react-photo-sphere-viewer").then(
      (mod) => mod.ReactPhotoSphereViewer
    ),
  {
    ssr: false,
  }
);

// {
//   <ThreeSixty
//     amount={36}
//     imagePath={threeSSixtyPanoramaImage}
//     fileName="chair_{index}.jpg?v1"
//   />;
// }

// const Panellum360 = () => {
//   const [yaw, setYaw] = useState(0);
//   const [pitch, setPitch] = useState(0);
//   const panImage: any = useRef(null);
//   return (
//     <>
//       <div> Pitch: {pitch} </div>
//       <div> Yaw: {yaw} </div>
//       <Pannellum
//         width="100%"
//         height="500px"
//         image="https://i2.wp.com/www.samrohn.com/wp-content/uploads/le-meridien-bedroom-panorama.jpg?resize=1200%2C600"
//         pitch={10}
//         yaw={180}
//         hfov={110}
//         autoLoad
//         showZoomCtrl={false}
//         onMouseup={(event: any) => {
//           setPitch(panImage.current.getViewer().mouseEventToCoords(event)[0]);
//           setYaw(panImage.current.getViewer().mouseEventToCoords(event)[1]);
//         }}
//       >
//         <Pannellum.Hotspot
//           type="custom"
//           pitch={12.41}
//           yaw={117.76}
//           handleClick={(evt: any, name: any) => console.log(name)}
//           name="image info"
//         />
//       </Pannellum>
//     </>
//   );
// };
