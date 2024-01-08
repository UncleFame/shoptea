/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dimgray: {
          "100": "#575857",
          "200": "#545454",
        },
        gray: {
          "100": "#7a7a7a",
          "200": "#777575",
          "300": "rgba(0, 0, 0, 0.1)",
        },
        "material-theme-sys-light-primary": "#5b7360",
        black: "#000",
        darkslategray: "#484848",
        gainsboro: "#d9d9d9",
        seagreen: "#509c5c",
        forestgreen: "#439341",
        lime: "#00ea17",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "81xl": "100px",
      },
    },
    fontSize: {
      base: "16px",
      "13xl": "32px",
      lg: "18px",
      "17xl": "36px",
      sm: "14px",
      xl: "20px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
