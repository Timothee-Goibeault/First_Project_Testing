const { Given, When, Then } = require('cucumber')
const expect = require('chai').expect

const ArticlePage =  require('../../page_object/page_article');

const timeout = 60000;

When(/^il clique sur le bouton Ajouter au panier$/,  () => { 
    
    ArticlePage.add_article_in_cart()
 });