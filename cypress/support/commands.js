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
import "cypress-localstorage-commands";

//let LOCAL_STORAGE_MEMORY = {};

// Cypress.Commands.add("saveLocalStorage", () => {
//   Object.values(localStorage).forEach(key => {
//     LOCAL_STORAGE_MEMORY[key] = localStorage[key];
//   });
// });

// Cypress.Commands.add("restoreLocalStorage", () => {
//   Object.values(LOCAL_STORAGE_MEMORY).forEach(key => {
//     localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
//   });
// });

Cypress.Commands.add('AdminLogin', (username, password) => { 

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

  /**
   * Make sure that the session cookie is set
   */
   return (
    cy
      .getCookies()
      // .should("have.length", 1)
      .then((cookies) => {
        cy.log("cookies", JSON.stringify(cookies));
        const cookieExists = cookies.some((cookie) =>
          cookie.name.includes(sessionCookiePrefix)
          
        );
        cy.setLocalStorage("cookieExists", cookieExists);

        // expect(cookieExists).to.be.true;

        return cookieExists;
      })
  );
    
})


