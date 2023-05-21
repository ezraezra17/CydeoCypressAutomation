/// <reference types="cypress" />

describe('Context: My First Tests', () => {
  beforeEach(() => {
    // run before each test case, beforeMethod in TestNG
    cy.clearCookies();
    cy.visit('/login');
  });
  it('cypress try', () => {});
});
