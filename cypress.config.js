
const{defineConfig} = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl:'https://practice.cydeo.com/',
    env: {
        login:"/login",
        apiUrl:"https://demoqa.com",
        apiBooks:"/BookStore/v1/Books",
        generateUser:"/Account/v1/User",
        generateToken:"/AccountV1GenerateToken",
        loginAPI:"/Account/v1/Login",



    },
    video: false,//turns off the video recording
    //retries : 1,//if your testcase files it runs 2 times 
    defaultCommandTimeout: 5000,//waits between the intervals
    viewportHeight:800,
    viewportHeight:1200,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

