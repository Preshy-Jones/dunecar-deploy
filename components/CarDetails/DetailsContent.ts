import moment from "moment";

export const specsData = [
  {
    title: "Reg date",
    value: "May 2016",
    keyFunc: (payload) => {
      return moment(payload?.registration?.date).format("MMM YYYY");
    },
  },
  {
    title: "Transmission",
    value: "Manual",
    keyFunc: (payload) => {
      return payload?.transmission?.type;
    },
  },
  {
    title: "Mileage",
    value: "50,715 miles",
    keyFunc: (payload) => {
      return payload?.mileage;
    },
  },
  {
    title: "Seats",
    value: "5",
    keyFunc: (payload) => {
      return payload?.seats;
    },
  },
  {
    title: "Engine",
    value: "1.2L",
    keyFunc: (payload) => {
      return `${payload?.engine?.value} ${payload?.engine?.unit}`;
    },
  },
  {
    title: "Body type",
    value: "5 door Hatchback",
    keyFunc: (payload) => {
      return payload?.body_type?.title;
    },
  },
  {
    title: "Exterior colour",
    value: "Blue",
    keyFunc: (payload) => {
      return payload?.exterior_color;
    },
  },
  {
    title: "Drive type",
    value: "Front wheel drive",
    keyFunc: (payload) => {
      return payload?.drive_type?.title;
    },
  },
  {
    title: "Registration number",
    value: "NA16 VTP",
    keyFunc: (payload) => {
      return payload?.registration?.registration_number;
    },
  },
  {
    title: "Previous owners",
    value: "1",
    keyFunc: (payload) => {
      return payload?.previous_owners;
    },
  },
  {
    title: "Number of keys",
    value: "1",
    keyFunc: (payload) => {
      return payload?.number_of_keys;
    },
  },
];
