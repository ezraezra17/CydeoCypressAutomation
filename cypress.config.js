
const{defineConfig} = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl:'https://practice.cydeo.com/',
    video: false,//turns off the video recording
    retries : 2,//if your testcase files it runs 2 times 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

