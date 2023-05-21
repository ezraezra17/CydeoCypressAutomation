describe('How to do API tests with cypresss',()=>{
   
    
    it('Simple GET request , check status headers and body ',()=>{

cy.request({
    //this function takes a json object as parameter , and inside this objects we define core parts HTTP request 

    method: 'GET',
    url: `${Cypress.env('apiUrl')}${Cypress.env('apiBooks')}`,
     //OTHER THAN METHODS AND URL THE REST OF OPTIONS DEPEND ON YOUR TEST CASE
     failOnStatusCode: false 
}).then((response)=>{ //we get a response object
     expect(response.status).to.equal(200);
   cy.log(response.body.books[0].isbn);
    expect(response.body.books[1].title).to.equal('Learning JavaScript Design Patterns');
    expect(response.headers.connection).to.equal('keep-alive');
    const books = response.body.books;
   // books.array.forEach(element => {
       // console.log(element.title);
 // });
  // a loop for verification of title

     cy.fixture('book.Titles').then((expectedBookTitle)=>{
        for(let i=0; i<8;i++){
            expect(response.body.books[i].title).to.equal(expectedBookTitle[i]);
            
        }
            
     })
    

    
})

    })
})
    
