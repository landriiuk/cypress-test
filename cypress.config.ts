import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4200/pages",
    retries: {
      openMode: 1,
      runMode: 0
    },
    video: true,
    videosFolder: "cypress/video",
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 15000,
    trashAssetsBeforeRuns: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    specPattern: "cypress/e2e/local/FirstTest.cy.js",

    setupNodeEvents(on, config) {
      // implement node event listeners here
      },
    },
});
