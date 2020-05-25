const { Given, When, Then } = require('cucumber')
const expect = require('chai').expect

const AmazonPage =  require('../../page_object/page_amazon');

const timeout = 60000;

When(/^il clique sur le bouton Mon panier$/,  () => { 
    
    AmazonPage.navigate_to_cart()
 });