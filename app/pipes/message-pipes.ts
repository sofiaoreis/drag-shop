import {Message} from '../models/message'
import {Pipe, PipeTransform} from 'angular2/core'

@Pipe({
  name: 'unreadMessages'
})
export class UnreadMessagesPipe implements PipeTransform {
  transform(allMessages: Message[]) {
    if (!allMessages || !allMessages.length) { return; }
    return allMessages.filter(message => message.status == "not seen");
  }
}
