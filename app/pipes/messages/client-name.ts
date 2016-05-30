import {Message} from '../../models/message'
import {Pipe, PipeTransform} from 'angular2/core'

@Pipe({
  name: 'clientName'
})
export class ClientNamePipe implements PipeTransform {
  transform(clientId: number, allClients) : string {
    if (!clientId || !allClients || !allClients.length) { return; }
    let client = allClients[0].find(x => x.id == clientId);
    return client.first_name + " " + client.last_name;
  }
}
