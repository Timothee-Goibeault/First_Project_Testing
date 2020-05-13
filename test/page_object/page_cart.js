import { Before, Given, When, Then, BeforeAll } from 'cucumber';
import { expect, use } from 'chai';

const timeout = 60000;
import Page from './page'

export class CartPage  extends Page {
    get nb_items_in_cart() { return $('//*[@id="nav-cart-count"]') }
    get add_in_cart_button() { $('//*[@id="add-to-cart-button"]') }
    get link_set_aside(){ $('/html/body/div[1]/div[4]/div/div[5]/div/div[2]/div[3]/form/div[2]/div[3]/div[4]/div/div[1]/div/div/div[2]/div[1]/span[3]/span/input')}
    get link_see_item_aside(){$('/html/body/div[1]/div[4]/div/div[5]/div/div[2]/div[5]/form/div/span/input')}
    get remove_button() {$('/html/body/div[1]/div[4]/div/div[5]/div/div[2]/div[3]/form/div[2]/div[3]/div[4]/div/div[1]/div/div/div[2]/div[1]/span[2]/span/input')}
    get link_move_to_cart (){ $('/html/body/div[1]/div[4]/div/div[5]/div/div[2]/div[5]/form/div[3]/div/div[4]/div/div[1]/div/div/div[2]/div[1]/span[2]/span/input')}


    

  }
  export default new CartPage