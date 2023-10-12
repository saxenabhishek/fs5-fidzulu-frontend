import { AppPageObject } from "cypress/support/app.po"; 


let appPage: AppPageObject = new AppPageObject();

describe('Footer Test', () => {
    it('Check title', () => {
      appPage.navigateToHomePage();
      cy.get('footer div div div a span ').contains('FidZulu');
      cy.get('footer div div div a span ').contains('FidZulu').click();
      appPage.navigateToHomePage();
    });

    it('Resource test', () => {
        appPage.navigateToHomePage();
        cy.get('footer div div div div h2 ').contains('Resources');
        cy.get('footer div div div div ul li a ').contains('FidZulu');
        cy.get('footer div div div div ul li a ').contains('FidZulu').click();
        appPage.navigateToHomePage();
        cy.get('footer div div div div ul li a ').contains('Tailwind CSS');
        cy.get('footer div div div div ul li a ').contains('Tailwind CSS').click();
        appPage.navigateToHomePage();
    });

    it('Follow Us test', () => {
        appPage.navigateToHomePage();
        cy.get('footer div div div div h2 ').contains('Follow us');
        cy.get('footer div div div div ul li a ').contains('Github');
        appPage.navigateToHomePage();
        cy.get('footer div div div div ul li a ').contains('Discord');
        appPage.navigateToHomePage();
    });

    it('Legal test', () => {
        appPage.navigateToHomePage();
        cy.get('footer div div div div h2 ').contains('Legal');
        cy.get('footer div div div div ul li a ').contains('Privacy Policy');
        appPage.navigateToHomePage();
        cy.get('footer div div div div ul li a ').contains('Terms & Conditions');
        appPage.navigateToHomePage();
    });

    it('Copyright test', () => {
        appPage.navigateToHomePage();
        cy.get('footer div div span ').contains('© 2023');
        cy.get('footer div div span a').contains('FidZulu™');
        cy.get('footer div div span ').contains(' All Rights Reserved.');
        // cy.get('footer div div div div ul li a ').contains('Privacy Policy');
        // appPage.navigateToHomePage();
        // cy.get('footer div div div div ul li a ').contains('Terms & Conditions');
        appPage.navigateToHomePage();
    });

})