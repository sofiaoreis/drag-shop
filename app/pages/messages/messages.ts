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
    // this.selectedItem = navParams.get('item');
    this.user_id = navParams.get('user_id');
    //getMessages(this.userId);
    messagesService.getMessages(this.user_id).subscribe(
        data => {
          this.messages = data;
          console.log(this.messages);
        },
        err => {console.log(err);},
        () => {console.log("Finished fetching messages from user conversation")}
    );
  }

}

