import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4200/pages",
    retries: {
      openMode: 1,
      runMode: 0
    },
    watchForFileChanges: false, 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});