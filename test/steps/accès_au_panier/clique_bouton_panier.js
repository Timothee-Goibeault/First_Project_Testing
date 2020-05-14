import { When } from 'cucumber';
const expect = require('chai').expect

import AmazonPage from '../../page_object/page_amazon';

const timeout = 60000;

When(/^il clique sur le bouton Mon panier$/,  () => { 
    
    AmazonPage.navigate_to_cart()
 });