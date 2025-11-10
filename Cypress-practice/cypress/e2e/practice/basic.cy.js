/// <reference types="cypress" />

describe('Basic queries', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  })

  it('Elements getting practice', () =>{
    cy.get('#login-button');
    cy.get('[data-test="username"]');
    cy.contains('input', 'Login');
    cy.get('form').find('input');
    cy.get('[placeholder="Username"]').type('Test String');
    cy.get('[placeholder="Username"]').invoke('val').should('eq', 'Test String');
    cy.contains('input', 'Login').invoke('hide');
    cy.contains('input', 'Login').invoke('show');
//    cy.title().its('length').should('eq', '9');
    cy.get('[placeholder="Password"]').parent().prev();
    cy.get('[placeholder="Password"]').parent().siblings('.form_group');
    cy.get('input').filter('[placeholder="Username"]');
//    cy.get('input').eq(0)
    cy.get('[data-test="login-button"]').as('LoginButton');
    cy.get('@LoginButton').click();
//    cy.get('[data-test="error"]').invoke('text').should('eq', 'Epic sadface: Username is required');

//     cy.get('input').each(($item, index, $list) => {
//   // $item - поточний елемент
//   // index - індекс поточного елемента
//   // $list - список всіх елементів
//     cy.wrap($item).click(); // Наприклад, натискання на кожен елемент
//});

    cy.get('input').first()

  })

})