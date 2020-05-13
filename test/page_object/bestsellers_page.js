import { Before, Given, When, Then, BeforeAll } from 'cucumber';
import { expect, use } from 'chai';

const timeout = 60000;
import Page from './page'

export class BestsellersPage  extends Page {
    get nb_items_in_cart() { return $('//*[@id="nav-cart-count"]') }
    get add_in_cart_button() { $('//*[@id="add-to-cart-button"]') }
    get link_jardin() { return $('//*[@id="zg_browseRoot"]/ul/li[25]/a') }
  }
  export default new ArticlePage