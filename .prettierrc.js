module.exports = {
  extends: ["prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "linebreak-style": ["error", "unix"],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
};
