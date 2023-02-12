import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MultiMultiSelect, MultiSelect } from '../../ui/form'

const DesktopHeroForm = () => {
  return (
    <div className="absolute top-[21rem]  md:flex justify-center w-full hidden h-[13.25rem] ">
    <div className="  md:flex justify-center w-[70.97%] ">
      <div className="flex bg-white p-6 rounded-[3px] shadow-bigCard">
        <div className="flex-4 mr-8">
          <h2 className="font-bold text text-[1.5rem] leading-[1.75rem] mb-4">
            Buy car
          </h2>
          <div className="flex  relative bottom-[10rem] justify-between mb-6">
            <MultiSelect
              placeHolder="Select Make"
              options={makeOptions}
              handleOperation={makeHandleOperation}
            />
            <MultiMultiSelect
              placeHolder="Select Model"
              isDisabled={!modelToggled}
              fieldOptions={modelOptions}
              handleOperation={modelHandleOperation}
            />
            <MultiSelect
              placeHolder="Select Location"
              handleOperation={locationHandleOperation}
            />
          </div>
          <button
            className={`${
              filterTotal === 0 ? "" : "relative bottom-[17.35rem]"
            } bg-specialRed w-full text-white font-semibold rounded-[4px] flex items-center justify-center h-[3rem]`}
          >
            <AiOutlineSearch className="mr-3 text-[1.5rem]" />
            Search all {cars.length} cars
          </button>
        </div>
        <div className="flex-2 text-[#212121] ">
          <h2 className="font-bold text text-[1.5rem] leading-[1.75rem] tracking-[-0.01em]">
            Sell car
          </h2>
          <p className="mb-[1.1rem] mt-2 text-lg leading-[1.9375rem] font-light text-black tracking-[-0.01em]">
            Get an instant offer and a fast payment on handover day when
            you sell outright.
          </p>
          <button className="bg-black text-white h-[48px] px-4 rounded-[4px] w-[12.1875rem]">
            Start Valuation
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DesktopHeroForm