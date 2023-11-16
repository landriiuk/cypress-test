//pages/tables/smart-table
describe('Table tests', () => {
    beforeEach(() => cy.visit('/pages/tables/smart-table'))

    it("To make object from received data", () => {
        cy.get('[placeholder="ID"]').type(12);
        cy.wait(1000);
        let elems = {};
        const arr = []
        cy.get("tbody tr td").find("[ng-reflect-ng-switch]").invoke("toArray").each(($row, index) => {
            arr.push($row.text());

            elems["first_row"] = {
                id: arr[0],
                firstName: arr[1],
                lastName: arr[2],
                userName: arr[3],
                email: arr[4],
                age: arr[5],
            };

        })
        cy.log(elems)
        console.log(cy.wrap(elems));

    });

    it("To make object from received data", () => {
        let finalArrObj = [];
        cy.get("tbody tr").each((el) => {
            let row = {
                id: el.find('td:nth-child(2) ng2-smart-table-cell').text(),
                firstName: el.find("td:nth-child(3)  ng2-smart-table-cell").text(),
                lastName: el.find("td:nth-child(4)  ng2-smart-table-cell").text(),
                username: el.find("td:nth-child(5)  ng2-smart-table-cell").text(),
                email: el.find("td:nth-child(6)  ng2-smart-table-cell").text(),
                age: el.find("td:nth-child(7)  ng2-smart-table-cell").text()
            }
            finalArrObj.push(row);
        })

        cy.log(finalArrObj);

        cy.wrap().then(() => {
            for (const row of finalArrObj) {
                if (row.id === "3") {
                    expect(row).to.be.an("object");
                    expect(row).to.have.any.keys('age');

                    // do some action
                }
            }
        })
    });

    it('get table plugin', () => {
        let table = [];
        cy.get("table").getTable().then((el) => {
            expect(el).to.be.an("array");
            expect(el[0]).to.have.property(" Age ");
            expect(el[0]).to.include({ " ID ": "test" });
            table.push(el);
        });
        cy.log(table);
    });

    it('get columns from the table', () => {
        // cy.get("table").getTable({ onlyColumns: " First Name " }).then((el) => {

        cy.get("table").getTable({ onlyColumns: Object.keys({ " Age ": "50", " First Name ": null }) }).each((el) => {
            expect(el).not.empty;
            expect(el).to.include({ " Age ": "28" });
        });
    });
});