export class TableInteractionsPage {

    getIdColumnHeader() {
        return cy.get('[placeholder="ID"]');
    }

    getEachColumnFromTable() {
        return cy.get("tbody tr td").find("[ng-reflect-ng-switch]");
    }

    typeIdIntoHeaderColumn(id) {
        cy.get('[placeholder="ID"]').type(id).then(() => {
            cy.get('[placeholder="ID"]');
            cy.get('[placeholder="ID"]').each(() => {

            })
        })
    }

    getAllTable() {
        cy.get("table").getTable();
    }
}