const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  // env: {
  //   URL: "https://vendor-test.conqt.com/",
  // },

  env: {
    URL: "https://test.conqt.com/",
  },

  env: {
    URL: "https://vendor-test.conqt.com/",
  },
});
