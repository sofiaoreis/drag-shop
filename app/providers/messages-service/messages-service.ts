import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Platform} from 'ionic-angular';
import {Message} from '../../models/message'
import 'rxjs/add/operator/map'

@Injectable()
export class MessagesService {
    url: string;
    constructor(private http: Http, platform: Platform) {
      if(platform.is('android')){
          this.url = '/android_asset/www/messages.json';
      }
      else this.url = '/messages.json';
    }

    getMessageList() {
        return this.http.get(this.url).map(res => <Message[]> res.json());
    }

    getMessages(userid) {
        return this.http.get(this.url).map(res => <Message[]> res.json().messages);
    }
}
