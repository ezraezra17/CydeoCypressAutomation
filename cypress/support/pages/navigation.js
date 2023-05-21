// I  export directly

export class NavigateTo {
  loginPage() {
    cy.visit(Cypress.env('login')); // CYPRESS ENV COMMAND takes the parameter defined in the paranthesis
  }
}

export const navigateTo = new NavigateTo();
