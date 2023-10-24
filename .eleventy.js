module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./assets").addPassthroughCopy("./images")
  
    return {
      passthroughFileCopy: true,
    }
}