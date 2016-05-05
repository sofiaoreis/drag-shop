import {Page, NavController, NavParams} from 'ionic-angular';
import {Order} from '../../models/order'

@Page({
  templateUrl: 'build/pages/order-details/order-details.html'
})
export class OrderDetails {
  order: Order;

  constructor(private nav: NavController, navParams: NavParams) {
    this.order = navParams.get('order');
  }
}
