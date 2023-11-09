describe('Login suite', () => {

    it.skip('Verify button text should fail', () => {
        cy.visit('/auth/login');
        // cy.wait(1000);
        cy.contains("Log In").should("be.disabled");

        cy.get('[name="email"]').clear().type('test@email.com')
            .should("have.value", 'test@email.com')
            .and("have.attr", "ng-reflect-model")

        cy.get('[for="input-email"]').should(($el) => {
            expect($el).to.have.text("Email address:");
            expect($el).to.have.text("Email address:");
            expect($el).to.have.text("Email address:");
        })
            .should("have.text", "Email address:")
            .should("contain", "Email address:")
            .should("include.text", "Email address:")


        // cy.contains(); -> get + exist should("exist").
        // should("contain", "text")

        //    .wait(1000)
        //    .and("have.attr", "ng-reflect-model", 'test@email.com')
        // cy.get('#input-password').type('ghlksdwnfjwb')
        // cy.get('.nb-theme-default nb-checkbox .custom-checkbox ')
        // .should("have.css", 'background-color', 'rgb(237, 241, 247)')
        // .should("have.css", 'border-style');

        // // .should("have.css", "border-color",'rgb(237, 241, 247)' )
        // //#edf1f7, but the value was rgb(237, 241, 247) 
        // // rgb(237, 241, 247)
        // cy.get('[type="checkbox"]').check({force:true})
        // .should('be.checked')
        // .should("be.visible")
        // .should("not.be.disabled")
        // .and("have.length", "1")

        // cy.get('[type="checkbox"]').uncheck({force:true}).should("not.be.checked")

        // cy.contains("Log In").invoke('hover').click();

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

    //     it('Verify social media', () => {
    //         cy.visit('/auth/login');
    // // cy.get(".socials .ng-star-inserted").scrollIntoView()
    // // .should("have.attr","ng-reflect-icon")
    // // .should("have.a.property", "ng-reflect-icon","github")

    // // cy.get(".socials .ng-star-inserted").scrollTo('bottom').then(()=>{
    // //     cy.get(".socials .ng-star-inserted")
    // //         .should("have.attr","ng-reflect-icon")
    // //         .should("have.a.property", "ng-reflect-icon","github")
    // // })

    // cy.get("#title").should("have.class", "title")
    // cy.get(".title").should("have.id", "title")
    //     });

    it("Scroll into view", () => {
        cy.visit('/auth/login');
        cy.get(".nb-theme-default").scrollIntoView();
        cy.get('[ng-reflect-icon="github"]').scrollIntoView().should('be.visible');
    })
});