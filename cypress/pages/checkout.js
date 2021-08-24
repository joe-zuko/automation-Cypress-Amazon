/// <reference types="cypress" />


class Checkout {   

    elements() {
        const elementsList = {
            buttonAddress: "#address-book-entry-0 .ship-to-this-address",
            buttonContinue: "//form/div[2]/div/div/div/span/span/input",
            buttonTicket: "label [type='radio']",
            totalOrder: "#subtotals-marketplace-table [data-testid=''] .a-size-medium.a-text-right",
            totalValue: "//*[@id='subtotals-marketplace-table']/tbody/tr[1]/td[2]",
            shippingValue: "//*[@id='subtotals-marketplace-table']/tbody/tr[2]/td[2]",
            productDescount: "//*[@id='subtotals-marketplace-table']/tbody/tr[4]/td[2]"
        }

        return elementsList
    }

    buyProduct() {
        cy.get(this.elements().buttonAddress).click() 
        cy.get(this.elements().buttonTicket).click() 
        cy.xpath(this.elements().buttonContinue).click()
        cy.contains('Frete GRÁTIS').should('be.visible').click()  
    }
   
    priceVerification() {
 
        // products values
        const totalOrder = cy.removeString(this.elements().totalOrder)
        const totalValue = cy.removeStringXpath(this.elements().totalValue)
        
        // verification values

        totalOrder.then(($totalOrder => {
            
            totalValue.then(($totalValue) => {
                expect($totalValue).to.eq($totalOrder)
            
            })
            
        }))
    }  

}

export default Checkout
