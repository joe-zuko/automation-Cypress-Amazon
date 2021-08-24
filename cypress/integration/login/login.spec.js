/// <reference types="Cypress" />

import Login from '../../pages/login'
import '../../support/commands'

const login = new Login()


describe('Login', function () {

    beforeEach( () =>  {
        
        cy.visit('/login')
        
        cy.fixture('user_data')
        .then(user => {
            this.user = user;
        })

        cy.fixture('messages')
        .then(msg => {
            this.msg = msg;
        })
    });

    it('Empty User Name', () => {
    
        login.enterEmail(this.user.invalid_user.empty_email)
        login.verifyEmptyEmail(this.msg.empty_email)
    })

  
    it('Wrong User Name', () => {
    
        login.enterEmail(this.user.invalid_user.email)
        login.verifyInvalidUser(this.msg.alert_user_message)
    })
 
    it('Empty Password', () => {

        login.enterEmail(this.user.valid_user.email)
        login.enterPassword(this.user.invalid_user.empty_password)
        login.verifyEmptyPassword(this.msg.empty_password)
    })

    it('Wrong Password', () => {
    
        login.enterEmail(this.user.valid_user.email)
        login.enterPassword(this.user.invalid_user.wrong_password)
        login.verifyInvalidUser(this.msg.msg_wrong_pass)
    })  
 
    it('Login Successfully', () => {
    
        login.enterEmail(this.user.valid_user.email)
        login.enterPassword(this.user.valid_user.password)
        login.verifyUserName(this.msg.login_message)
    })
})