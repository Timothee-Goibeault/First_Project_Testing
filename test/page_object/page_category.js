const timeout = 60000;
const AmazonPage =  require('./page_amazon');
class CategoryPage  /* extends AmazonPage*/ {

    get first_item() {return $('/html/body/div[1]/div[2]/div/div/div[1]/div/ol/li[1]/span/div/span/a/div')}
    
    

    select_first_item(){
      this.first_item.click();
    }
  }
  module.exports = new CategoryPage();