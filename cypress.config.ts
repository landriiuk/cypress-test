
const { defineConfig } = require('cypress')

export default defineConfig({
  e2e: {
    env: {
      name: "user"
    },
    baseUrl: "http://localhost:4200/pages/",
    retries: {
      openMode: 1,
      runMode: 0
    },
    watchForFileChanges: false,
    defaultCommandTimeout: 1000,
    pageLoadTimeout: 20000,
    screenshotsFolder: "cypress/cypress/cypress_screenshot",
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: false,
    // viewportHeight:600,
    // viewportWidth:1000,
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
