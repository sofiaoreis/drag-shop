import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Platform} from 'ionic-angular';
import {Order} from '../../models/orderTracker'
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx'


@Injectable()
export class OrderTrackingService {
    ordersTrackingUrl: string;
    constructor(private http: Http, platform: Platform) {
      if(platform.is('android') && platform.is('cordova')){
        this.ordersTrackingUrl = '/android_asset/www/orders_tracking.json';
      }
      else{
        this.ordersTrackingUrl = '/orders_tracking.json';
      }
    }

    getOrdersList() {
      return this.http.get(this.ordersTrackingUrl).map(res => <Order[]> res.json());
        /*return Observable.forkJoin(
          this.http.get(this.ordersTrackingUrl).map(res => <Order[]> res.json())
        );*/
    }
}
