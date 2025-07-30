/** @type {import('tailwindcss').Config} */
const {heroui} = require("@heroui/react");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#142637',
      'primary-light': '#2C3D4A',
      'seconday': '#F9D640',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    extend: {},
  },
  plugins: [heroui({
    prefix: "heroui", // prefix for themes variables
    addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
    defaultTheme: "dark", // default theme from the themes object
    defaultExtendTheme: "dark", // default theme to extend on custom themes
    layout: {}, // common layout tokens (applied to all themes)
    themes: {
      dark: {
        layout: {}, // light theme layout tokens
        colors: {
          white: '#d3dce6',
          background: '#8492a6',
          secondary: '#F9D640',
          black: '#3A3A3A',
          primary: {
            foreground: '#8492a6',
            DEFAULT: '#142637'
          },
          secondary: {
            foreground: '#8492a6',
            DEFAULT: '#F9D640'
          },
        }, // light theme colors
      },
    },
  }),],
}
