

const timeout = 60000;

const AmazonPage =  require('./page_amazon');

class BestsellersPage  /*extends AmazonPage*/ {

    get link_garden() { return $('//*[@id="zg_browseRoot"]/ul/li[25]/a') }

    open() {
      super.open('https://www.amazon.fr/gp/bestsellers');  
    }

    navigate_to_garden_category(){
      this.link_garden.click()
    }


  }
  module.export = new BestsellersPage();