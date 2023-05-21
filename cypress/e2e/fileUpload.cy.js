/// <reference types="cypress" />

describe('Input form tests', () => {
  /**
     * Step1:
     * In order to upload files in Cypress we need to install plugin
     * we will run following command:
     * npm install -dev cypress-file-upload
     * step 2:
     * we need to import necessary command to our project
     * in our support folder we have commands.js file: this file is a good place for placing our utilty functions(methods)
       add following line:
       step3:
       The file that you want to upload should be in your fixture folder
       

    
    */
  beforeEach('Navigate to upload page', () => {
    // run before each test case, beforeMethod in TestNG
    cy.clearCookies();
    cy.visit('/upload');
  });

  it('Check upload action ', () => {
    // locator for choose file button
    cy.get('input#file-upload').attachFile('pic.png');
    // click on upload button
    cy.get('#file-submit').click();
    // assert that path message is displayed
    cy.get('#uploaded-files').then(() => {
      cy.contains('pic.png').should('be.visible');
    });
  });
});
