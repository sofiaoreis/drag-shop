import {Page, NavController, NavParams} from 'ionic-angular';
import {MessagesService} from '../../providers/messages-service/messages-service'
import {Message} from '../../models/message'
import {DateChatPipe} from '../../pipes/messages/date'
import * as moment from 'moment'
import {Autosize} from '../../directives/autosize';

//Imports for better user experience on mobile
import {ViewChild} from 'angular2/core';
import {Content} from 'ionic-angular';
import {Keyboard} from 'ionic-native';

@Page({
  templateUrl: 'build/pages/messages/messages.html',
  providers: [MessagesService],
  pipes: [DateChatPipe],
  directives: [Autosize]
})
export class MessagesPage {
  messages: Message[];
  groupedMessages: Array<{day: string, messages:Array<Message>}>;
  clientName: string;
  @ViewChild(Content) content: Content;

  constructor(private nav: NavController, navParams: NavParams, private messagesService: MessagesService) {
    this.messages = navParams.get('messages');
    this.messages = this.messages.reverse();
    this.clientName = navParams.get('clientName');

    this.groupByDay(this.messages);

    //scroll page to bottom on keyboard show
    Keyboard.onKeyboardShow().subscribe(
      data => {this.scrollBottom();}
    );

  }

  //scrollBottom when the user enters the page.
  onPageDidEnter() {
    this.scrollBottom();
  }

  scrollBottom() {
    //auto scroll page to bottom
    let dimensions = this.content.getContentDimensions();
    this.content.scrollTo(0, dimensions.scrollBottom, 0);
  }

  groupByDay(messages) {
    let newArr = [],
        days = {},
        newItem, i, j, cur;

    for (i = 0, j = messages.length; i < j; i++) {
        cur = messages[i];

        let day = moment(new Date(cur.date)).format("MMM Do YYYY");

        if (!(day in days)) {
            days[day] = {"day": day, "messages": []};
            newArr.push(days[day]);
        }
        days[day].messages.push(cur);
    }

    this.groupedMessages = newArr;
}

  sendMessage(input) {
    if(input.value.length > 1) {
      let newMessage = new Message();
      newMessage.content = input.value;
      newMessage.from_id = 1; //TODO: change this
      newMessage.to_id = 5;
      newMessage.date = moment().toISOString();
      this.messages.push(newMessage);
      this.groupByDay(this.messages);
      input.value = '';
      this.scrollBottom();
    }
  }

}
