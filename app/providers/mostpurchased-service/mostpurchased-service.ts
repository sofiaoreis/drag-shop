import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Platform} from 'ionic-angular';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx'
import {MostPurchased} from "../../models/mostpurchased";

@Injectable()
export class MostPurchasedService {
    mostpurchasedUrl: string;

    constructor(private http: Http, platform: Platform) {
        if(platform.is('android') && platform.is('cordova')){
            this.mostpurchasedUrl = '/android_asset/www/mostpurchased.json'
        }
        else{
            this.mostpurchasedUrl = '/mostpurchased.json';
        }
    }

    getMostPurchasedList() {
        //return this.http.get(this.url).map(res => <Message[]> res.json());
        return this.http.get(this.mostpurchasedUrl).map(res => <MostPurchased[]> res.json());
    }

}
