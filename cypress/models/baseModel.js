import { BasePage } from '../pageObjects/basePage';

const basePage = new BasePage();

export function clickOnLogo() {
    basePage.getLogo().click();
}

// export {clickOnLogo}
