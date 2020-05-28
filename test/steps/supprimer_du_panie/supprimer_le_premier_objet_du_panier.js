const { Given, When, Then } = require('cucumber')
const expect = require('chai').expect

const AmazonPage =  require('../../page_object/page_amazon');
const BestsellersPage =  require('../../page_object/page_bestsellers');
const GardenPage =  require('../../page_object/page_garden');
const ArticlePage =  require('../../page_object/page_article');
const CartPage = require('../../page_object/page_cart');
const timeout = 60000;

When("qu'il clique sur le bouton "Supprimer"",  () => { 
    
    CartPage.remove_1st_article()
 });
