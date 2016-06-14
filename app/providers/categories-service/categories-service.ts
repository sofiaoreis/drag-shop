import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Platform} from 'ionic-angular';
import {Category} from '../../models/category'
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx'

@Injectable()
export class CategoriesService {
    categoriesUrl: string;
    constructor(private http: Http, platform: Platform) {
      if(platform.is('android') && platform.is('cordova')){
        this.categoriesUrl = '/android_asset/www/categories.json';
      }
      else{
        this.categoriesUrl = '/categories.json';
      }
    }

    getCategories() {
      return this.http.get(this.categoriesUrl).map(res => <Category[]> res.json());
    }
}
