/// <reference types="cypress" />


class Cart {   

    elements() {
        const elementsList = {
            shopButton: "#sc-buy-box-ptc-button",
            trashButton: "input[type='submit'][data-action='delete']",
            removeMessage: ".sc-your-amazon-cart-is-empty",
            totalValue: "#sc-subtotal-amount-activecart",
            totalValueBox: "#sc-subtotal-amount-buybox",
            priceone: "[data-item-count='1'] .sc-product-price",
            pricetwo: "[data-item-count='2'] .sc-product-price",
            pricethree: "[data-item-count='3'] .sc-product-price"
        }

        return elementsList
    }

    
    priceVerification() {
 
        // shop products
        const buy_1 = cy.removeString(this.elements().priceone)
        const buy_2 = cy.removeString(this.elements().pricetwo)
        const buy_3 = cy.removeString(this.elements().pricethree)

        // products values
        const total_value = cy.removeString(this.elements().totalValue)
        const total_value_box = cy.removeString(this.elements().totalValueBox)
        
        // verification values
        buy_1.then(() => {

            buy_2.then(() => { 

                buy_3.then(($added_values) => { 
                    
                    total_value.then(($total_value) => {
                        expect($added_values).to.eq($total_value)

                        total_value_box.then(($total_value_box) => {
                            expect($total_value).to.eq($total_value_box)
                        
                        })
                        
                    })                  

                })
            })
        })
    }

    addCart() {
        cy.get(this.elements().cartButton).click()
    }

    goCart() {
        cy.get(this.elements().addCartButton).click()
    }

    goShop() {
        cy.get(this.elements().shopButton).click()
    }

    addMoreProducts(first, second) {
        cy.get(`[alt='${first}']`).trigger('mouseover')
        cy.get(`[title='${first}']`).should('be.visible').click()
        this.addCart()
        cy.get(`[alt='${second}']`).trigger('mouseover')
        cy.get(`[title='${second}']`).should('be.visible').click()
        this.addCart()
    }

    remove() {
        cy.get(this.elements().trashButton).click()      
    }

    

}

export default Cart
