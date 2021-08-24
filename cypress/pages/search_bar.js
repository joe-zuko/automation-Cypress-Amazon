/// <reference types="cypress" />


class SearchBar {   

    elements() {
        const elementsList = {
            searchBar: "input#twotabsearchtextbox"
        }

        return elementsList
    }

     find(text) {
        cy.get(this.elements().searchBar).type(`${text}{enter}`).should('be.visible')
    }

}

export default SearchBar