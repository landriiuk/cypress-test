import { elems, typeIdIntoHeaderColumn, verifyAllTable, verifyTableElements } from '../../../models/tableModel';
// import { TableInteractionsPage } from '../../../pageObjects/tablePage/tableInteractionsPage';
import { elementsToVerify, expectedObjectFromTable, tableProperty } from '../testData/tableData';

describe('Table tests', () => {
    // let tableInteractions = new TableInteractionsPage();
    beforeEach(() => {
        cy.visit('/pages/tables/smart-table');
    });

    it("Get each elements from table, and verify length", () => {
        typeIdIntoHeaderColumn(elementsToVerify[0]);
        verifyTableElements(elementsToVerify);
        cy.log('Out of scope', elems);
        // tableInteractions.typeIdIntoHeaderColumn(12);
    });

    it("Get all table elements by getTable() to verify them", () => {
        verifyAllTable(tableProperty, expectedObjectFromTable);
    });

});