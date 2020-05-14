import { Before, Given, When, Then, BeforeAll } from 'cucumber';
import { expect, use } from 'chai';

const timeout = 60000;
import AmazonPage from './page_amazon'

export class BestsellersPage  extends AmazonPage {

    get link_garden() { return $('//*[@id="zg_browseRoot"]/ul/li[25]/a') }

    open() {
      super.open('https://www.amazon.fr/gp/bestsellers');  
    }

    navigate_to_garden_category(){
      this.link_garden.click()
    }


  }
  export default new BestsellersPage