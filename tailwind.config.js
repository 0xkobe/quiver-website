// const colors = require("tailwindcss/colors");

const mainColors = {
  primary: "#5540DB",
  secondary: "#D270FF",
  purple: {
    900: "#231B5C",
  },
};

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: mainColors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
