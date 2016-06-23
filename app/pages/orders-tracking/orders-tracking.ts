import {Page, NavController, NavParams} from 'ionic-angular';
//import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
//import {Component} from '@angular/core';
//import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';

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
  selector: 'doughnut-chart-demo',
  providers: [OrdersService],
  //directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES],
  pipes:[OrderSeeAllPipe, OrderShippedPipe, OrderInTrafficPipe, OrderPendingPipe, OrderCanceledPipe]
})
export class OrdersTrackingPage {

orders: Order[];
ordersTrigger: string;
public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

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

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
