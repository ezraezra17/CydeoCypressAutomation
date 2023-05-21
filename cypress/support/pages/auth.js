class Auth {
  // this is a page object class
  // the class name does not have to be same with the file name
  // you can put more than one class in a file, an d none of them have any superority over each other

  login(user_name, password) {
    cy.get('[name="username"]').clear().type(user_name);
    cy.get('[name="password"]').clear().type(password);
    cy.get('#wooden_spoon').click();
  }

  logout() {
    cy.contains('Logout').should('be.visible').click();
  }
}

// create an object of the class

const auth = new Auth();
class Locators{//we can create another class here, how do we apply findBy annotation of Selenium with Cypress
    get userName(){//userName is the webelement variable name
        return cy.get('[name="username"]',{timeout:10000});//defining custom timeout for a specific element ,thistimeout is a dynamic wait like implicitly wait , when it finds out it moves on 

    }

    get password (){
        return cy.get('[name="password"]',{timeout:10000});

    }
    get submit(){
        return cy.get('#wooden_spoon');
    }
}

const locators = new Locators();

module.exports = {
  auth,
  locators
};
