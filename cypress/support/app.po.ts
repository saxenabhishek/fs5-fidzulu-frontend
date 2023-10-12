export class AppPageObject { 
    navigateToHomePage() { 
        cy.visit("/"); 
    }
    navigateToAboutPage(){
        cy.visit("/about");
    }
    navigateToProductsPage(){
        cy.visit("/products");
    }
    navigateToContactUsPage(){
        cy.visit("/contact");
    }
}