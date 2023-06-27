/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#272727",
        secondary: "#FBD107",
        section: "#F2F4EA",
        light_text: "#636363",
        links_bg: "#303030",

      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        tinos: ["Tinos", "serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "520px",
      sm: "1016px",
      md: "1080px",
      lg: "1300px",
      xl: "1700px",
    },
  },
  plugins: [],
};