import React from "react";

const Test = () => {
  const [appRenderIndex, setAppRenderIndex] = React.useState(0);
  const [colour, setColour] = React.useState("red");
  console.log("App rendered", appRenderIndex);

  return (
    <div>
      <h1>hello</h1>

      <button
        className="bg-black text-white rounded-md px-2"
        onClick={() => setAppRenderIndex(appRenderIndex + 1)}
      >
        Re-Render App
      </button>
      <div>
        <MemoedSwatch colour={colour} />
      </div>
    </div>
  );
};

const Swatch = ({ colour }) => {
  console.log("Swatch rendered");
  return <div className={`h-[5rem] w-[5rem] bg-${colour}-500`}></div>;
};

const MemoedSwatch = React.memo(Swatch);
export default Test;
