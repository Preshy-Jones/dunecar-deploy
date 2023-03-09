export const specsData = [
  {
    title: "Reg date",
    value: "May 2016",
    keyFunc: (payload) => {
      return payload.registration.date;
    },
  },
  { title: "Transmmission", value: "Manual" },
  { title: "Mileage", value: "50,715 miles" },
  { title: "Seats", value: "5" },
  { title: "Engine", value: "1.2L" },
  { title: "Body type", value: "5 door Hatchback" },
  { title: "Exterior colour", value: "Blue" },
  { title: "Drive type", value: "Front wheel drive" },
  {
    title: "Registration number",
    value: "NA16 VTP",
    keyFunc: (payload) => {
      return payload.registration.registration_number;
    },
  },
  { title: "Previous owners", value: "1" },
  { title: "Number of keys", value: "1" },
];
