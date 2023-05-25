describe('Context: My First Tests', () => {
  beforeEach(() => {
    // run before each test case, beforeMethod in TestNG
    cy.clearCookies();
    cy.visit('/multiple_buttons');
  });

  it('Check different button actions', () => {
    // select a button with text
    cy.contains('Button 2').should('be.visible').click();
    cy.contains('Clicked on button two!').should('be.visible');

    // find element with class attribute and create a list then select 3rd element from the list
    cy.get('.btn.btn-primary').then(($buttons) => {
      // buttons is an element
      // it warps html element and now it is a cypress element/object ,
      // I wanna click on the theird element starting from 0
      cy.wrap($buttons).eq(2).click();
      // assert the text in the same function
      cy.contains('Clicked on button three!').should('be.visible');
    });

    cy.get('button').each((item, index, list) => {
      // uses button tag
      // assert the length of the list,verify number of buttons
      // it is a kind of loop  which goes each element one by one
      expect(list).to.have.length(6);
      expect(item).to.have.attr('onclick');
    });

    // I will get all buttons like approach from above , get only the item then check for tezt of each item, if it is equal
    // to Button 4, then click on it
    cy.get('button').each((item) => {
      if (item.text() === 'Button 4') {
        cy.log(item.text()); // this command write the text at the test console
        // item.click(); you cannot use cypress before you use wrap method because ıt is a javascripts jquery element
        cy.wrap(item).click();
        cy.contains('Clicked on button four!').should('be.visible');
      }
    });

    // npx cypress run --headless -b chrome   to run headless to run three test case
  });

  it.only('retry button actions', () => {
    // select a button with text

    cy.contains('Button 2').click();

    // find element with class attribute and create a list then select 3rd element from the list
    cy.get('.btn.btn-primary').then((buttons) => {
      // buttons is an element
      // it warps html element and now it is a cypress element/object ,
      // I wanna click on the theird element starting from 0
      cy.wrap(buttons).eq(2).click();
      // assert the text in the same function
      // item.click(); you cannot use cypress before you use wrap method because ıt is a javascripts jquery element

      cy.contains('Clicked on button three!').should('be.visible'); // for the text to be confirmed , we need to use contains() method

      // assert the length of the list,verify number of buttons
      cy.wrap(buttons).each((button) => {
        if (button.text() === 'Button 4') {
          cy.wrap(button).click();
          cy.log(button.text());
        }
      });
    });
    // cy.contains('Clicked on button four!').should('be.visible');
    cy.get('#result').should('contain', 'Clicked on button four!').should('be.visible');

    // npx cypress run --headless -b chrome   to run headless to run three test case
    cy.get('button').then((buttonn) => {
      cy.wrap(buttonn).each((element) => {
        if (element.text() === 'Button 5') {
          cy.wrap(element).click();
        }
      });
      cy.contains('Clicked on button five!').should('be.visible');
    });

    // assert the length of the list,verify number of buttons
    cy.get('button').each((element, index, listt) => {
      expect(listt).to.have.length(6);
      expect(listt).to.have.attr('onclick');
    });

    // it is a kind of loop  which goes each element one by one
  });
});
