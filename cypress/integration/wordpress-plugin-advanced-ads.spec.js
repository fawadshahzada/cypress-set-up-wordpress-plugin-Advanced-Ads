describe('Visit wordpress Admin site', () => {

    const menuAdvancedAds = '#toplevel_page_advanced-ads > .wp-has-submenu > .wp-menu-name'
    const menuAds = '#toplevel_page_advanced-ads > .wp-submenu > :nth-child(3) > a'
  
    
    it('Login user and verify if the backend was properly reached', () => {
  
        //Visit wordpress admin panel    
        cy.visit('https://test-setup.com/cypressfawad/')

        //Get username field selector and type username 
         cy.login('Fawad', 'T((hmktt@@2')

        //Click on wordpress admin logo
        cy.get('#wp-admin-bar-wp-logo')
        .should('be.visible')
        .click()

        //Verify dashboard menu item text
        cy.get('div.wp-menu-image.dashicons-before.dashicons-dashboard ~ .wp-menu-name')
        .should('have.text', 'Dashboard')

    })
    it('open the general settings of the WordPress installation and check if the right destination is reached', () => {
        
        //Visit wordpress admin panel    
        cy.visit('https://test-setup.com/cypressfawad/')

        //Get username field selector and type username 
         cy.login('Fawad', 'T((hmktt@@2')

        //Click on wordpress admin logo
        cy.get('#wp-admin-bar-wp-logo')
        .should('be.visible')
        .click()

       //Click on setting Icon
        cy.get('div.wp-menu-image.dashicons-before.dashicons-admin-settings')
        .click()

        //Verify and Click on general
        cy.get('[aria-current="page"]')
        .should('have.text', 'General')
        .click()
        //Verify Page title "General Setting"
        cy.get('h1')
        .should('have.text', 'General Settings')


    })

    it('Navigate Advanced Ads Plugin and Check if there are any ad units in the Advanced Ads ad list', () => {
        
        //Visit wordpress admin panel    
        cy.visit('https://test-setup.com/cypressfawad/')

        //Get username field selector and type username 
        cy.login('Fawad', 'T((hmktt@@2')

        //Click on wordpress admin logo
        cy.get('#wp-admin-bar-wp-logo')
        .should('be.visible')
        .click()

        //Verify and click if the Advanced Ads is visible in the side bar
        cy.get(menuAdvancedAds)
        .should('contain.text', 'Advanced Ads')
        .click()

        //Click on Ads
        cy.get(menuAds)
        .should('contain.text','Ads')
        .click()

        // Verify text "No Ads found"  if there are no ads on the list
        cy.get('#the-list > tr')
        .should('have.text', 'No Ads found')

    })

    it('Create new ads', () => {
        
        //Visit wordpress admin panel    
        cy.visit('https://test-setup.com/cypressfawad/')

        cy.login('Fawad', 'T((hmktt@@2')

        //Click on wordpress admin logo
        cy.get('#wp-admin-bar-wp-logo')
        .should('be.visible')
        .click()

        //Verify and click if the Advanced Ads is visible in the side bar
        cy.get(menuAdvancedAds)
        .should('contain.text', 'Advanced Ads')
        .click()

        //Click on Ads
        cy.get(menuAds)
        .should('contain.text','Ads')
        .click()

        // Verify text "No Ads found"  if there are no ads on the list
        cy.get('#the-list > tr')
        .should('have.text', 'No Ads found')

        //Click on Ads new ads 
        cy.get('.page-title-action')
        .should('have.text', 'New Ad')
        .click()

        //Type dummay title
        cy.get('#title')
        .type('Dummay ads')

        //Select dummay radia button
        cy.get('.advanced-ads-type-list-dummy > label')
        .should('be.visible')
        .click()

        //click on Add description button
        cy.get('#advads-ad-description > button')
        .should('be.visible')
        .click()

        //Type description
        cy.get('#advads-ad-description > textarea')
        .type('Dummay description')

        //Click on publish button
        cy.get('#publish')
        .should('be.visible')
        .click()

        //Click again on Ads in navbar and verify if ads added succesfully
        //Click on Ads
        cy.get(menuAds)
        .should('contain.text','Ads')
        .click()
        //Verify if the "Dummay ads" title is present
        cy.get('.row-title')
        .should('contain.text', 'Dummay ads')
        //Verify ad details
        cy.get('.advads-ad-type')
        .should('contain.text', "Dummy")


    })

    it('Delete ad', () => {
        
        //Visit wordpress admin panel    
        cy.visit('https://test-setup.com/cypressfawad/')

        cy.login('Fawad', 'T((hmktt@@2')

        //Click on wordpress admin logo
        cy.get('#wp-admin-bar-wp-logo')
        .should('be.visible')
        .click()

        //Verify and click if the Advanced Ads is visible in the side bar
        cy.get(menuAdvancedAds)
        .should('contain.text', 'Advanced Ads')
        .click()

        //Click on Ads
        cy.get(menuAds)
        .should('contain.text','Ads')
        .click()

       //Delete Ads
       //Select ads
       cy.get('#cb').should('be.visible').click()
       //Click on Bulk Action button 
       cy.get('#bulk-action-selector-bottom')
       .select('Move to Trash')

       // //click on Apply button
       cy.get('#doaction2')
       .should('be.visible')
       .click()

       // Verify text "No Ads found"  if there are no ads on the list
       cy.get('#the-list > tr')
       .should('have.text', 'No Ads found')
    })
})