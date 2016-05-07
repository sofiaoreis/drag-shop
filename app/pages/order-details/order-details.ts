import {Page, NavController, NavParams} from 'ionic-angular';
import {Order} from '../../models/order'
import {Product} from '../../models/product'

@Page({
  templateUrl: 'build/pages/order-details/order-details.html',
})
export class OrderDetails {
  order: Order;

  constructor(private nav: NavController, navParams: NavParams) {
    this.order = navParams.get('order');
  }

  processProduct(product: Product){
    if(this.order.products[product.id].processed == false)
      this.order.products[product.id].processed = true;
    else
      this.order.products[product.id].processed = false;
  }
}
