/// <reference types="cypress" />

describe("Layout page test suite", () => {

    context("First test suite - context",() => {

        it("First test, url should contain", () => {
            cy.visit("pages/layout/accordion");   
            cy.url().should("contain","layout/accordion");
        });
    });
    
    describe("Second test suite - describe inside", () => {
         it("First test, should failed", () => {
            cy.visit("pages/layout/accordion");   
             cy.url().should("contain", "layout/accordion");
             cy.get(".appearance-filled").should("contain.text","Toggle First Ite234m");
        });
    });
    

});