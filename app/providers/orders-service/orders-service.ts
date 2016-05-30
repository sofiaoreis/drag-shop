import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Platform} from 'ionic-angular';
import {Order} from '../../models/order'
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx'

@Injectable()
export class OrdersService {
    ordersUrl: string;
    constructor(private http: Http, platform: Platform) {
      if(platform.is('android') && platform.is('cordova')){
        this.ordersUrl = '/android_asset/www/orders.json';
      }
      else{
        this.ordersUrl = '/orders.json';
      }
    }

    getOrders() {
      return this.http.get(this.ordersUrl).map(res => <Order[]> res.json());
    }
}
