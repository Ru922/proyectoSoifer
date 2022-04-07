Cypress.Commands.add('login',(mail,pass) => {
    cy.fixture('login.json').then((data) => {
        cy.get(data.singIn).click();
        cy.get(data.eField).type(mail);
        cy.get(data.pField).type(pass);
        cy.get(data.submit).click();
        cy.get(data.error).should('contain', 'There is 1 error' || 'asdasd')
    })})
