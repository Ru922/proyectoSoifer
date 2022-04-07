///<reference types = "cypress"/>

describe('Search elements', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Search for elements with multiple results', () => {
        cy.search('dress');
            cy.fixture('results.json').then((result)=>{
            cy.get(result.title).should('contain','dress')
        })
    })

    it('Search with no results', () => {
        cy.search('qwerty');
            cy.fixture('results.json').then((result)=>{
            cy.get(result.alert).should('contain','No results were found for your search');
        });
    });
;
})
