describe('Login suite', () => {

    it('Verify button text should fail', () => {
        cy.visit('/auth/login');
        cy.get('[name="email"]').clear().type('test@email.com').should('include.text', '')
        cy.get('#input-password').type('ghlksdwnfjwb').should('have.text', 'your text')
        cy.get('[type="checkbox"]', {withinSubject:true}).check({force:true});
        cy.get('[type="checkbox"]').uncheck({force:true})
        cy.contains("Log In").invoke('hover').click();

        // cy.get('.ng-pristine').last().type('text')
        // cy.get('[aria-label]').next();
    });


    it.skip('show next()', () => {
        cy.visit('/pages/forms/layouts');
        // cy.contains('Using the Grid').parentsUntil()
     cy.get('.col-md-6').first().siblings().as('options')
     cy.get('@options').click();
        // cy.contains('Using the Grid').parent().find('.inner-circle').first().siblings().as('options')
        // .click();
        // cy.contains('Using the Grid').parent().find('[name="undefined"]').nextUntil({timeout:4000})

        // inner-circle
        //   cy.find("abbr")
        // cy.get().then(()=>{
        //     cy.visit()
        // })

        // cy.get('position-select appearance-outline size-medium shape-rectangle').select('top-right')
    });

});