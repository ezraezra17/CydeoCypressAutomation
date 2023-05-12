describe('Context: My First Tests', () => {
    
    beforeEach(() => {
        // run before each test case, beforeMethod in TestNG
        cy.clearCookies();
        cy.visit('/login');
    })
    
    
    it('Check different locator strategies', () => {
        //By CSS locator,use double quatotation  //type is the "sendkeys"method
        //every comment of Cypress is a javascript which is creating a java object
        //tag name/attribute name/value
        cy.get("input[name='username']").type("CydeoStudent");//every statement creates an object to interacted , and next commandd makes an 
    //next command makes operation to the object created at the previous statement
    //attribute name and value 
    cy.get("[type='text']").clear();//clear what şs typed
    //this is an explicit assertions    we create input object and we create item.... subjects from the object and we make assertations
    //inut is a tag name
    cy.get("input").each((item,index,list )=>{//element/number/html element
       //assert  the length of the list is  
    expect(list).to.have.length(2);
    expect(item).to.have.attr("type");


    })

        //by attribute name
         //you can use single or double locators ,doesnt matter
         cy.get('[type]');

         //by className attribute value
         //when you use class name put dot at the beginning, if there is a space you can add dot to clear that space
         cy.get('.btn.btn-primary');
         //By id use # at the beginning 
         cy.get('#wooden_spoon');

         //if I want to use text: no xpath in cypress , but it is still possible with a diffrent approach
         //it means that button tag should contain the login text in an implicit way
         cy.get('button').should('contain','Login').click();
    
    })

  it('Check finding element by  travelling through the DOM element',()=>{

     //travel to find the login button : locate username box - go to parent form -then find button 
     //because some elements dont have unique attribute thus requires that approcah

     cy.get('input[name="username"]').parents('form').find('button').should('contain','Login').click();



   })
   
   it.only('chcek diffrent type of assertions',()=>{
   //Cypress itself bundles(uses) provided by Chai,Sino and JQuery libraries 
   // Should Assertion: does the assertion directly on the object itself
   //implicit 
    cy.get('#wooden_spoon')
    .should('contain','Login')
    .and('have.class','btn btn-primary');
    //expect assertion: 
   //then keyword is a function which creates a element from the object
   //gives function name 
    cy.get('#wooden_spoon').then((buttonElement)=>{ //we extract the subject of the object as buttonelement
        //NOW DO ASSERTİONS EXPLİCİTLY //we create a custom logic before we make assertions
        //we can take other programming logic because of not chaining 
        expect(buttonElement).to.have.text('Login');
        expect(buttonElement).to.have.class('btn btn-primary');
       

    })
     


   })
      

    
})