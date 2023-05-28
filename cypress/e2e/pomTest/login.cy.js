// we created our object
import { auth } from '../../support/pages/auth';
// two dots goes to parents and the next two dots go to sibling

// TWO DOTS first go to the parent of login pomtest, the other two dots go to e2e parent and then goes to siblin support
import { navigateTo } from '../../support/pages/navigation';

const LoginLocators = require('../../support/pages/auth'); // this way reaches all objects of auth file

describe('Auth : Login user with different ways', () => {
  // navigation to the test page
  beforeEach('navigate to login page ', () => {
    cy.clearAllCookies;
    navigateTo.loginPage(); // this function is called from outr POM
  });
  

  it.skip('Happy Path scenario using POM function', () => {
    // we used utility method login function
    cy.fixture('user').then((user) => {
      auth.login(user.user2.username, user.user2.password);

      // lets get our custom command to verify thetext
      cy.textExists('You logged into a secure area!');
      auth.logout();
    });
  });

  it('Happy Path scenario using POM Locators', () => {
    //we used pom lacators like findby annotation
    cy.fixture('user').then((user) => {
      // auth.login(user.user2.username, user.user2.password);
      // I need to import locators object

      // lets get our custom command to verify thetext

      LoginLocators.locators.userName.type(user.user2.username);
      LoginLocators.locators.password.type(user.user2.password);
      LoginLocators.locators.submit.click();

      cy.textExists('You logged into a secure area!');
      auth.logout();
     // LoginLocators.auth.logout; the other way around
    });
  });

  it.only('Check invalid user credentials', () => {
    auth.login('invalid234', 'invalid234'); // beauty of re-usability
    // verify error message
    cy.textExists('Your username is invalid!');
  });
});
