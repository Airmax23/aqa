

// describe('Basic queries', () => {
//   beforeEach(() => {
//     cy.visit('https://www.saucedemo.com/');
//   })
//})
it('select', () => {
  cy.visit('https://practice.expandtesting.com/dropdown');
  cy.get('#country').select('Andorra');
  cy.get('#country').select('AR');
});

it('check/uncheck', () => {
  cy.visit('https://practice.expandtesting.com/checkboxes');
  cy.get('#checkbox1').check();
  cy.get('#checkbox2').uncheck();
});

it.only('scroll', () => {
  cy.visit('https://www.saucedemo.com/');

  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();
  cy.get('[data-test="title"]').should('have.text', 'Products');
  cy.url().should('include', 'inventory.html');
});
