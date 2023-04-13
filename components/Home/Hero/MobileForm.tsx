import React from "react";
import { motion } from "framer-motion";
import { MultiMultiSelect, MultiSelect } from "../../ui/form";
import { AiOutlineSearch } from "react-icons/ai";
import Lottie from "lottie-react";
import { Option } from "../../../types/form";
import Loader from "../../../public/assets/Loader.json";

interface Props {
  makeOptionsPayload: Option[] | undefined;
  makeOptions: Option[] | undefined;
  makeToggled: boolean;
  makeCloseHandleOperation: (value: string[]) => void;
  makeOpenHandleOperation: () => void;
  modelToggled: boolean;
  modelCloseHandleOperation: (value: string[]) => void;
  modelOpenHandleOperation: () => void;
  modelOptions: any;
  modelsSelected: string[];
  setModelsSelected(selected: string[]): any;
  locationOptions: Option[] | undefined;
  handleSearchCars: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading: boolean;
  cars: any;
  count: number;
  selectedMakes: string[];
  setSelectedMakes(selected: string[]): any;
}

const MobileForm: React.FC<Props> = ({
  makeOptionsPayload,
  makeOptions,
  makeToggled,
  makeCloseHandleOperation,
  makeOpenHandleOperation,
  modelToggled,
  modelCloseHandleOperation,
  modelOpenHandleOperation,
  modelOptions,
  modelsSelected,
  setModelsSelected,
  locationOptions,
  handleSearchCars,
  cars,
  isLoading,
  count,
  selectedMakes,
  setSelectedMakes,
}) => {
  const [active, setActive] = React.useState(0);
  return (
    <div className="absolute top-[19.5rem]  flex justify-center w-full lg:hidden ">
      <div className="bg-white px-4 pt-4 pb-8 shadow-card rounded-[4px] w-[89.33%]">
        <div className="flex mb-4 border-b border-b-[#D1D1D1]">
          <div
            className="px-9 pb-3 cursor-pointer"
            onClick={() => setActive(0)}
          >
            <h2 className="text-[1.125rem] font-bold">Buy a Car</h2>
          </div>
          <div
            className="px-9 pb-3 cursor-pointer"
            onClick={() => setActive(1)}
          >
            <h2 className="text-[1.125rem]">Sell a Car</h2>
          </div>
        </div>
        <motion.div
          animate={{ x: active === 1 ? 160 : 0 }}
          transition={{ type: "tween" }}
          className="h-[2px] bg-red-700 w-[50%] relative bottom-[1.1rem] rounded-md"
        ></motion.div>
        {active === 0 ? (
          <div>
            <div className="mb-3">
              <MultiSelect
                placeHolder="Select Make"
                payloadOptions={makeOptionsPayload}
                options={makeOptions}
                isDisabled={!makeToggled}
                handleCloseOperation={makeCloseHandleOperation}
                handleOpenOperation={makeOpenHandleOperation}
                selected={selectedMakes}
                setSelected={setSelectedMakes}
              />
            </div>
            <div className="mb-3">
              <MultiMultiSelect
                placeHolder="Select Model"
                isDisabled={!modelToggled}
                fieldOptions={modelOptions}
                selected={modelsSelected}
                setSelected={setModelsSelected}
                handleCloseOperation={modelCloseHandleOperation}
                handleOpenOperation={modelOpenHandleOperation}
              />
            </div>
            <div className="mb-6">
              <MultiSelect
                placeHolder="Select Loction"
                payloadOptions={locationOptions}
                options={locationOptions}
                isDisabled={!makeToggled}
                handleCloseOperation={makeCloseHandleOperation}
                handleOpenOperation={makeOpenHandleOperation}
                selected={selectedMakes}
                setSelected={setSelectedMakes}
              />
            </div>
            <button
              onClick={handleSearchCars}
              className="bg-specialRed w-full text-white font-semibold rounded-[4px] flex items-center justify-center h-[3rem]"
            >
              {!isLoading ? (
                <div className="flex items-center justify-center">
                  <AiOutlineSearch className="mr-3 text-[1.5rem]" />
                  Search all {count} cars
                </div>
              ) : (
                <Lottie animationData={Loader} />
              )}
            </button>
          </div>
        ) : (
          <div>
            <p className="mb-[1.1rem] mt-2 text-lg leading-[1.9375rem] font-light text-black tracking-[-0.01em]">
              Get an instant offer and a fast payment on handover day when you
              sell outright.
            </p>
            <button className="bg-black text-white h-[48px] px-4 rounded-[4px] w-full">
              Start Valuation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileForm;
