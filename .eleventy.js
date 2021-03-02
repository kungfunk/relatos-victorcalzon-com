const CleanCSS = require("clean-css");

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter(
    "cssmin",
    (code) => new CleanCSS({}).minify(code).styles
  );

  return {
    dir: {
      input: "src/content",
      output: "dist",
      includes: "../layout",
    },
  };
};
