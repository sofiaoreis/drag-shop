import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Platform} from 'ionic-angular';
import {WishList} from '../../models/wishList'
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx'

@Injectable()
export class WishListService {
    wishListUrl: string;
    constructor(private http: Http, platform: Platform) {
      if(platform.is('android') && platform.is('cordova')){
        this.wishListUrl = '/android_asset/www/wishList.json';
      }
      else{
        this.wishListUrl = '/wishList.json';
      }
    }

    getWishList() {
      return this.http.get(this.wishListUrl).map(res => <WishList[]> res.json());
    }
}
