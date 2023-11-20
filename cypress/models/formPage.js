import { FormPage } from '../pageObjects/formPage';

const formPage = new FormPage();

export function verifyIfOptionIsVisible(option) {
    formPage.getOptionFromTheGrid(option).should("be.visible");
    // .prevUntil('.outer-circle',);
}

export function clickOnOption(option) {
    formPage.getOptionFromTheGrid(option).realClick({ pointer: 'mouse' });
}

export function realTypeIntoEmailField(){
   formPage.getEmailField().typeEnter('test@user.com');
}

export function typeSensitiveIntoEmailField(){
    formPage.getEmailField().type('test@user.com', { sensitive: true });
}


