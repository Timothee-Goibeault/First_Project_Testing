const assert = require('chai').assert
const expect = require('chai').expect

// On met dans describe une fonctionnalité (page, service, fonction,...) que l'on souhaite tester puis ',' la fonction 
// Correspond a une ensemble de tests
describe('Cart of Amazon.fr', () => {
    // On met dans it ce que va faire le test puis ',' la fonction 
    // Correspond à un test
    it('should add 1 item on the cart', () => {
        //On décrit ce que fait la fonction ici
        //On definit l'url du navigateur
        browser.url('https://amazon.fr')
        const best_sellers_button = $('//*[@id="nav-xshop"]/a[1]')
        best_sellers_button.click()
        //on récupère le titre du navigateur 
        const title = browser.getTitle()
        // on test sa valeur
        expect(title).to.equal('Amazon.fr Les meilleures ventes: Les articles les plus populaires sur Amazon')
        const link_jardin = $('//*[@id="zg_browseRoot"]/ul/li[25]/a')
        link_jardin.click()
        const first_item = $('//*[@id="zg-ordered-list"]/li[1]/span/div/span/a/span/div/img')
        first_item.click()
        const add_in_cart_button = $('//*[@id="add-to-cart-button"]')
        add_in_cart_button.click()
        const nb_items_in_cart = $('//*[@id="nav-cart-count"]')
        expect(nb_items_in_cart.getText()).to.equal('1')
    })
    it('should add 1 item on the cart', () => {
        //On décrit ce que fait la fonction ici
        //On definit l'url du navigateur
        browser.url('https://amazon.fr')
        const best_sellers_button = $('//*[@id="nav-xshop"]/a[1]')
        best_sellers_button.click()
        const link_jardin = $('//*[@id="zg_browseRoot"]/ul/li[25]/a')
        link_jardin.click()
        const first_item = $('//*[@id="zg-ordered-list"]/li[1]/span/div/span/a/span/div/img')
        first_item.click()
        const add_in_cart_button = $('//*[@id="add-to-cart-button"]')
        add_in_cart_button.click()
        const nb_items_in_cart = $('//*[@id="nav-cart-count"]')
        expect(nb_items_in_cart.getText()).to.equal('1')
        const cart_button = $('//*[@id="nav-cart"]/span[3]')
        cart_button.click()
        const link_
    })
})