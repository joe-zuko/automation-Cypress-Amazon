/// <reference types="Cypress" />

import Login from '../../pages/login'
import SearchBar from '../../pages/search_bar'
import ProductPage from '../../pages/product'
import SearchResults from '../../pages/results'
import Cart from '../../pages/cart'
import Checkout from '../../pages/checkout'
import '../../support/commands'

const login = new Login()
const search = new SearchBar()
const product_page = new ProductPage()
const search_results = new SearchResults()
const cart = new Cart()
const checkout = new Checkout()

describe('Shop', function () {

    beforeEach( () =>  {
        
        cy.visit('/')
        
        cy.fixture('user_data')
        .then(user => {
            this.user = user;
        })

        cy.fixture('messages')
        .then(msg => {
            this.msg = msg;
        })

        cy.fixture('products')
        .then(products => {
            this.products = products;
        })
    });

    it('Buy a product', () => {
        
        cy.visit('/login')
        login.enterEmail(this.user.valid_user.email)
        login.enterPassword(this.user.valid_user.password)
        
        search.find(this.products.product_4)
        search_results.myChoice(this.products.product_4)
        product_page.priceVerification()
        product_page.addCart()
        product_page.goCart()
        cart.goShop()
        checkout.buyProduct()
        checkout.priceVerification()
        
    })


    it('Add Cart', () => {
    
        search.find(this.products.product_2)
        search_results.myChoice(this.products.product_2)
        product_page.priceVerification()
        product_page.addCart()
        product_page.addMoreProducts(this.products.product_1, this.products.product_3)
        product_page.goCart()
        cart.priceVerification()
    })

    it('Remove Cart', () => {
    
        search.find(this.products.product_2)
        search_results.myChoice(this.products.product_2)
        product_page.priceVerification()
        product_page.addCart()
        product_page.goCart()
        cart.remove()

    })
  
})