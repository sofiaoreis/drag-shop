import {Page, NavController, NavParams} from 'ionic-angular';
import {MessagesService} from '../../providers/messages-service/messages-service'
import {Message} from '../../models/message'

@Page({
  templateUrl: 'build/pages/messages/messages.html',
  providers: [MessagesService]
})
export class MessagesPage {
  messages: Message[];

  constructor(private nav: NavController, navParams: NavParams, private messagesService: MessagesService) {
    // Get the other person's id
    this.messages = navParams.get('messages');
  }

}
