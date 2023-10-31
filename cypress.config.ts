import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4200/pages/",
    retries: {
    openMode: 1, 
    runMode:1
    }, 
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: false,
    video: true,
    viewportHeight:1080,
    viewportWidth:1920,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
