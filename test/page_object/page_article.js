

const timeout = 60000;
const AmazonPage =  require('./page_amazon');

class ArticlePage  /*extends AmazonPage*/ {
    
    get add_in_cart_button() {return $('//*[@id="add-to-cart-button"]') }

    add_article_in_cart(){
      this.add_in_cart_button.click();
    }

  }
  module.exports = new ArticlePage();