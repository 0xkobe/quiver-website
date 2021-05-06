// const colors = require("tailwindcss/colors");

const mainColors = {
  primary: "#5540DB",
  secondary: "#D270FF",
  purple: {
    50: "#FBF1FF",
    100: "#F2F0FF",
    900: "#231B5C",
  },
};

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: mainColors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
