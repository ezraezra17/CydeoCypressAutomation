// we created our object
import { auth } from '../../support/pages/auth';
// two dots goes to parents and the next two dots go to sibling

import { navigateTo } from '../../support/pages/navigation';

const LoginLocators = require("../../support/pages/auth");//this way reaches all objects of auth file

describe('Auth : Login user with different ways', () => {
  // navigation to the test page
  beforeEach('navigate to login page ', () => {
    cy.clearAllCookies;
    navigateTo.loginPage(); // this function is called from outr POM
  });

  it.skip('Happy Path scenario using POM function', () => {
    cy.fixture('user').then((user) => {
      auth.login(user.user2.username, user.user2.password);

      // lets get our custom command to verify thetext
      cy.textExists('You logged into a secure area!');
      auth.logout();
    });
  });

  it('Happy Path scenario using POM Locators', () => {
    cy.fixture('user').then((user) => {
     // auth.login(user.user2.username, user.user2.password);
     //I need to import locators object

      // lets get our custom command to verify thetext
     
      LoginLocators.locators.userName.type(user.user2.username);
      LoginLocators.locators.password.type(user.user2.password);
      LoginLocators.locators.submit.click();

      cy.textExists('You logged into a secure area!');
      auth.logout();
    });


  });


  it.skip('Check invalid user credentials' , () => {
    auth.login('invalid234','invalid234'); // beauty of re-usability
    // verify error message
    cy.textExists('Your username is invalid!');
})


});
