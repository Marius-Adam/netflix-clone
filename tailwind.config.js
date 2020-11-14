module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        red: "#db0000",
        black: "#000000",
        white: "#ffffff",
        gray: "#564d4d",
        burgundy: "#831010",
      },
      screens: {
        "xxl-max": { max: "1600px" },
        "xl-max": { max: "1200px" },
        "lg-max": { max: "992px" },
        "md-max": { max: "768px" },
        "sm-max": { max: "576px" },
        "xs-max": { max: "420px" },
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
