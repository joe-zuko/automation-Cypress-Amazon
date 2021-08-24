require('cypress-xpath')

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(function () {
    cy.clearCookies()
    cy.clearLocalStorage()
})
