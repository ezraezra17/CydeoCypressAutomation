const username = `user${Math.floor(Math.random() * 100000 + 100000)
  .toString()
  .substring(1)}`; // math random creates a random between 0 and 1
const password = `Test123456!`;
describe('E2E-Test API integrated UI Test', () => {
  beforeEach('create a user and generate token from API and set cookies', () => {
    // following apı request is for creating user and setting cookies for the test
    cy.request({
      method: 'POST', // FİRST CREATE A USER
      url: `${Cypress.env('apiUrl')}${Cypress.env('generateUser')}`, // WE GENERATE TOKEN
      body: {
        username,
        password,
      },
    }).then((response) => {
      cy.setCookie('userID', response.body.userID);
      cy.setCookie('UserName', response.body.username);
    });
    // following will generate token and set token cookies
    // following will generate token and set token cookies
    cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}${Cypress.env('generateToken')}`,
      body: {
        userName: username,
        password,
      },
    }).then((response) => {
      cy.setCookie('token', response.body.token);
      cy.setCookie('expires', response.body.expires);
    });
  });

  afterEach('Deleting USER created for testing by using API request', () => {
    // we are chaining API requests to login then delete
    cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}${Cypress.env('loginAPI')}`,
      body: {
        userName: username,
        password,
      },
    }).then((response) => {
      cy.request({
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${response.body.token}`,
        },
        url: `${Cypress.env('apiUrl')}${Cypress.env('generateUser')}/${response.body.userId}`,
      });
    });
  });
});
