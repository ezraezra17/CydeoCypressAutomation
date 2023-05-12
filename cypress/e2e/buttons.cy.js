describe('Context: My First Tests', () => {
    
    beforeEach(() => {
        // run before each test case, beforeMethod in TestNG
        cy.clearCookies();
        cy.visit('/multiple_buttons');
    })


    it('Check different button actions',()=>{
        //select a button with text
       cy.contains('Button 2').should('be.visible').click();
       cy.contains('Clicked on button two!').should('be.visible').click();
  
         //find element with class attribute and create a list then select 3rd element from the list
         cy.get('.btn.btn-primary').then(($buttons)=>{//buttons is an element
            //it warps html element and now it is a cypress element/object ,
            //I wanna click on the theird element starting from 0
            cy.wrap($buttons).eq(2).click();
            //assert the text in the same function
            cy.contains('Clicked on button three!').should('be.visible');

         })

    })



})