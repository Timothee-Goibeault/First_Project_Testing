import { And } from 'cucumber';
const expect = require('chai').expect

import AmazonPage from '../../page_object/page_amazon';
import BestsellersPage from '../../page_object/page_bestsellers'
import GardenPage from '../../page_object/page_garden'
import ArticlePage from '../../page_object/page_article'
import CartPage from '../../page_object/page_cart'
const timeout = 60000;

And(/^qu'il clique sur le bouton "Supprimer"$/,  () => { 
    
    CartPage.remove_1st_article()
 });
