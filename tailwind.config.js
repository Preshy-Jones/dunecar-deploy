/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightDark: "rgba(33, 33, 33, 0.9)",
        lighterDark: "rgba(33, 33, 33, 0.8)",
        specialRed: "#D14532",
        specialBlack: "#081314",
        secondaryBlack: "#221121",
        tertiaryBlack: "#212121",
        thirdBlack: "#081314",
        fourthBlack: "rgba(8, 19, 20, 0.9)",
        specialGray: "#F0F1F2",
        pageBg: "#FAFAFA",
        pageBg2: "#F5F6F7",
        borderDark: "rgba(203, 203, 203, 0.5)",
        borderLight: "#D5D5D5",
        secondaryGray: "rgba(34, 17, 33, 0.7)",
        tertiaryGray: "rgba(34, 17, 33, 0.8)",
        dividerGray: "#D1D1D1",
        primaryGreen: "#16AB25",
        lightRed: "rgba(255, 222, 218, 0.37)",
        lighterRed: "#FFF3F2",
        btnGallery: "rgba(255, 255, 255, 0.68)",
        greyText:"rgba(255, 255, 255, 0.7)"
      },
      fontFamily: {
        body: ["Montserrat"],
        poppins: ["'Poppins', sans-serif"],
        sans2: ["roboto"],
        robotoserif: ["'Roboto Serif', serif"],
        roboto: ["'Roboto', sans-serif"],
        outfit: ["'Outfit', sans-serif"],
      },
      lineHeight: {
        primary: "1.1875rem",
        secondary: "2rem",
        tertiary: "1.4375rem",
        fourth: "1.625rem",
        fifth: "1.6875rem",
        sixth: "3.8125rem",
        seventh: "1.25rem",
        eighth: "1.75rem",
        ninth: "1.8125rem",
      },
      letterSpacing: {
        primary: "0.04em",
      },
      backgroundImage: {
        heroImage: "url('/assets/threesixty.jpg')",
      },
      fontSize: {
        primary: "1.375rem",
        secondary: "1.125rem",
        tertiary: "1.5rem",
        fourth: "1.5625rem",
        xxxs: ["0.5rem", { lineHeight: "0.7rem" }],
        xxs: ["0.625rem", { lineHeight: "0.9375rem" }],
        sme: ["0.875em", { lineHeight: "1.25em" }],
        md: ["0.875em", { lineHeight: "1.25em" }],
        "3.5xl": ["2rem", { lineHeight: "2rem" }],
        "1.5xl": ["1.3125rem", { lineHeight: "1.75rem" }],
        "6.5xl": ["4rem", { lineHeight: "6rem" }],
      },
      boxShadow: {
        primary: "0px 10px 46px rgba(190, 190, 190, 0.25)",
        primaryCard: "0px 0px 18px rgba(165, 165, 165, 0.25)",
        secondary: "0px 0px 79px rgba(203, 203, 203, 0.25)",
        card: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
        bigCard: "0px -1px 6px rgba(164, 164, 164, 0.25)",
        cardShadow:
          "rgb(0 0 0 / 16%) 0px 6px 12px 0px, rgb(202 202 202 / 26%) 0px 0px 6px 0px, rgb(202 202 202 / 16%) 0px -1px 4px 0px",
        cardShadow2: "0px 9px 20px rgba(216, 216, 216, 0.25)",
      },
      borderRadius: {
        primary: "1.875rem",
        secondary: "50%",
        tertiary: "0.25rem",
        lgx: "0.625rem",
        third: "0.3125rem",
      },
      inset: {
        primary: "-4.5rem",
      },
      spacing: {
        1.3: "0.3rem",
        1.4: "0.3125",
        2.3: "0.60rem",
        2.7: "0.677rem",
        3.1: "0.75em",
        3.2: "0.9375",
        7.2: "1.8rem",
        13: "3.25rem",
        90: "22rem",
        100: "27rem",
        120: "31.25rem",
        spinner: "42.333333%",
      },
      zIndex: {
        1: "1",
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
      flex: {
        2: "2 1 0%",
        3: "3 1 0%",
        4: "4 1 0%",
        5: "5 1 0%",
        6: "2 1 0%",
        7: "7 1 0%",
        8: "8 1 0%",
        9: "9 1 0%",
        10: "10 1 0%",
      },
      width: {
        primary: "85.1267992%",
        secondary: "60%",
        third: "24%",
        fourth: "48%",
        fifth: "15vw",
        sixth: "4.375rem",
        seventh: "23%",
        eight: "45%",
        ninth: "75vw",
        tenth: "95%",
        eleventh: "30%",
        twelfth: "40vw",
        thirteenth: "25vw",
      },
      height: {
        primary: "29.375rem",
        secondary: "80vh",
      },
      minHeight: {
        primary: "41.5rem",
      },
      objectPosition: {
        primary: "28% 0",
      },
      gridTemplateColumns: {
        primary: "repeat(6, 20.9375rem)",
        secondary: "repeat(6, 7.877rem)",
        store: "24.6744345% 75.3255655%",
        gallery:"390px repeat(5, minmax(0, 1fr))",
        13: "repeat(13, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
        "3a": "repeat(3, minmax(0, auto))",
        "4a": "repeat(4, minmax(0, auto))",
        "6a": "repeat(6, minmax(0, auto))",
        "7a": "repeat(7, minmax(0, auto))",
        "6s": "repeat(6, 1fr)",
        "8s": "repeat(8, 1fr)",
        "10s": "repeat(10, 1fr)",
        "13s": "repeat(13, 1fr)",
        "14s": "repeat(14, 1fr)",
      },
      gridTemplateRows: {
        "7a": "repeat(7, 1fr)",
        "8a": "repeat(8, minmax(0, auto))",
      },
      gridColumnEnd: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
      },
    },
    screens: {
      xs: "375px",
      "1.5xl": "1400px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
