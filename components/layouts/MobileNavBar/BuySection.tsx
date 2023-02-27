import React from "react";
import { CaretLeftIcon } from "../../ui/icons";
import { PrimaryButton as Button } from "../../ui/others/Buttons";

interface Props {
  setToggledSection: (value: string) => void;
}

const BuySection: React.FC<Props> = ({ setToggledSection }) => {
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
          <h1 className="leading-secondary text-secondary font-semibold">Buy</h1>
        </div>
      </div>

      <div className="px-6">
        <p className="leading-fifth text-tertiaryBlack font-medium mb-4 mt-7">
          With over 250 makes and models, finding your next car is easy.
        </p>
        <Button>Search Cars</Button>
        <div className="mb-6">
          <h1 className="text-primary font-extrabold leading-fourth mb-1">
            Get Started
          </h1>
          <div className="bg-borderDark h-[1px] w-[full]"></div>
        </div>
        <div className="mb-7">
          <h1 className="text-secondary mb-1 tracking-[-0.01em] font-medium">
            How It Works
          </h1>
          <p className="tracking-[-0.01em] font-light text-black">
            Everything you need to know about buying a car.
          </p>
        </div>
        <div className="mb-7">
          <h1 className="text-secondary mb-1 tracking-[-0.01em] font-medium">
            Car Reviews
          </h1>
          <p className="tracking-[-0.01em] font-light text-black">
            Hundreds of expert reviews to help you find your perfect car.
          </p>
        </div>
        <div className="mb-7">
          <h1 className="text-secondary mb-1 tracking-[-0.01em] font-medium">
            Receiving your car
          </h1>
          <p className="tracking-[-0.01em] font-light text-black">
            What to expect when you collect your car or have it delivered.
          </p>
        </div>
        <div className="px-2">
          <h1 className="font-extrabold mb-4 text-primary leading-fourth">
            Search by Popular Make
          </h1>
          <div className="bg-borderDark h-[1px] w-[full]"></div>
        </div>
        <div className=" grid grid-cols-2 px-2 py-5">
          <h2 className="leading-fifth text-black">Audi</h2>
          <h2 className="leading-fifth text-black">Toyota</h2>
        </div>
      </div>
    </div>
  );
};

export default BuySection;
