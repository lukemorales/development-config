const baseConfig = require("./base");

module.exports = {
  ...baseConfig,
  plugins: baseConfig.plugins.concat[require("prettier-plugin-tailwindcss")],
};
