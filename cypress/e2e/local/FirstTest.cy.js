describe('First test suite',()=>{


context('First test suite - context', () =>{

  it(' First test', () => {
cy.visit('/layout/accordion');
cy.url().should('contain','/accordion')
  });
  });
describe ('Second discribe',()=>{
  it(' Failed test', () => {
    cy.visit('/layout/accordion');
    cy.get('.appearance-filled').should('contain', 'Hello');
  });
});
});



