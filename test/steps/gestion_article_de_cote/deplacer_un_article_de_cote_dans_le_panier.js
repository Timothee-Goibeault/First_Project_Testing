const { Given, When, Then } = require('cucumber')
const expect = require('chai').expect

const AmazonPage =  require('../../page_object/page_amazon');
const BestsellersPage =  require('../../page_object/page_bestsellers');
const CategoryPage =  require('../../page_object/page_category');
const ArticlePage =  require('../../page_object/page_article');
const CartPage = require('../../page_object/page_cart');
const timeout = 60000;

When(/^qu'il clique sur le bouton Déplacer dans le panier$/,  () => { 
    
    CartPage.move_1st_article_aside_to_cart()
 });
