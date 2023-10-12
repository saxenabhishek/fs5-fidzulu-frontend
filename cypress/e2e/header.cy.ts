import { AppPageObject } from "cypress/support/app.po"; 


let appPage: AppPageObject = new AppPageObject();

describe('Header Test', () => {
    it('Check title', () => {
      appPage.navigateToHomePage();
      cy.get('nav div a span').contains('Baravans');
    });

    it('Click Home Button', () => {
        appPage.navigateToHomePage();
        cy.get('nav div ul li a').contains('Home').click();
        appPage.navigateToHomePage();
    });

    it('Click About Button', () => {
        appPage.navigateToHomePage();
        cy.get('nav div ul li a').contains('About').click();
        appPage.navigateToAboutPage();
    });

    it('Click Products Button', () => {
        appPage.navigateToHomePage();
        cy.get('nav div ul li a').contains('Products').click();
        appPage.navigateToProductsPage();
    });

    it('Click Contact Us Button', () => {
        appPage.navigateToHomePage();
        cy.get('nav div ul li a').contains('Contact Us').click();
        appPage.navigateToContactUsPage();
        cy.get('div p').contains('404! Could not find that');
    });

})