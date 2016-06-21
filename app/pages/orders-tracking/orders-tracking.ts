import {Page, NavController, NavParams} from 'ionic-angular';
import {OrdersService} from '../../providers/orders-service/orders-service';
import {Order} from '../../models/order';
import {OrderSeeAllPipe} from '../../pipes/orders/order-status';
import {OrderShippedPipe} from '../../pipes/orders/order-status';
import {OrderInTrafficPipe} from '../../pipes/orders/order-status';
import {OrderPendingPipe} from '../../pipes/orders/order-status';
import {OrderCanceledPipe} from '../../pipes/orders/order-status';
import {OrderDetails} from '../order-details/order-details'

@Page({
  templateUrl: 'build/pages/orders-tracking/orders-tracking.html',
  providers: [OrdersService],
  pipes:[OrderSeeAllPipe, OrderShippedPipe, OrderInTrafficPipe, OrderPendingPipe, OrderCanceledPipe]
})
export class OrdersTrackingPage {

orders: Order[];
ordersTrigger: string;

  constructor(private nav: NavController, navParams: NavParams, private orderTrackingService: OrdersService) {
      this.ordersTrigger = "all";
  }

  onPageDidEnter() {
    this.orderTrackingService.getOrders().subscribe(
        data => {
            this.orders = data;
        },
        err => {console.log(err);},
        () => {console.log("Finished fetching orders list");}
    );
  }

  itemTapped(item){
    this.nav.push(OrderDetails,{order: item});
  }

}
