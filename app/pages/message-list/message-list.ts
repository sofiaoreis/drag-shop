import {Page, NavController, NavParams, ViewController} from 'ionic-angular';
import {MessagesService} from '../../providers/messages-service/messages-service'
import {Message} from '../../models/message'
import {MessagesPage} from '../messages/messages'
import {UnreadMessagesPipe} from '../../pipes/messages/unread-messages-pipe'
import {ClientNamePipe} from '../../pipes/messages/client-name'
import {ReceivedMessagesPipe} from '../../pipes/messages/received-messages'

@Page({
  templateUrl: 'build/pages/message-list/message-list.html',
  providers: [MessagesService],
  pipes: [UnreadMessagesPipe, ClientNamePipe, ReceivedMessagesPipe]
})
export class MessageListPage {
  messages: Message[];
  clients: any;
  messagesTrigger: string;

  constructor(private nav: NavController, navParams: NavParams, private messagesService: MessagesService) {
    //Set the default value of the messages trigger so that the correct segment is open on page load
    this.messagesTrigger = "unread";

    //get all from or to the current user
    messagesService.getMessageList().subscribe(
        data => {
          this.messages = data[0];
          this.clients = data[1];
        },
        err => {console.log(err);},
        () => {console.log("Finished fetching client messages")}
    );

  }

  //TODO: change the hard-coded value
  //navigate to the conversation page from the selected message
  itemTapped(item) {
    let conversation = this.messages.filter(x => (x.from_id == item.from_id && x.to_id == 1) || (x.from_id == 1 && x.to_id == item.from_id));
    conversation.sort((a,b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    this.nav.push(MessagesPage, {
      messages: conversation
    });
  }

}
