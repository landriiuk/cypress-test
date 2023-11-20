export class BasePage {
    getLogo() {
        return cy.xpath('//a[@class="logo"]');
    }
}