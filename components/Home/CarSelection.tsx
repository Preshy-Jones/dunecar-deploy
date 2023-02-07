import React from "react";

export const CarSelection = () => {
  return (
    <div className="mt-14 flex justify-center font-roboto mb-6">
      <div className="w-[80%]">
        <h1 className="font-extrabold text-[2rem] mb-8">
          Selection of our Cars
        </h1>
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-y-4">
            {content.map((item, index) => (
              <h2 key={index} className="text-[#D14532] text-[18px]">
                {item}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const content = [
  "Abarth",
  "Alfa Romeo",
  "Audi",
  "BMW",
  "Citroen",
  "Dacia",
  "DS",
  "Fiat",
  "Ford",
  "Honda",
  "Hyundai",
  "Jaguar",
  "Jeep",
  "Kia",
  "Land Rover",
  "Lexus",
  "Mazda",
  "Mercedes-Benz",
  "MG",
  "Mini",
  "Mitsubishi",
  "Nissan",
  "Peugeot",
  "Porsche",
  "Renault",
  "Seat",
  "Skoda",
  "Smart",
  "Subaru",
  "Suzuki",
  "Tesla",
  "Toyota",
  "Vauxhall",
  "Volkswagen",
  "Volvo",
];
