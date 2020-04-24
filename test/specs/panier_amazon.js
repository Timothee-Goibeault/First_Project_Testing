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
        const cart_button = $('//*[@id="nav-cart"]')
        cart_button.click()
        $('/html/body/div[1]/div[4]/div/div[5]/div/div[2]/div[3]/form/div[2]/div[3]/div[4]/div/div[1]/div/div/div[2]/div[1]/span[2]/span/input').click()
        
    })
    it('should put 1 item on aside', () => {
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
        const cart_button = $('//*[@id="nav-cart"]')
        cart_button.click()
        const link_set_aside = $('/html/body/div[1]/div[4]/div/div[5]/div/div[2]/div[3]/form/div[2]/div[3]/div[4]/div/div[1]/div/div/div[2]/div[1]/span[3]/span/input')
        link_set_aside.click(), () => {
            expect(nb_items_in_cart.getText()).to.equal('0')
        }
        const link_see_item_aside = $('/html/body/div[1]/div[4]/div/div[5]/div/div[2]/div[5]/form/div/span/input')
        const link_move_to_cart  = $('/html/body/div[1]/div[4]/div/div[5]/div/div[2]/div[6]/form/div[3]/div/div[4]/div/div[1]/div/div/div[2]/div[1]/span[2]/span/input')
        link_see_item_aside.click()
        link_move_to_cart.click()
        const remove_button = $('/html/body/div[1]/div[4]/div/div[5]/div/div[2]/div[3]/form/div[2]/div[3]/div[4]/div/div[1]/div/div/div[2]/div[1]/span[2]/span/input')
        remove_button.click()
        
    })
    it('should remove 1 item on the cart', () => {
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
        const cart_button = $('//*[@id="nav-cart"]')
        cart_button.click()
        const remove_button = $('/html/body/div[1]/div[4]/div/div[5]/div/div[2]/div[3]/form/div[2]/div[3]/div[4]/div/div[1]/div/div/div[2]/div[1]/span[2]/span/input')
        remove_button.click()
        expect(nb_items_in_cart.getText()).to.equal('0')
        
    })
    it('should put 1 item aside on the cart', () => {
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
        const cart_button = $('//*[@id="nav-cart"]')
        cart_button.click()
        const link_set_aside = $('/html/body/div[1]/div[4]/div/div[5]/div/div[2]/div[3]/form/div[2]/div[3]/div[4]/div/div[1]/div/div/div[2]/div[1]/span[3]/span/input')
        link_set_aside.click(), () => {
        expect(nb_items_in_cart.getText()).to.equal('0')
        const link_see_item_aside = $('/html/body/div[1]/div[4]/div/div[5]/div/div[2]/div[5]/form/div/span/input')
        const link_move_to_cart  = $('/html/body/div[1]/div[4]/div/div[5]/div/div[2]/div[5]/form/div[3]/div/div[4]/div/div[1]/div/div/div[2]/div[1]/span[2]/span/input')
        link_see_item_aside.click()
        link_move_to_cart.click()
        expect(nb_items_in_cart.getText()).to.equal('1')
        const remove_button = $('/html/body/div[1]/div[4]/div/div[5]/div/div[2]/div[3]/form/div[2]/div[3]/div[4]/div/div[1]/div/div/div[2]/div[1]/span[2]/span/input')
        remove_button.click()
    }
        
    })
})