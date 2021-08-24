/// <reference types="cypress" />


class ProductPage {   

    elements() {
        const elementsList = {
            coverPrice:     "span.a-color-base .a-size-base",
            modalPriceCart: "#price",
            addCartButton:   "#nav-cart-count-container",
            cartButton:      "[name='submit.add-to-cart']",
        }

        return elementsList
    }

    priceVerification() {
 
        const b = cy.removeWhiteSpaces(this.elements().coverPrice)

        b.then(($value_1) => {
            cy.get(this.elements().modalPriceCart).invoke('text').then(($value_2) => { 
              expect($value_1).to.eq($value_2)
            })
        }) 
    }

    addCart() {
        cy.get(this.elements().cartButton).click()
    }

    goCart() {
        cy.get(this.elements().addCartButton).click()
    }

    addMoreProducts(first, second) {
        cy.get(`[alt='${first}']`).trigger('mouseover')
        cy.get(`[title='${first}']`).should('be.visible').click()
        this.addCart()
        cy.get(`[alt='${second}']`).trigger('mouseover')
        cy.get(`[title='${second}']`).should('be.visible').click()
        this.addCart()
    }

    

}

export default ProductPage
