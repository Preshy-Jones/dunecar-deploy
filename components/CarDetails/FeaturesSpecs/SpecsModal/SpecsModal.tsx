import React from "react";
import useClickOutside from "../../../../hooks/ClickOutside";
import { AlertIcon, CancelIcon, PlayIcon } from "../../../ui/icons";
import { motion } from "framer-motion";
import Features from "./Features";
import Specifications from "./Specifications";

const SpecsModal = ({ setOpen }) => {
  const [tab, setTab] = React.useState("features");
  const handleCloseModal = () => {
    console.log("hello there man");
    setOpen(false);
  };
  let { domNode1, domNode2 } = useClickOutside(() => {
    setOpen(false);
  });
  const [active, setActive] = React.useState(0);
  const handleTabChange = (tab) => {
    if (tab === "features") {
      setActive(0);
      setTab("features");
    } else {
      setActive(1);
      setTab("specifications");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="fixed flex z-50 top-0 right-0 left-0 bottom-0 justify-center items-center">
        <motion.div
          // initial={{ opacity: 0, y: 700 }}
          // animate={{ opacity: 1, y: 0 }}`
          ref={domNode1}
          className="bg-white w-[61.111111111vw] h-[44rem] px-[2rem] py-[2rem] overflow-y-scroll"
        >
          <div className="flex justify-between">
            <div>
              <div className="flex text-secondaryBlack leading-primary font-light cursor-pointer border-b-[0.5px]  border-borderLight">
                <div
                  className="px-8 pb-4"
                  onClick={() => handleTabChange("features")}
                >
                  <h2>Features</h2>
                </div>
                <div
                  className="px-8 pb-4 cursor-pointer"
                  onClick={() => handleTabChange("specifications")}
                >
                  <h2>Specifications</h2>
                </div>
              </div>
              <motion.div
                animate={{ x: active === 1 ? "100%" : 0 }}
                transition={{ type: "tween", duration: 0.4 }}
                className="h-[3px] bg-specialRed w-[50%] bottom-0.5 relative rounded-md"
              ></motion.div>
            </div>

            <div onClick={() => setOpen(false)} className="cursor-pointer">
              <CancelIcon />
            </div>
          </div>
          {content[tab].component}
        </motion.div>
      </div>

      <div className="bg-black bg-opacity-[47%] fixed top-0 right-0 left-0 bottom-0 z-40"></div>
    </motion.div>
  );
};

export default SpecsModal;

const content = {
  features: {
    component: <Features />,
  },
  specifications: {
    component: <Specifications />,
  },
};
