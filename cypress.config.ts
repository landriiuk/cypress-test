import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4200/pages",
    retries: {
      openMode: 1,
      runMode: 0
    },
    watchForFileChanges: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 20000,
    screenshotsFolder:"C:\Users\Artemchyk\Desktop\aqa test\cypress-test\cypress\screenshots",
    trashAssetsBeforeRuns: false,
    screenshotOnRunFailure: true,
    video:true,
    viewportHeight: 600,
    viewportWidth: 600, 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
