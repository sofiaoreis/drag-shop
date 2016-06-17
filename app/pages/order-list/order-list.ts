import {Page, NavController, NavParams} from 'ionic-angular';
import {OrdersService} from '../../providers/orders-service/orders-service'
import {OrderDetails} from '../order-details/order-details'
import {Order} from '../../models/order'

@Page({
  templateUrl: 'build/pages/order-list/order-list.html',
  providers: [OrdersService]
})
export class OrderList {
  orders: Order[];

  constructor(private nav: NavController, navParams: NavParams, private ordersService: OrdersService) {
    ordersService.getOrders().subscribe(
      orders => {this.orders = orders;},
      err => {console.log(err);},
      () => {console.log("Finished fetching orders");}
    );
  }

  itemTapped(order){
    this.nav.push(OrderDetails,{order: order});
  }
}
