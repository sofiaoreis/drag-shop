import {Message} from '../../models/message'
import {Pipe, PipeTransform} from 'angular2/core'

@Pipe({
  name: 'clientName'
})
export class ClientNamePipe implements PipeTransform {
  transform(message: Message, allClients: Array<any>) : string {
    if (!message || !allClients || !allClients.length) { return; }
    let client = allClients[0].find(x => x.id == message.from_id);
    return client.first_name + " " + client.last_name;
  }
}
