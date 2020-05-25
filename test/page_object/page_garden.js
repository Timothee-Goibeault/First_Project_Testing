const timeout = 60000;
const AmazonPage =  require('./page_amazon');
class GardenPage  /* extends AmazonPage*/ {

    get first_item() {$('//*[@id="zg-ordered-list"]/li[1]/span/div/span/a/span/div/img')}
    
    open() {
      super.open('https://www.amazon.fr/gp/bestsellers/lawn-garden');  
    }

    select_first_item(){
      this.first_item.click()
    }
    
  }
  module.export = new GardenPage();