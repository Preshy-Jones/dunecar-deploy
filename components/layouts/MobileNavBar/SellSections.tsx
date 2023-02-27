import React from "react";
import { CaretLeftIcon } from "../../ui/icons";
import { PrimaryButton as Button } from "../../ui/others/Buttons";

interface Props {
  setToggledSection: (value: string) => void;
}

const SellSections: React.FC<Props> = ({ setToggledSection }) => {
  const handleClose = () => {
    setToggledSection("");
  };
  return (
    <div className="shadow-secondary">
      <div
        className="flex border-b-dividerGray border-b pb-[0.7rem]  items-center"
        onClick={handleClose}
      >
        <div className="px-6 flex items-center">
          <CaretLeftIcon className="mr-6" />
          <h1 className="leading-secondary text-secondary font-semibold">
            Buy
          </h1>
        </div>
      </div>

      <div className="px-6">
        <p className="leading-fifth text-tertiaryBlack font-medium mb-4 mt-7">
          Get an instant offer and a fast payment on handover day when you sell
          outright.
        </p>
        <Button>Sell My Car</Button>
        <div className="mb-6">
          <h1 className="text-primary font-extrabold leading-fourth mb-1">
            Get a Free Valuation
          </h1>
          <div className="bg-borderDark h-[1px] w-[full]"></div>
        </div>
        <div className="mb-7">
          <h1 className="text-secondary mb-1 tracking-[-0.01em] font-medium">
            Value my car
          </h1>
          <p className="tracking-[-0.01em] font-light text-black">
            Fill out some forms and find out how much your car is worth
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellSections;
