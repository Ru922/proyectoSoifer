///<reference types = "cypress"/>

describe('Search elements', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Search for elements with multiple results', () => {
        cy.fixture('search.json').then((locators) => {
            cy.get(locators.searchBox).type('dress');
            cy.get(locators.searchButton).click()
        })
        
        cy.fixture('results.json').then((result)=>{
            cy.get(result.title).should('contain','dress')
        })
    })

    it('')

})
