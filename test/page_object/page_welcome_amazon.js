import { Before, Given, When, Then, BeforeAll } from 'cucumber';
import { expect, use } from 'chai';

const timeout = 60000;
import Page from './page'

export class WelcomeAmazonPage extends Page {
  get cartBtn() { return $('//*[@id="nav-cart"]') }
  get nb_items_in_cart() { return $('//*[@id="nav-cart-count"]') }
  get link_jardin() { return $('//*[@id="zg_browseRoot"]/ul/li[25]/a') }
  get best_sellers_button(){ return $('//*[@id="nav-xshop"]/a[1]') }
  
  open() {
    super.open('https://amazon.fr');
    
  }

}
export default new WelcomeAmazonPage


