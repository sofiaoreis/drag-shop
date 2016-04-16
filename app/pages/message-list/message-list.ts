import {Page, NavController, NavParams, ViewController} from 'ionic-angular';
import {MessagesService} from '../../providers/messages-service/messages-service'
import {Message} from '../../models/message'
import {MessagesPage} from '../messages/messages'
import {UnreadMessagesPipe} from '../../pipes/message-pipes'

@Page({
  templateUrl: 'build/pages/message-list/message-list.html',
  providers: [MessagesService],
  pipes: [UnreadMessagesPipe]
})
export class MessageListPage {
  messages: Message[];
  messagesTrigger: string;

  constructor(private nav: NavController, navParams: NavParams, private messagesService: MessagesService) {
    //Set the default value of the messages trigger so that the correct segment is open on page load
    this.messagesTrigger = "unread";

    //get all from or to the current user
    messagesService.getMessageList().subscribe(
        data => {
          this.messages = data;
        },
        err => {console.log(err);},
        () => {console.log("Finished fetching client messages")}
    );

  }

  //navigate to the conversation page from the selected message
  itemTapped(item) {
    this.nav.push(MessagesPage, {
      item: item
    });
  }

}
