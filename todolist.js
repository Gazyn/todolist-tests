// todolist.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Check initial state', () => {
    it('Goes to page, checks for things existing and to-do being empty', () => {

        cy.visit('https://myitside.com/to-do/').wait(1000)

        cy.get('#item').should('be.visible') //Input field exists
        cy.get('#item').siblings().should('be.visible') //Add button exists

        cy.get('#todo').should('be.visible') //To-do exists and is empty
        cy.get('#todo').children().should('have.length', 0)

        cy.get('#completed').should('be.visible') //Completed tasks exists and is empty
        cy.get('#completed').children().should('have.length', 0)
        

    })
})


describe('Add to-do item', () => {
    it('Adds 3 items', () => {

        cy.get('#item').type('Test1')
        cy.get('#item').siblings().click()
        cy.get('#item').type('Test2')
        cy.get('#item').siblings().click()
        cy.get('#item').type('Test3')
        cy.get('#item').siblings().click()

        cy.get('#todo').children().should('have.length', 3)
        cy.get('#completed').children().should('have.length', 0)
    })
})


describe('Check to-do item', () => {
    it('Checks 2 items', () => {

        cy.get('#todo').children().first().children().children().last().should('be.visible') //Button to check task exists

        cy.get('#todo').children().last().children().children().last().click()
        cy.get('#todo').children().last().children().children().last().click()

        cy.get('#todo').children().should('have.length', 1)
        cy.get('#completed').children().should('have.length', 2)
    })
})

describe('Uncheck finished to-do item', () => {
    it('Unchecks 1 item', () => {
        
        cy.get('#completed').children().first().children().children().last().should('be.visible') //Button to uncheck task exists

        cy.get('#completed').children().first().children().children().last().click()

        cy.get('#todo').children().should('have.length', 2)
        cy.get('#completed').children().should('have.length', 1)
    })
})

describe('Delete to-do item', () => {
    it('Deletes 1 item', () => {

        cy.get('#todo').children().first().children().children().first().should('be.visible') //Button to delete to-do task exists

        cy.get('#todo').children().first().children().children().first().click()

        cy.get('#todo').children().should('have.length', 1)
        cy.get('#completed').children().should('have.length', 1)
    })
})


describe('Delete finished to-do item', () => {
    it('Deletes 1 item', () => {
        
        cy.get('#completed').children().first().children().children().first().should('be.visible') //Button to delete completed task exists

        cy.get('#completed').children().first().children().children().first().click()

        cy.get('#todo').children().should('have.length', 1)
        cy.get('#completed').children().should('have.length', 0)
    })
})