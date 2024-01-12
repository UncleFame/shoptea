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
          "300": "#526350",
        },
        gray: {
          "100": "#7a7a7a",
          "200": "#777575",
          "300": "rgba(0, 0, 0, 0.1)",
          "400": "rgba(0, 0, 0, 0.13)",
          "500": "rgba(0, 0, 0, 0.5)",
          "600": "rgba(0, 0, 0, 0.03)",
        },
        "material-theme-sys-light-primary": "#5b7360",
        "material-theme-sys-light-outline": "#72796f",
        whitesmoke: "#ece8e8",
        "material-theme-sys-light-outline-variant": "#c2c9bd",
        gainsboro: "#d9d9d9",
        "material-theme-sys-light-primary-fixed-dim": "#8bd88e",
        "material-theme-sys-dark-error-container": "#93000a",
        "material-theme-sys-light-primary-fixed": "#a6f5a8",
        darkgray: "#b3b3b3",
        snow: "#fffcfc",
        black: "#000",
        darkslategray: "#484848",
        seagreen: "#509c5c",
        forestgreen: "#439341",
        lime: "#00ea17",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "8xs": "5px",
        "3xs": "10px",
        "81xl": "100px",
      },
    },
    fontSize: {
      base: "16px",
      "13xl": "32px",
      xs: "12px",
      sm: "14px",
      lg: "18px",
      "17xl": "36px",
      xl: "20px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
