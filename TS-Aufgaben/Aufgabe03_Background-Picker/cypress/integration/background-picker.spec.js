const chaiColors = require('chai-colors')
chai.use(chaiColors)


describe('Background Picker Test', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should change background color when hex color typed', () => {
        cy.get('[data-test="input"]').type('#000000');
        cy.get('[data-test="background"').should('have.css', 'background-color').and('be.colored', '#000000');
    })

    it('should type a color, delete it and expect background to be white', () => {
        cy.get('[data-test="input"]').type('#000000');
        cy.get('[data-test="input"').clear()
        cy.get('[data-test="background"').should('have.css', 'background-color').and('be.colored', '#FFFFFF');
    });

    it('should change background color when rgb color typed', () => {
        cy.get('[data-test="input"]').type('rgb(100, 100, 100)');
        cy.get('[data-test="background"').should('have.css', 'background-color').and('be.colored', 'rgb(100, 100, 100)')
    });

    it('should type invalid rgb color and expect background to be white', () => {
        cy.get('[data-test="input"]').type('rgb(999, 100, 100)');
        cy.get('[data-test="background"').should('have.css', 'background-color').and('be.colored', '#FFFFFF');
    });
})
