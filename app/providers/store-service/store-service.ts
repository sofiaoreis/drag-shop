import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Platform} from 'ionic-angular';
import {Store} from '../../models/stores'
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx'

@Injectable()
export class StoreService {
    storeUrl: string;

    constructor(private http: Http, platform: Platform) {
        if(platform.is('android') && platform.is('cordova')){
            this.storeUrl = '/android_asset/www/stores.json';

        }
        else{
            this.storeUrl = '/stores.json';

        }
    }

    getStoreList() {

        return this.http.get(this.storeUrl).map(res => <Store[]> res.json());
    }

}
