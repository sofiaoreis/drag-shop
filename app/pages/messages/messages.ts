import {Page, NavController, NavParams} from 'ionic-angular';
import {MessagesService} from '../../providers/messages-service/messages-service'
import {Message} from '../../models/message'

@Page({
  templateUrl: 'build/pages/messages/messages.html',
  providers: [MessagesService]
})
export class MessagesPage {
  user_id: number;
  messages: Message[];
  message: string;

  constructor(private nav: NavController, navParams: NavParams, private messagesService: MessagesService) {
    // Get the other person's id
    console.log(navParams);
  }

}
