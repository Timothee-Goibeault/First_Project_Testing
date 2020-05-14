

const timeout = 60000;
import Page from './page'

export class CartPage  extends Page {

    get link_set_1st_article_aside(){ $('/html/body/div[1]/div[4]/div/div[5]/div/div[2]/div[3]/form/div[2]/div[3]/div[4]/div/div[1]/div/div/div[2]/div[1]/span[3]/span/input')}
    get link_see_article_aside(){$('/html/body/div[1]/div[4]/div/div[5]/div/div[2]/div[5]/form/div/span/input')}
    get remove_1st_article_button() {$('/html/body/div[1]/div[4]/div/div[5]/div/div[2]/div[3]/form/div[2]/div[3]/div[4]/div/div[1]/div/div/div[2]/div[1]/span[2]/span/input')}
    get link_move_1st_article_aside_to_cart (){ $('/html/body/div[1]/div[4]/div/div[5]/div/div[2]/div[5]/form/div[3]/div/div[4]/div/div[1]/div/div/div[2]/div[1]/span[2]/span/input')}
    
    open() {
      super.open('https://www.amazon.fr/gp/cart/view.html?ref_=nav_cart');  
    }

    set_1st_article_aside(){
      this.link_set_1st_article_aside.click()
    }

    remove_1st_article(){
      this.remove_1st_article_button.click()
    }

    show_article_aside(){
      this.link_see_article_aside.click()
    }

    move_1st_article_aside_to_cart(){
      this.link_move_1st_article_aside_to_cart.click()
    }

  }
  export default new CartPage