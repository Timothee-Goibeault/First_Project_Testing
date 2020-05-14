const timeout = 60000;
import AmazonPage from './page_amazon'

export class GardenPage  extends AmazonPage {
  
    get first_item() {$('//*[@id="zg-ordered-list"]/li[1]/span/div/span/a/span/div/img')}
    
    select_first_item(){
      this.first_item.click()
    }
    
  }
  export default new GardenPage