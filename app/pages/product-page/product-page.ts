import {Page, IONIC_DIRECTIVES, NavController, NavParams} from 'ionic-angular';
import {Product} from '../../models/product'

@Page({
  templateUrl: 'build/pages/product-page/product-page.html',
  directives: [IONIC_DIRECTIVES]
})
export class ProductPage {
  product: Product;
  constructor(private nav: NavController, navParams: NavParams) {
    this.product = navParams.get('product');
    console.log(this.product);
  }
}
