// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', user => {
     cy.get('input[name="firstName"]').should('be.visible').type(user.firstName)
     cy.get('input[name="lastName"]').should('be.visible').type(user.lastName)
     cy.get('input[type="email"]').should('be.visible').type(user.email)
     cy.get('textarea[name="open-text-area"]').should('be.visible').as('desc').type(user.desc)
     cy.get('button[type="submit"]').should('be.visible').click()


})