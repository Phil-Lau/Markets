import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
Given(/^I access the exchange market page$/, () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        //Ignore uncaught exceptions returned by the site itself on load
        return false
    })    
    cy.visit('https://crypto.com/exchange/markets');
       
    //cy.get('.d-desc > div > .e-button').click();
});

And(/^I dismissed the disclaimer pop ups$/, () => {
    
    cy.get('.e-modal').get('.d-desc > div > .e-button').click();
    cy.get('.e-modal').get('.d-desc > div > .e-button').click(); 
});

When(/^I selected the USDT tab$/, () => {
    
    //cy.get('.e-tabs__nav > .active').click();
    //cy.get('.e-tabs__nav > :nth-child(2)').click();
});

And(/^I click on the Trade button against ZIL USDT$/, () => {
    cy.get(':nth-child(185) > :nth-child(7) > .cell > .btn-trade').scrollIntoView().click();
});

Then(/^I am taken to the trade page$/, () => {
    cy.url().should('eq', 'https://crypto.com/exchange/trade/spot/ZIL_USDT');
});


