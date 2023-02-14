import React from "react";
import { motion } from "framer-motion";
import {
  BsArrowBarLeft,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
const animate = () => {
  const list = { hidden: { opacity: 0 } };
  const item = { hidden: { x: -10, opacity: 0 } };

  const [open, setOpen] = React.useState(false);
  const [move, setMove] = React.useState(false);
  return (
    <div>
      {/* <motion.div
        animate={{ x: 100 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      >
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
      </motion.div>
      <motion.ul animate="hidden" variants={list}>
        <motion.li variants={item}>Item 1</motion.li>
        <motion.li variants={item}>Item 2</motion.li>
        <motion.li variants={item}>Item 3</motion.li>
      </motion.ul> */}
      {/* <div className="flex justify-center items-center w-[100vw] h-[100vh]">
        <div>
          <div className="flex justify-between mb-5 text-specialRed text-[3rem]">
            <BsFillArrowLeftCircleFill onClick={() => setMove(false)} />
            <BsFillArrowRightCircleFill onClick={() => setMove(true)} />
          </div>
          <div className="relative">
            <div className="h-[2px] bg-gray-400 w-[10rem]"></div>
            <motion.div
              animate={{ x: move ? 80 : 0 }}
              className="h-[4px] bg-red-700 w-[5rem] relative bottom-[0.2rem] rounded-md"
            ></motion.div>
          </div>
          <motion.div
            className="h-[5rem] w-[5rem] bg-specialRed"
            animate={{ x: 100, scale: 1 }}
            initial={{ x: 0, scale: 0 }}
          ></motion.div>
        </div>
      </div> */}
      <div className="h-[100vh] w-[100vw] flex justify-center items-center">
        <div>
          <button className="cursor-pointer" onClick={() => setOpen(!open)}>
            Open
          </button>
          {open && <Modal close={setOpen} />}
        </div>
      </div>
    </div>
  );
};

export default animate;

const Modal = ({ close }) => {
  return (
    <div
      className="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-20"
      onClick={close()}
    >
      <div
        className="absolute top-[5rem] bg-red-500 z-30 w-[10rem] h-[20rem] bg-opacity-10 flex justify-center"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <h1 className="text-black">hello</h1>
      </div>
    </div>
  );
};
