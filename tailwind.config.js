// eslint-disable-next-line @typescript-eslint/no-var-requires
const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: "Cabin, sans-serif",
    },
    colors:{
      ...colors,
      primary: "#1A97CB",
      secondary: "#023D51",
    },
    container: {
      padding: "1rem",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
