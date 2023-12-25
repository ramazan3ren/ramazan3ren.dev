/** @type {import('tailwindcss').Config} */

export const mode = "jit";
export const darkMode = "class";
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      primaryColor: "#c64242",
      secondaryColor: "#d1454c",
      darkThemeColor: "#121212",
      darkThemeAppColor: "#1f1f1f",
      darkThemeTextColor: "#ff7474",
      backgrundWhite: "#f9f7fe",
      darkCardColor: "#1e1e1e",
      lightCardColor: "#f9f7fe",
      cardColor: "#ebeae8",
      cardTextColor: "#eceaf3",
    },
    fontFamily: {
      montserrat: "Montserrat",
      josefin: ["Josefin Sans", "sans-serif"],
    },
    borderRadius: {
      customFull: "2.7rem",
    },
    screens: {
      '4k': '2560px',
      '1080': '1700px',
      // => @media (min-width: 1280px) { ... }
    },
  },
};
export const plugins = [];
