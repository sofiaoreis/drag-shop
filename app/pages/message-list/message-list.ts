import {Page, NavController, NavParams, ViewController} from 'ionic-angular';
import {MessagesService} from '../../providers/messages-service/messages-service'
import {Message} from '../../models/message'
import {MessagesPage} from '../messages/messages'

@Page({
  templateUrl: 'build/pages/message-list/message-list.html',
  providers: [MessagesService]
})
export class MessageListPage {
  messages: Message[];

  constructor(private nav: NavController, navParams: NavParams, private messagesService: MessagesService) {

    messagesService.getMessageList().subscribe(
        data => {
          this.messages = data;
        },
        err => {console.log(err);},
        () => {console.log("Finished fetching client messages")}
    );

  }

  itemTapped(item) {
    this.nav.push(MessagesPage, {
      item: item
    });
  }

}
