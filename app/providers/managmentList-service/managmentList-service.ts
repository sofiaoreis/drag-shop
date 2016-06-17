import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Platform} from 'ionic-angular';
import {Employee} from '../../models/employee'
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx'


@Injectable()
export class ManagmentService {
    managmentListUrl: string;
    constructor(private http: Http, platform: Platform) {
      if(platform.is('android') && platform.is('cordova')){
        this.managmentListUrl = '/android_asset/www/managmentList.json'
      }
      else{
        this.managmentListUrl = '/managmentList.json';
      }
    }

    getManagmentList() {
        //return this.http.get(this.url).map(res => <Managment[]> res.json());
        return this.http.get(this.managmentListUrl).map(res => <Employee[]> res.json());

    }

}
