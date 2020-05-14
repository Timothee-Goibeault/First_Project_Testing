

const timeout = 60000;
import AmazonPage from './page_amazon'

export class ArticlePage  extends AmazonPage {
    
    get add_in_cart_button() { $('//*[@id="add-to-cart-button"]') }

    add_articlein_cart(){
      this.add_in_cart_button.click();
    }

  }
  export default new ArticlePage