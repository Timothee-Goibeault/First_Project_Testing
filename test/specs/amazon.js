assert = require('assert')

// On met dans describe une fonctionnalité (page, service, fonction,...) que l'on souhaite tester puis ',' la fonction 
// Correspond a une ensemble de tests
describe('amazon page', () => {
    // On met dans it ce que va faire le test puis ',' la fonction 
    // Correspond à un test
    it('should have the right title', () => {
        //On décrit ce que fait la fonction ici
        //On definit l'url du navigateur
        browser.url('https://amazon.fr')
        //on récupère le titre du navigateur 
        const title = browser.getTitle()
        // on test sa valeur
        assert.strictEqual(title, 'Amazon.fr : livres, DVD, jeux vidéo, musique, high-tech, informatique, jouets, vêtements, chaussures, sport, bricolage, maison, beauté, puériculture, épicerie et plus encore !')
    })
    describe('Button "Meilleures Ventes" ', () => {
        it('should go to the page "Amazon.fr Les meilleures ventes: Les articles les plus populaires sur Amazon"', () => {
            //On décrit ce que fait la fonction ici
            //On definit l'url de la fonction            
            browser.url('https://amazon.fr')
            const buttonMeilleuresVentes = $('=Meilleures Ventes')
            buttonMeilleuresVentes.click()
            const title2 = browser.getTitle()
            assert.strictEqual(title2, 'Amazon.fr Les meilleures ventes: Les articles les plus populaires sur Amazon')


        })
        describe('Button "AmazonBasics" ', () => {
            it('should go to the page "Amazon.fr : AmazonBasics" ', () => {
                //On décrit ce que fait la fonction ici
                //On definit l'url de la fonction            
                browser.url('https://amazon.fr')
                const buttonAmazonBasics = $('//*[@tabindex="27"]')
                buttonAmazonBasics.click()
                const url = browser.getUrl()
                assert.strictEqual(url, 'https://www.amazon.fr/stores/node/1689209031/?field-lbr_brands_browse-bin=AmazonBasics&ref_=nav_cs_amazonbasics')


            })
        })
        describe('Tabsearch ', () => {
            it('should go to the page "Amazon.fr : AmazonBasics" ', () => {
                //On décrit ce que fait la fonction ici
                //On definit l'url de la fonction            
                browser.url('https://amazon.fr')
                const tabSearch =$('//*[@id="twotabsearchtextbox"]')
                tabSearch.setValue("ordinateur")
                const searchButton = $('#nav-search > form > div.nav-right > div > input')
                searchButton.click()
                const title = browser.getTitle()
                assert.strictEqual(title, 'Amazon.fr : ordinateur')


            })
        })
    })
})