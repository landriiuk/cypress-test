import { TableInteractionsPage } from '../pageObjects/tablePage/tableInteractionsPage';

const tableInteractions = new TableInteractionsPage();
export let elems = [];
export let table2 = [];
export function typeIdIntoHeaderColumn(data) {
    tableInteractions.getIdColumnHeader().type(data);
}

export function verifyTableElements(arrayWithElements) {
    cy.wait(2000);
    tableInteractions.getEachColumnFromTable().each(($el) => {
        let elem = $el.text();
        elems.push(elem);
    }).then(() => {
        expect(elems).to.be.eql(arrayWithElements);
    });
}

export function verifyAllTable(properties, object) {
    tableInteractions.getAllTable().then((el) => {
        expect(el).to.be.an("array");
        expect(el[0]).to.have.property(properties);
        expect(el[0]).to.include(object);
        table2.push(el);
    });
}

