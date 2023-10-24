module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./assets").addPassthroughCopy("./images")
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  
    return {
      passthroughFileCopy: true,
    }
}