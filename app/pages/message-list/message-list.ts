import {Page, NavController, NavParams, ViewController} from 'ionic-angular';
import {MessagesService} from '../../providers/messages-service/messages-service'
import {Message} from '../../models/message'
import {MessagesPage} from '../messages/messages'
import {UnreadMessagesPipe} from '../../pipes/messages/unread-messages-pipe'
import {ClientNamePipe} from '../../pipes/messages/client-name'
import {ReceivedMessagesPipe} from '../../pipes/messages/received-messages'
import {DateCalendarPipe} from '../../pipes/messages/date'
import {MaxLengthPipe} from '../../pipes/messages/limit-messages'

@Page({
  templateUrl: 'build/pages/message-list/message-list.html',
  providers: [MessagesService],
  pipes: [UnreadMessagesPipe, ClientNamePipe, ReceivedMessagesPipe, DateCalendarPipe, MaxLengthPipe]
})
export class MessageListPage {
  messages: Message[];
  conversations: Array<{id: number, name: string, messages: Message[]}> = [];
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
          this.organizeMessages();
        },
        err => {console.log(err);},
        () => {console.log("Finished fetching client messages");}
    );

  }

  organizeMessages() {
    //sort all messages by date
    this.messages.sort((a,b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    //group messages in conversations
    //TODO: change hard-coded value
    this.messages.forEach(x => {
      let otherPersonId = (x.from_id === 1) ? x.to_id : x.from_id;
      let found: boolean = false;

      this.conversations.forEach(y =>{
        if(y.id === otherPersonId) {
          y.messages.push(x);
          found = true;
        }
      });

      if(!found) {
        let clientName = new ClientNamePipe().transform(otherPersonId, new Array(this.clients));
        this.conversations.push({id: otherPersonId, name: clientName, messages: [x]});
      }

    });

  }

  //TODO: change the hard-coded value
  //navigate to the conversation page from the selected message
  itemTapped(item) {

    let otherPersonId = item;
    let conversation = this.conversations.filter(x => x.id === otherPersonId)[0];

    console.log(otherPersonId);
    console.log(conversation.name);

    this.nav.push(MessagesPage, {
      messages: conversation.messages,
      clientName: conversation.name
    });
  }

}
