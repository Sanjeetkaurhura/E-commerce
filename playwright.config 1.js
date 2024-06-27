// @ts-check
const { defineConfig, devices, chromium } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,

  reporter: 'html',
  projects:[
    {
      name :'safari execution',
      use: {
        browserName: 'webkit',
        headless : true,
        screenshot:'on',
        trace:'on'
        
        }
    }
  

  ]
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  

  

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

