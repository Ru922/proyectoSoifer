describe('Log in test', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('log in sad path', () => {
        cy.login('pepe','asdasd')
    })
})