describe('Context: My First Tests', () => {
    
    beforeEach(() => {
        // run before each test case, beforeMethod in TestNG
        cy.clearCookies();
        cy.visit('/login');
    })
    
    
    it('Check different locator strategies', () => {
        //By CSS locator,use double quatotation  //type is the "sendkeys"method
        //every comment of Cypress is a javascript which is creating a java object
        cy.get("input[name='username']").type("CydeoStudent");//every statement creates an object to interacted , and next commandd makes an 
    //next command makes operation to the object created at the previous statement
    //attribute name and value 
    cy.get("[type='text']").clear();//clear what şs typed
    cy.get("input").each((item,index,list )=>{
       //assert  the length of the list is  
    expect(list).to.have.length(2);
    expect(item).to.have.attr("type");


    })
    
    })

   
    
})