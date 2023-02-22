import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../public/assets/logo.svg";

const NavBar = () => {
  const [dropDownOpen, setDropDownOpen] = React.useState(false);

  const onMouseEnter = (name) => {
    // const test2 = Object.keys(dropdown)[0]
    if (window.innerWidth < 773) {
      setDropDownOpen(true);
    } else {
      setDropDownOpen(true);
    }
  };

  const onMouseLeave = (name) => {
    if (window.innerWidth < 773) {
      setDropDownOpen(false);
    } else {
      setDropDownOpen(false);
    }
  };

  return (
    <div className="py-5 px-[7.5rem] font-roboto w-full z-40 bg-white top-0 sticky hidden md:block">
      <div className="relative">
        <div className="flex justify-between relative items-center ">
          <div className="flex-3">
            <Link href="/">
              <Image src={Logo} alt="logo" className="cursor-pointer" />
            </Link>
          </div>
          <div className="flex-4">
            <ul className="flex justify-around ">
              <li
                className="font-medium text-[#081314]"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                Buy
              </li>
              <li className="font-medium text-[#081314]">Sell</li>
              <li className="font-medium text-[#081314]">Finance</li>
              <li className="font-medium text-[#081314]">About</li>
            </ul>
          </div>
          <div className="flex flex-3 justify-end">
            <button className="bg-specialRed text-white font-medium tracking-[-0.01em] leading-[1.1875rem] px-4 py-1 rounded-[3px] h-[2.4375rem] w-[6.4375rem]">
              Sign Up
            </button>
          </div>
        </div>
        {dropDownOpen && (
          <div className="text-tertiaryBlack absolute top-3 flex justify-center w-full">
            <div className=" bg-white w-[55.1388889vw] flex justify-center rounded-[8px] py-[2rem] shadow-secondary mt-10">
              <div className="flex w-[95%] justify-between">
                <div className="flex-1 mr-[3rem]">
                  <p className="leading-fifth text-tertiaryBlack font-medium mb-4">
                    With over 250 makes and models, finding your next car is
                    easy.
                  </p>
                  <button className=" bg-black text-white h-[48px] px-4 rounded-[4px] w-[12.1875rem] mb-7">
                    Search Cars
                  </button>
                  <div className="mb-4">
                    <h1 className="text-primary font-extrabold leading-fourth mb-1">
                      Get Started
                    </h1>
                    <div className="bg-borderDark h-[1px] w-[7.125rem]"></div>
                  </div>
                  <div className="mb-6">
                    <h1 className="text-secondary mb-1 tracking-[-0.01em] font-medium">
                      How It Works
                    </h1>
                    <p className="tracking-[-0.01em] font-light text-black">
                      Everything you need to know about buying a car.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h1 className="text-secondary mb-1 tracking-[-0.01em] font-medium">
                      Car Reviews
                    </h1>
                    <p className="tracking-[-0.01em] font-light text-black">
                      Hundreds of expert reviews to help you find your perfect
                      car.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h1 className="text-secondary mb-1 tracking-[-0.01em] font-medium">
                      Receiving your car
                    </h1>
                    <p className="tracking-[-0.01em] font-light text-black">
                      What to expect when you collect your car or have it
                      delivered.
                    </p>
                  </div>
                </div>
                <div className="flex-1 mt-2">
                  <div className="mb-8">
                    <h1 className="font-extrabold mb-4 text-primary leading-fourth">
                      Search by Popular Make
                    </h1>
                    <div className="grid grid-cols-3 gap-y-5">
                      {content.byPopularMake.map((item, index) => (
                        <h2 className="leading-fifth text-black" key={index}>
                          {item}
                        </h2>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h1 className="font-extrabold mb-4 text-primary leading-fourth">
                      Search by Popular Model
                    </h1>
                    <div className="grid grid-cols-3 gap-y-5">
                      {content.byPopularMake.map((item, index) => (
                        <h2 className="leading-fifth text-black" key={index}>
                          {item}
                        </h2>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

const content = {
  byPopularMake: [
    "Audi",
    "BMW",
    "Citroen",
    "Fiat",
    "Ford",
    "Honda",
    "Hyundai",
    "Jaguar",
    "Jeep",
    "Kia",
    "Land Rover",
    "Mazda",
  ],

  byPopularModel: [
    "Audi",
    "BMW",
    "Citroen",
    "Fiat",
    "Ford",
    "Honda",
    "Hyundai",
    "Jaguar",
    "Jeep",
    "Kia",
    "Land Rover",
    "Mazda",
  ],
};
