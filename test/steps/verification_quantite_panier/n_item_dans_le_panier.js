const { Given, When, Then } = require('cucumber')
const expect = require('chai').expect

import AmazonPage from '../../page_object/page_amazon';
import BestsellersPage from '../../page_object/page_bestsellers'
import GardenPage from '../../page_object/page_garden'
import ArticlePage from '../../page_object/page_article'
import CartPage from '../../page_object/page_cart'
const timeout = 60000;

Then(/^le nombre d'article dans le panier est égale à {int} $/,  (a) => { 
    
    expect(CartPage.get_nb_items_in_cart()).to.equal(a)
 });