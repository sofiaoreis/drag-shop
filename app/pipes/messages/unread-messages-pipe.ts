import {Message} from '../../models/message'
import {Pipe, PipeTransform} from 'angular2/core'

@Pipe({
  name: 'unreadMessages'
})
export class UnreadMessagesPipe implements PipeTransform {
  transform(allMessages: Message[]) : Message[] {
    if (!allMessages || !allMessages.length) { return; }
    //TODO: change the hard-coded value of the user id to the current logged in user
    return allMessages.filter(message => (message.status == "not seen") && (message.to_id == 1));
  }
}
