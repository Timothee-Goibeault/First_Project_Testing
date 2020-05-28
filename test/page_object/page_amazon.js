const timeout = 60000;
//import Page from './page'
const Page = require('./page');

class AmazonPage /*extends Page*/ {
  
  get cart_button() { return $('//*[@id="nav-cart"]') }
  get nb_items_in_cart() { return $('//*[@id="nav-cart-count"]') }
  get best_sellers_button(){ return $('//*[@id="nav-xshop"]/a[1]') }
  
  open(path) {
    browser.url(path)
  }
  
  get_nb_items_in_cart(){
    return this.nb_items_in_cart.getText()
  }

  navigate_to_cart(){
    this.cart_button.click()
  }

  navigate_to_bestsellers(){
    this.best_sellers_button.click()
  }

}
module.exports = new AmazonPage();
//export default new AmazonPage


