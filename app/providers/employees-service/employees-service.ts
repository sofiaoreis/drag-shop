import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Platform} from 'ionic-angular';
import {Employee} from '../../models/employee'
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx'

@Injectable()
export class EmployeesService {
    employeeUrl: string;
    constructor(private http: Http, platform: Platform) {
      if(platform.is('android') && platform.is('cordova')){
        this.employeeUrl = '/android_asset/www/employees.json';
      }
      else{
        this.employeeUrl = '/employees.json';
      }
    }

    getEmployees() {
      return this.http.get(this.employeeUrl).map(res => <Employee[]> res.json());
    }
}
