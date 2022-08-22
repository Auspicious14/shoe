const { chakra } = require("@chakra-ui/react");

/** @type {import('tailwindcss').Config} */
const chakraCOnfig = require("chakra/config");
module.exports = chakraCOnfig({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["'Helvetica', 'Proxima Nova'"],
      serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
  plugins: [],
});
