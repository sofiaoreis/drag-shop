import {Injectable, Inject} from 'angular2/core';
import {Http} from 'angular2/http';
import {Message} from '../../models/message'
import 'rxjs/add/operator/map'

@Injectable()
export class MessagesService {
  constructor(private http: Http) {
  }

  getMessages(userid) {
      return this.http.get('/messages.json').map(res => <Message[]> res.json().messages);
  }
}