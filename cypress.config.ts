import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl:"http://localhost:4200/pages",
    retries:{
      openMode: 1,
      runMode: 0,
    },
    component: {
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
