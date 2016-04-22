import {Message} from '../../models/message'
import {Pipe, PipeTransform} from 'angular2/core'
import * as moment from 'moment'

@Pipe({
  name: 'dateCalendar'
})
export class DateCalendarPipe implements PipeTransform {
  transform(message: Message) : string {
    if (!message) { return; }

    return moment(new Date(message.date)).calendar(null, {
      sameDay: '[TODAY]',
      nextDay: '[TOMORROW]',
      nextWeek: 'dddd',
      lastDay: '[YESTERDAY]',
      lastWeek: '[LAST] dddd',
      sameElse: '[MORE THAN 1 WEEK]'
    });
  }
}

@Pipe({
  name: 'dateChat'
})
export class DateChatPipe implements PipeTransform {
  transform(message: Message) : string {
    if (!message) { return; }

    return moment(new Date(message.date)).format("hh:mm a");
  }
}
