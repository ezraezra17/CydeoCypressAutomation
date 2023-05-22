/// <reference types="cypress" />

describe('Alerts in Cypress Test Environment', { baseUrl: 'https://demoqa.com' }, () => {
  beforeEach(() => {
    // run before each test case, beforeMethod in TestNG
    cy.clearCookies();
    cy.visit('/alerts');
  });

  it('Check alert confirmation', () => {
    /**
     * Browser Commands, windw: alert , window: confirm,window: on etc...
     */
    cy.get('#confirmButton').click();

    const stub = cy.stub(); // it enables not to create real enronment not to make pruchases
    cy.on('window:confirm', stub); // when this confirmation command initiated store and give the control to syub function
    cy.get('#confirmButton')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?'); // I am verifiying the allert
      });
    cy.on('window:confirm', () => true); // I am confirming the alert
    cy.contains('You selected Ok').should('be.visible');
  });

  it('Check alert cancellation', () => {
    cy.get('#confirmButton').click();

    const stub = cy.stub(); // it enables not to create real enronment not to make pruchases
    cy.on('window:confirm', stub); // when this confirmation command initiated store and give the control to syub function
    cy.get('#confirmButton')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?'); // I am verifiying the allert
      });
    cy.on('window:confirm', () => false); // I am declining the alert
    cy.contains('You selected Cancel').should('be.visible');
  });
});
