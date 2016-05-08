import {Page, NavController, NavParams} from 'ionic-angular';
import {Order} from '../../models/order'

@Page({
  templateUrl: 'build/pages/free-employee-list/free-employee-list.html',
})
export class FreeEmployeeList {
  order: Order;

  constructor(private nav: NavController, navParams: NavParams) {
    this.order = navParams.get('order');
  }
}
