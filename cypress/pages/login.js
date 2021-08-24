/// <reference types="cypress" />


class Login {   

    elements() {
        const elementsList = {
            emailField: "input[name='email']",
            passwordField: "input#ap_password",
            loginField: "#nav-link-accountList-nav-line-1",
            warningAlert: ".a-list-item",
            blankEmail: "#auth-email-missing-alert .a-alert-content",
            emptyPassword: "#auth-password-missing-alert"
        }

        return elementsList
    }

    visitLogin() {
        cy.visit(Cypress.env('login'))
    }


    enterEmail(userEmail) {
        cy.get(this.elements().emailField).type(`${userEmail}{enter}`).should('be.visible')
    }

    enterPassword(userPassword) {
        cy.get(this.elements().passwordField).type(`${userPassword}{enter}`).should('be.visible')
    } 

    verifyUserName(message) {
        cy.get(this.elements().loginField).should('have.text', message)
    }

    verifyInvalidUser(message) {
        cy.get(this.elements().warningAlert).contains(message)
    }

    verifyEmptyEmail(message) {
        cy.get(this.elements().blankEmail).contains(message)
    }

    verifyEmptyPassword(message) {
        cy.get(this.elements().emptyPassword).contains(message)
    }  
    
}

export default Login