
const{defineConfig} = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl:'https://practice.cydeo.com/',
    video: false,//turns off the video recording
    retries : 1,//if your testcase files it runs 2 times 
    defaultCommandTimeout: 5000,//waits between the intervals
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

