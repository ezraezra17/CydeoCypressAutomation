
const username = `user${Math.floor(Math.random() * 100000 + 100000)
    .toString()
    .substring(1)}`; // math random creates a random between 0 and 1
  console.log(username);
  const password = `Test123456!`;

describe('UIApI integration',()=>{
 beforeEach('creating a user and getting a token',()=>{
    
    
      cy.request({
        
        method:'POST',
        url : `${Cypress.env('apiUrl') }${Cypress.env('generateUser')}`,
        body:{
          userName:username,
          password:password
 
        },
 
 
      }).then((response)=>{
          
       
       cy.setCookie('userID',response.body.userID);
       cy.setCookie('userName',response.body.username);
 
 
 
      });
 
    
 
      cy.request({
 
        method: 'POST',
        url:`${Cypress.env('apiUrl')}${Cypress.env('generateToken')}`,
        body:{
          userName:username,
          password:password,
 
        } 
 
 
      }) .then((response)=>{
           
            cy.setCookie('token',response.body.token);
            cy.setCookie('expires',response.body.expires);
 
      });
 
  });
 
 
 

 it('Check if user is logged in from UI environment',{baseUrl: 'https://demoqa.com'},()=>{
 
                  cy.visit('/profile');
               cy.get('#userName-value').contains(username).should('be.visible');
 
           });
 
 

});
