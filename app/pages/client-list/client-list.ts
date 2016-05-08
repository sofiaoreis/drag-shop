import {Page, NavController, NavParams, ViewController} from 'ionic-angular';
import {Client} from '../../models/client'
import {ClientsService} from '../../providers/clients-service/clients-service'

@Page({
  templateUrl: 'build/pages/client-list/client-list.html',
  providers: [ClientsService]
})
export class ClientListPage {
  clients: Client[];

  constructor(private nav: NavController, navParams: NavParams, private clientsService: ClientsService) {

  }

  onPageDidEnter() {
    //get all clients
    this.clientsService.getAllClients().subscribe(
        data => {
          this.clients = data;
        },
        err => {console.log(err);},
        () => {console.log("Finished fetching clients");}
    );
  }

  //TODO: change the hard-coded value
  //navigate to the conversation page from the selected message
  itemTapped(item) {
    /*
    this.nav.push(ClientPage, {
      client: {}
    });
    */

  }

}
