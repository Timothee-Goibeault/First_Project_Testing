const { Given, When, Then } = require('cucumber')
const expect = require('chai').expect

const AmazonPage =  require('../../page_object/page_amazon');
const BestsellersPage =  require('../../page_object/page_bestsellers');
const ArticlePage =  require('../../page_object/page_article');
const CartPage = require('../../page_object/page_cart');
const timeout = 60000;

/*Then(/^le nombre d'article dans le panier est égale à {int}$/,  (a) => { 
    
    expect(CartPage.get_nb_items_in_cart()).to.equal(a)
 });
*/


 Then(/^le nombre d'article dans le panier est égale à 0$/,  () => { 

  AmazonPage.navigate_to_cart()
   expect(AmazonPage.get_nb_items_in_cart()).to.equal('0')
 });

 Then(/^le nombre d'article dans le panier est égale à 1$/,  () => { 

   expect(AmazonPage.get_nb_items_in_cart()).to.equal('1')
 });