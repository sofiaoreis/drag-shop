import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Platform} from 'ionic-angular';
import {Message} from '../../models/message'
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx'
import {Client} from '../../models/client'

@Injectable()
export class ClientsService {
    clientsUrl: string;
    constructor(private http: Http, platform: Platform) {
      if(platform.is('android') && platform.is('cordova')){
        this.clientsUrl = '/android_asset/www/clients.json'
      }
      else{
        this.clientsUrl = '/clients.json';
      }
    }

    getAllClients() {
        return this.http.get(this.clientsUrl).map(res => <Client[]> res.json())
    }

}
