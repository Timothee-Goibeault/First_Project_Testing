const assert = require('assert')

// On met dans describe une fonctionnalité (page, service, fonction,...) que l'on souhaite tester puis ',' la fonction 
// Correspond a une ensemble de tests
describe('webdriver.io page', () => {
    // On met dans it ce que va faire le test puis ',' la fonction 
    // Correspond à un test
    it('should have the right title', () => {
        //On décrit ce que fait la fonction ici
        //On definit l'url de la fonction
        browser.url('https://webdriver.io')
        //on récupère le titre du navigateur 
        const title = browser.getTitle()
        // on test sa valeur
        assert.strictEqual(title, 'WebdriverIO · Next-gen browser automation test framework for Node.js')
    })
})