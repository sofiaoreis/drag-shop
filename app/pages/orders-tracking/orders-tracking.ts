import {Page, NavController, NavParams} from 'ionic-angular';
import {OrderTrackingService} from '../../providers/orders-tracking-service/orders-tracking-service'
import {Order} from '../../models/orderTracker'

@Page({
  templateUrl: 'build/pages/orders-tracking/orders-tracking.html',
  providers: [OrderTrackingService]
})
export class OrdersTrackingPage {

orders: Array<{orders: Order[]}> = [];
ordersTrigger: string;

  constructor(private nav: NavController, navParams: NavParams, private orderTrackingService: OrderTrackingService) {
      this.ordersTrigger = "all";
  }

  onPageDidEnter() {
    //get all messages from or to the current user
    this.orderTrackingService.getOrdersList().subscribe(
        data => {
            
        },
        err => {console.log(err);},
        () => {console.log("Finished fetching orders list");}
    );
  }

}
