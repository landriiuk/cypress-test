export class FormPage {
    getOptionFromTheGrid(option) {
        return cy.get(`span:contains(${option})`);
    }
    
    getEmailField(){
        return cy.get('[data-cy="imputEmail1"]');
    }
}