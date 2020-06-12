const { Before } = require('cucumber')

const expect = require('chai').expect

const CartPage =  require('../../page_object/page_cart');
const AmazonPage = require('../../page_object/page_amazon')
const timeout = 60000;

Before( () => { 
    AmazonPage.open('https://www.amazon.fr')
    AmazonPage.navigate_to_cart()
    /*nb_article_aside = CartPage.get_nb_article_aside()
    while (nb_article_aside !=='0'){
        CartPage.link_move_1st_article_aside_to_cart()
    }
    expect(CartPage.get_nb_article_aside()).to.equal('0')
    */
    
    while (AmazonPage.get_nb_items_in_cart()!=='0'){
        CartPage.remove_1st_article()
    }
    expect(AmazonPage.get_nb_items_in_cart()).to.equal('0')
    
 });