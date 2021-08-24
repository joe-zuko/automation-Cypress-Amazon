/// <reference types="cypress" />


class SearchResults {   


    myChoice(text) {
        cy.get(`.s-desktop-content [alt='${text}']`).click()
    }


}

export default SearchResults
