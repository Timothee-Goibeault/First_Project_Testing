const { Given, When, Then } = require('cucumber')
const expect = require('chai').expect

const AmazonPage =  require('../../page_object/page_amazon');
const BestsellersPage =  require('../../page_object/page_bestsellers');
const CategoryPage =  require('../../page_object/page_category');
const ArticlePage =  require('../../page_object/page_article');

/*import AmazonPage from '../../page_object/page_amazon';
import BestsellersPage from '../../page_object/page_bestsellers'
import GardenPage from '../../page_object/page_garden'
import ArticlePage from '../../page_object/page_article'
*/
const timeout = 60000;

Given(/^un client avec 0 article dans son panier recherchant le premier article dans la catégorie Bagage des Meilleures ventes$/,  () => { 
    
    AmazonPage.open('https://amazon.fr')
    expect(AmazonPage.get_nb_items_in_cart()).to.equal('0')
    AmazonPage.navigate_to_bestsellers()
    BestsellersPage.navigate_to_bagage_category()
    CategoryPage.select_first_item()

 });