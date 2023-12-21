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
    },
    fontFamily: {
      montserrat: "Montserrat",
      josefin: ["Josefin Sans", "sans-serif"],
    },
  },
};
export const plugins = [require("tailwind-scrollbar")];
