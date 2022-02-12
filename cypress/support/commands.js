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
const sessionCookiePrefix = "SSESS";


Cypress.Commands.add('login', (username, password) => { 

    cy.get('#user_login')
    .clear()
    
    .invoke('val',username)
    .should("have.value", username);
    
    //Get password field selector and type password
    cy.get('#user_pass')
    .clear()
    .invoke('val', password)
    .should("have.value", password);

    //Click on login button
    cy.get('#wp-submit')
    .click()
    
    return (
        cy
          .getCookies()
          // .should("have.length", 1)
          .then((cookies) => {
            // cy.log("cookies", JSON.stringify(cookies));
            const cookieExists = cookies.some((cookie) =>
              cookie.name.includes(sessionCookiePrefix)
            );
    
            // expect(cookieExists).to.be.true;
    
            return cookieExists;
          })
      );
})


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
