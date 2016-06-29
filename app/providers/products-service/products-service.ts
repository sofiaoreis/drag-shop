import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Platform} from 'ionic-angular';
import {Product} from '../../models/product'
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx'

@Injectable()
export class ProductsService {
    productsUrl: string;
    constructor(private http: Http, platform: Platform) {
      if(platform.is('android') && platform.is('cordova')){
        this.productsUrl = '/android_asset/www/products.json';
      }
      else{
        this.productsUrl = '/products.json';
      }
    }

    getProducts() {
      return this.http.get(this.productsUrl).map(res => <Product[]> res.json());
    }
}
