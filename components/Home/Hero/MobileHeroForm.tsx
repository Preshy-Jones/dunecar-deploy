import React from 'react'

const MobileHeroForm = () => {
  return (
    <div className="absolute top-[19.5rem]  flex justify-center w-full md:hidden ">
    <div className="bg-white px-4 pt-4 pb-8 shadow-card rounded-[4px]">
      <div className="flex mb-4">
        <div className="px-9 border-b border-b-[#D1D1D1] pb-3 ">
          <h2 className="text-[1.125rem] font-bold">Buy a Car</h2>
        </div>
        <div className="px-9 border-b border-b-[#D1D1D1] pb-3">
          <h2 className="text-[1.125rem]">Sell a Car</h2>
        </div>
      </div>
      <div className="mb-3">
        <MultiSelect />
      </div>
      <div className="mb-3">
        <MultiSelect />
      </div>
      <div className="mb-6">
        <MultiSelect />
      </div>
      <button className="bg-specialRed w-full text-white font-semibold rounded-[4px] flex items-center justify-center h-[3rem]">
        <AiOutlineSearch className="mr-3 text-[1.5rem]" />
        Search all 22 cars
      </button>
    </div>
  </div>
  )
}

export default MobileHeroForm