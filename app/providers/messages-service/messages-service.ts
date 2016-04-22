import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Platform} from 'ionic-angular';
import {Message} from '../../models/message'
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx'

@Injectable()
export class MessagesService {
    messagesUrl: string;
    clientsUrl: string;
    constructor(private http: Http, platform: Platform) {
      if(platform.is('android') && platform.is('cordova')){
        this.messagesUrl = '/android_asset/www/messages.json';
        this.clientsUrl = '/android_asset/www/clients.json'
      }
      else{
        this.messagesUrl = '/messages.json';
        this.clientsUrl = '/clients.json';
      }
    }

    getMessageList() {
        //return this.http.get(this.url).map(res => <Message[]> res.json());
        return Observable.forkJoin(
          this.http.get(this.messagesUrl).map(res => <Message[]> res.json()),
          this.http.get(this.clientsUrl).map(res => <any[]> res.json())
        );
    }

}
