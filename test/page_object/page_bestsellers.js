

const timeout = 60000;

const AmazonPage =  require('./page_amazon');

class BestsellersPage  /*extends AmazonPage*/ {

    get link_garden() { return $('//*[@id="zg_browseRoot"]/ul/li[25]/a') }
    get link_bagage() { return $('//*[@id="zg_browseRoot"]/ul/li[6]/a') }
    open() {
      super.open('https://www.amazon.fr/gp/bestsellers');  
    }

    navigate_to_garden_category(){
      this.link_garden.click()
    }

    navigate_to_bagage_category(){
      this.link_bagage.click()
    }


  }
  module.exports = new BestsellersPage();