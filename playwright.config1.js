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
  retries:1,
  /* Run tests in files in parallel */
  fullyParallel: true,
  timeout:30*1000,
  expect:{
    timeout:7000
  },


  reporter: [['html'],
            ["allure-playwright",{outputFolder:'allure-result'}  ]
],
projects:[
  { name: 'safari execution',
    
  use: {
    browserName: 'webkit',
    video:'on',
    headless : false,
    screenshot:'on',
    trace:'on',
    ...devices['iPhone 11 Pro'],
    // viewport: {width:760,height:720}
  }
    },

    {
      name: 'chromiun execution',
      use: {
        browserName: 'chromium',
        video:'on',
        headless : false,
        screenshot:'on',
        trace:'on',
        // viewport: {width:760,height:720}
      }
    }
]
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  // use: {
  //   browserName: 'chromium',
  //   video:'on',
  //   headless : false,
  //   screenshot:'on',
  //   trace:'on',
  //   // viewport: {width:760,height:720}
    
  //   }

  

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

