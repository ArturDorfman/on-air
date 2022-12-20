/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      // primary: '#057a55',
      success: colors.green["600"],
      warning: colors.yellow["600"],
      danger: colors.red["500"],
      info: colors.gray["500"],
      link: colors.sky["600"],

      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.yellow,
      orange: colors.orange,
      green: colors.emerald,
      blue: colors.blue,
    },
    extend: {},
  },
  plugins: [],
};
