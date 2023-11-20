//pages/tables/smart-table
describe('Table tests', () => {
    it.skip('Verify prev()', () => {
        const elems = []

        cy.visit('/pages/tables/smart-table');
        cy.get('[placeholder="ID"]').type(12);
        cy.wait(1000);
        cy.get("tbody tr td").then(($el) => {
            let elem = $el.text();
            elems.push(elem);
            // cy.wrap($el).find('[ng-reflect-ng-switch="number"]').first().invoke("text").then(($text) => {
            //     cy.log($text)
            // });
            // cy.log($el.text())
            // cy.log(elems)
        });
        cy.log(elems)
    });

    it("Get each elements from table, and verify length", () => {
        const elems = []
        const elementsToVerify = ['12', 'Jacob', 'Thornton', '@jacob', 'jacob@yandex.ru', '48']
        cy.visit('/pages/tables/smart-table');
        cy.get('[placeholder="ID"]').type(12);

        cy.get("tbody tr td").find("[ng-reflect-ng-switch]").each(($el) => {
            let elem = $el.text();
            elems.push(elem);
        }).then(() => {
            expect(elems[0][0]).to.include(1);
            // expect(elems).to.eql(elementsToVerify);
            // expect(elems).to.have.length(6);
        });
        cy.log(elems)

        // elems.forEach((select)=>{
        //     cy.get(`[data-test= id${select}]`).click();
        //     cy.go("back");
        // });
    });

    it("Stepper each ", () => {
        cy.visit("/pages/layout/stepper");
        let array = [];
        let array2 = ['First step', 'Second step', 'Third step', 'Fourth step']
        cy.get(".header:eq(0)").find(".label").each(($el) => {
            cy.wrap($el).click();
            cy.log($el.text());
            array.push($el.text())
        });
        cy.log(array);

        // array.forEach((el, index) => {
        //     cy.get("next").should("contain.text", array[index])
        // })

        for (let index = 0; index < array.length; index++) {
            cy.get("next").should("contain.text", array[index]);
        }
    });

    it.only("To make object from received data", () => {
        cy.visit('/pages/tables/smart-table');
        // first option

        // cy.get('[placeholder="ID"]').type(12);
        // cy.wait(1000);
        // let elems = {};
        // const arr = []
        // cy.get("tbody tr td").find("[ng-reflect-ng-switch]").invoke("toArray").each(($row, index) => {
        //     arr.push($row.text());

        //     elems["first_row"] = {
        //         id: arr[0],
        //         firstName: arr[1],
        //         lastName: arr[2],
        //         userName: arr[3],
        //         email: arr[4],
        //         age: arr[5],
        //     };

        // })
        // cy.log(elems)
        // console.log(cy.wrap(elems));

        // second option
        let arrHeaders = []

        cy.get("tbody tr").each((el) => {
            let row = {
                id: el.find('td:nth-child(2) ng2-smart-table-cell').text(),
                firstName: el.find("td:nth-child(3)  ng2-smart-table-cell").text(),
                lastName: el.find("td:nth-child(4)  ng2-smart-table-cell").text(),
                username: el.find("td:nth-child(5)  ng2-smart-table-cell").text(),
                email: el.find("td:nth-child(6)  ng2-smart-table-cell").text(),
                age: el.find("td:nth-child(7)  ng2-smart-table-cell").text()
            }
            arrHeaders.push(row)
        });
        cy.log(arrHeaders)



    });

    it("Should", () => {
        cy.visit("/pages/tables/smart-table")
        cy.get("nb-card-header").its("length").then(($el) => {
            for (let index = 0; index < $el; index++) {

            }

            cy.get("tbody").getTable()
            // // el = 1, 2, 3
            // cy.log($el);
            // expect($el).to.have.length("1");
            // // expect($el).to.have.text("");
            // // expect($el).to.not.have.attr("attr")
        })
    });

});