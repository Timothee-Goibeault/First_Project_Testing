const { Given, When, Then } = require('cucumber')
const expect = require('chai').expect

const AmazonPage =  require('../../page_object/page_amazon');
const BestsellersPage =  require('../../page_object/page_bestsellers');
const CategoryPage =  require('../../page_object/page_category');
const ArticlePage =  require('../../page_object/page_article');
const CartPage = require('../../page_object/page_cart');
/*import AmazonPage from '../../page_object/page_amazon';
import BestsellersPage from '../../page_object/page_bestsellers'
import GardenPage from '../../page_object/page_garden'
import ArticlePage from '../../page_object/page_article'
*/
const timeout = 60000;

Given(/^un client avec 1 article de côté et 0 article dans son panier$/,  () => { 
    
    AmazonPage.open('https://amazon.fr')
    expect(AmazonPage.get_nb_items_in_cart()).to.equal('0')
    AmazonPage.navigate_to_bestsellers()
    BestsellersPage.navigate_to_bagage_category()
    CategoryPage.select_first_item()
    ArticlePage.add_article_in_cart()
    AmazonPage.navigate_to_cart()
    CartPage.move_1st_article_aside_to_cart(), () =>{
        expect(AmazonPage.get_nb_items_in_cart()).to.equal('0')
        expect(CartPage.get_nb_items_in_cart()).to.equal('1')
    }
    
 });