


describe('Input form tests', () => {
    
    beforeEach(() => {
        // run before each test case, beforeMethod in TestNG
        cy.clearCookies();
        cy.visit('/registration_form');
    })


    it.skip('Chack different input box fields and verify ',()=>{
             cy.get('input[name="firstname"]').type("Esra");
             cy.get('input[name="lastname"]').type("Hazi");
             cy.get('input[name="username"]').type("ambitious");
             //we have math() function, you provide the math number,it rpovides random number
             //Math.random(): creates a number between 0-1 ~ 0.005678
             //Math.florr: makes it a whole number
             let email =`formtest${Math.floor(100000+Math.random()*900000)}@cydeo.com`;
             cy.get('input[name="email"]').type(email);
            let password =`test${Math.floor(100000+Math.random()*900000)}`;
            cy.get('input[name="email"]').type(password);
            let phoneNumber = `555-000-${Math.floor(100+Math.random()*9000)}`;//4 digit extension number
            cy.get('input[name="phone"]').type(phoneNumber);
            cy.get('input[name="birthday"]').type('01/01/1999');


         })

         it.skip('Check different input box fields ',()=>{

            cy.get('.radio')
            .find('[type=radio]')
            .then((radio=>{
                   //get all radio buttons , select the first one and verify that it is selected (checked)
                   //out of this three radio elements finds the first one and checks it
                  cy.wrap(radio).first().check().should('be.checked');//cypress wotks in a chainabl functions structure
                  /**radio: is Jquery element, cy.warp(radio): turns into scypress object
                   * so that I can use cypress functions 
                   * then we use first function
                   * first(): selects first element 
                   * check(): check it out 
                   * should(): verifes whatever I provide as a parameter be.checked
                   * you can chech from assertion doocumentationf of cypress
                   */

                  //get all radio buttons, select the second one and verify it is checked and confirmation labe is visible
                  cy.wrap(radio).eq(1).check().should('be.checked');
                  cy.get('[data-bv-icon-for="gender"]').should('be.visible');//common function used in tests 
                  //Third radio button is Not checked 
                  cy.wrap(radio).eq(2).should('not.be.checked');



            }))
         })

         
                 
    
       

          // npx cypress run --headless -b chrome   to run headless to run three test case
          
   



})