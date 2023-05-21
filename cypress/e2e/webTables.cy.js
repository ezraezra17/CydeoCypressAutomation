/// <reference types="cypress" />
describe('Cypress WebTable Tests', { baseUrl: 'https://demoqa.com' }, () => {
  /** If you need to navigate to a url other than your base url,you can define it at describe block,ot if it is only one test case
   * you can describe it in the it block.I put it in the decribe block it will affect the whole testcases,
   */

  beforeEach('Navigate to upload page', () => {
    // run before each test case, beforeMethod in TestNG
    cy.clearCookies();
    cy.visit('/webtables');
  });

  it('Check finding and editing a record', () => {
    /** locate table body-then navigate through this element to find Alden,then update info with another person
     * get me table body
     * get me
     *
     */
    cy.get('.rt-tbody') //
      .contains('.rt-tr-group', 'Alden') //
      .then((row) => {
        cy.wrap(row).find('[title="Edit"]').click();
        // fill in the box with the new person
        cy.get('#firstName').clear().type('Harvey');
        cy.get('#lastName').clear().type('Specter');
        cy.get('#submit').click();
        // from cypress test perspective we are still inside row element : need to do assertion
        cy.wrap(row).find('.rt-td').eq(0).should('contain', 'Harverd');
        cy.wrap(row).find('.rt-td').eq(1).should('contain', 'Specter');
      });
  });

  it('Check the frstTest Case', () => {
    cy.get('.rt-tbody')
      .contains('.rt-tr-group', 'Alden')
      .then((row) => {
        cy.wrap(row).find('[title="Edit"]').click();
        cy.get('#firstName').clear().type('Esra');
        cy.get('#lastName').clear().type('Hazinedar');
        cy.get('#submit').click();

        cy.wrap(row).find('.rt-td').eq(0).should('contain', 'Esra');
        cy.wrap(row).find('.rt-td').eq(1).should('contain', 'Hazinedar');
      });
  });

  it.skip('Check finding and deleting a record', () => {
    cy.get('.rt-tbody') //
      .contains('.rt-tr-group', 'Alden') //
      .then((row) => {
        cy.wrap(row).find('title="Delete"').click();
        // f
        cy.get('.rt-tbody').should('not.contain', 'Alden');
        // search for Alden in the body
        cy.get('#searchBox').type('Alden');
        // assert that there is no record
        cy.get('.rt-tbody').should('not.contain', 'Alden');
        cy.get('.rt-noData').should('contain', 'No rows found').should('be.visible');
      });
  });

  it.skip('Checking the second deleting testcase', () => {
    cy.get('.rt-tbody')
      .contains('.rt-tr-group', 'Alden')
      .then((row) => {
        cy.wrap(row).find('[title="Delete"]').click();
        cy.get('.rt-tbody').should('not.contain', 'Alden');
        cy.get('#searchBox').type('Alden');
        cy.get('.rt-noData').should('contain', 'No rows found').should('be.visible');
      });
  });

  it('Check search for different age records', () => {
    // define age groups
    const ageGroup = [29, 39, 45, 77];
    // for each age group perform the same scenario
    cy.wrap(ageGroup).each((age) => {
      cy.get('#searchBox').clear().type(age);
      // negative scenario
      if (age === 77) {
        cy.get('.rt-tbody').find('.rt-tr-group').first().should('not.contain', age);
        cy.get('.rt-noData').should('contain', 'No rows found').should('be.visible');
      } else {
        // verify if that ages exists,second number of records
        cy.get('.rt-tbody').find('.rt-tr-group').first().should('contain', age);
        cy.get('.rt-tbody').contains('.rt-tr-group', age).should('have.length', 1);
      }
    });
  });

  it('testing the test case three', () => {
    const ageGroup2 = [29, 39, 45, 77];
    // for each age group perform the same scenario
    // I wrapped that array object javascript object now I can perform loop inside of it
    // for each age group perform the same test scenario
    cy.wrap(ageGroup2).each((age) => {
      // type age into search bıx
      cy.get('#searchBox').clear().type(age);
      // verify if that age exists, second numberr of records
      // negative scenario
      if (age === 77) {
        cy.get('.rt-tbody').find('.rt-tr-group').first().should('not.contain', age);
        cy.get('.rt-noData').should('contain', 'No rows found').should('be.visible');
        // positve scneario
      } else {
        cy.get('.rt-tbody').find('.rt-tr-group').first().should('contain', age);
        cy.get('.rt-tbody').contains('.rt-tr-group', age).should('have.length', 1);
      }

      // to run in headless mode
      // npx cypress run --spec ./cypress/e2e/webTables.cy.js
    });
  });

  it.skip('Adding a new record', () => {
    // click on add button
    cy.get('#addNewRecordButton').click();
    cy.get('#firstName').type('Harvey');
    cy.get('#lastName').type('Specter');
    cy.get('#userEmail').type('specter@example.com');
    cy.get('#salary').type('70000');
    cy.get('#department').type('legal');
    cy.get('#submit').click();
    // assert that new record is added
    cy.get('.rt-body') //
      .contains('.rt-tr-group', 'Alden') //
      .then((row) => {
        // from cypress test perspective we are still inside row element : need to do assertion
        cy.wrap(row).find('.rt-td').eq(0).should('contain', 'Harvery');
        cy.wrap(row).find('.rt-td').eq(1).should('contain', 'Specter');
        cy.wrap(row).find('.rt-td').eq(2).should('contain', '40');
        cy.wrap(row).find('.rt-td').eq(3).should('contain', 'specter@example.com');
        cy.wrap(row).find('.rt-td').eq(4).should('contain', '70000');
        cy.wrap(row).find('.rt-td').eq(5).should('contain', 'legal');
      });
  });

  it('Testing adding a new record', () => {
    // click on add button
    cy.get('#addNewRecordButton').click();
    cy.get('#registration-form-modal').should('have.text', 'Registration Form');
    // assert that new record is added
    cy.get('#firstName').clear().type('Esra');
    cy.get('#lastName').clear().type('Haz');
    cy.get('#age').clear().type('37');
    cy.get('#userEmail').clear().type('specter@example.com');
    cy.get('#salary').clear().type('1500');
    cy.get('#department').clear().type('Sdet');
    cy.get('#submit').click();

    // from cypress test perspective we are still inside row element : need to do assertion
    cy.get('.rt-tbody')
      .contains('.rt-tr-group', 'Esra')
      .then((row) => {
        cy.wrap(row).find('.rt-td').eq(0).should('contain', 'Esra');
        cy.wrap(row).find('.rt-td').eq(1).should('contain', 'Haz');
        cy.wrap(row).find('.rt-td').eq(2).should('contain', '37');
        cy.wrap(row).find('.rt-td').eq(3).should('contain', 'specter@example.com');
        cy.wrap(row).find('.rt-td').eq(4).should('contain', '1500');
        cy.wrap(row).find('.rt-td').eq(5).should('contain', 'Sdet');
      });
  });

  it.only('Adding a new record -Better approach', () => {
    cy.get('#addNewRecordButton').click();
    cy.fixture('user').then((user) => {
      const columnNamess = Object.keys(user.user1);
      const columnValuess = Object.values(user.user1);

      cy.wrap(columnNamess).each((cName, index) => {
        // cy.log(cName)//each columnName
        //  cy.log(columnValuess[index]);//each column value

        cy.get(`#${cName}`).clear().type(`${columnValuess[index]}`);
        cy.get('#submit').click();

        // assert that it was included
        cy.get('.rt-tbody')
          .contains('.rt-tr-group', columnValuess[0])
          .then((row) => {
            cy.wrap(columnValuess).each((value, index) => {
              cy.wrap(row).find('.rt-td').eq(index).should('contain', value);
            });
          });
      });
    });
  });
  it.skip('Adding a new record - Better Aproach', () => {
    // click on add button
    cy.get('#addNewRecordButton').click();
    cy.fixture('user').then((user) => {
      const columnNames = Object.keys(user.user1); // goes to fixture folder, gets user1 object keys and stores into columnNames Array
      const userData = Object.values(user.user1);
      cy.wrap(columnNames).each((columnName, index) => {
        //  cy.log(columnName);
        //  cy.log(userData[index]);
        cy.get(`#${columnName}`).type(`${userData[index]}`);
      });
      cy.get('#submit').click();
      // assert that new record is added
      cy.get('.rt-tbody')
        .contains('rt-tr-group', userData[0])
        .then((row) => {
          cy.wrap(userData).each((value, index) => {
            cy.wrap(row).find('.rt-td').eq(index).should('contain', value);
          });
        });
    });
  });

  it('Adding a new record - Better Aproach', () => {
    // click on add button
    cy.get('#addNewRecordButton').click();
    cy.fixture('user').then((user) => {
      const columnNames = Object.keys(user.user1); // goes to fixture folder, gets user1 object keys and stores into columnNames Array
      const userData = Object.values(user.user1);
      cy.wrap(columnNames).each((columnName, index) => {
        //  cy.log(columnName);
        //  cy.log(userData[index]);
        cy.get(`#${columnName}`).type(`${userData[index]}`);
      });
      cy.get('#submit').click();
      // assert that new record is added
      cy.get('.rt-tbody')
        .contains('.rt-tr-group', userData[0])
        .then((row) => {
          cy.wrap(userData).each((value, index) => {
            cy.wrap(row).find('.rt-td').eq(index).should('contain', value);
          });
        });
    });
  });
});
