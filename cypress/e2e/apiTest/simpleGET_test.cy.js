describe('How to do API tests with cypresss', () => {
  it('Simple GET request , check status headers and body ', () => {
    cy.request({
      // this function takes a json object as parameter , and inside this objects we define core parts HTTP request

      method: 'GET',
      url: `${Cypress.env('apiUrl')}${Cypress.env('apiBooks')}`,
      // OTHER THAN METHODS AND URL THE REST OF OPTIONS DEPEND ON YOUR TEST CASE
      failOnStatusCode: false,
    }).then((response) => {
      // we get a response object
      expect(response.status).to.equal(200);
      cy.log(response.body.books[0].isbn);
      expect(response.body.books[1].title).to.equal('Learning JavaScript Design Patterns');
      expect(response.headers.connection).to.equal('keep-alive');
      const { books } = response.body;
      // books.array.forEach(element => {
      // console.log(element);
      //  });
      // a loop for verification of title

      cy.fixture('book.Titles').then((expectedBookTitle) => {
        for (let i = 0; i < 8; i++) {
          expect(response.body.books[i].title).to.equal(expectedBookTitle[i]);
        }
      });
    });
  });

  it.only('Simple get request try ', () => {
    cy.request({
      //this function takes a json object as paraöeter , and inside it defines core parts of HTTP reques
      method: 'GET',
      //https://demoqa.com/BookStore/v1/Books this is harcoded way
      url: `${Cypress.env('apiUrl')}${Cypress.env('apiBooks')}`,
      //other than method and url the rest of options  depend on your test case
      failOnstatusCode: false,//it the status code other than 2** or 3000 it fails but I don'T want it to fail
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.headers.connection).to.equal('keep-alive');
      expect(response.body.books[1].publish_date).to.equal('2020-06-04T09:11:40.000Z');
      expect(response.body.books[1].subTitle).to.equal("A JavaScript and jQuery Developer's Guide");
      cy.log(response.body.books[1].isbn);
      expect(response.body.books[1].isbn).to.equal('9781449331818');

      const books =response.body.books;

       books.forEach(element => {
           console.log(element.title);
      });

      for (let i = 0; i < response.body.books.length; i++) {
        cy.log(response.body.books[i].title);
      }

      cy.fixture('book.Titles').then((expectedBookTitle) => {
        for (let i = 0; i < response.body.books.length; i++) {
          expect(response.body.books[i].title).to.equal(expectedBookTitle[i]);
          console.log(expectedBookTitle[i]);
        }
      });
    });
  });
});
