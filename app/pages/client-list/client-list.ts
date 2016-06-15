import {Page, NavController, NavParams} from 'ionic-angular'
import {Client} from '../../models/client'
import {ClientsService} from '../../providers/clients-service/clients-service'
import {ClientProfilePage} from "../client-profile/client-profile"


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
          this.clients.forEach(x => (x["style"] = "background-image: url('"+ x.profile_pic +"')"));
        },
        err => {console.log(err);},
        () => {console.log("Finished fetching clients");}
    );
  }

  //navigate to the client profile page from the selected client
  itemTapped(item) {
    this.nav.push(ClientProfilePage, {
      client: item
    });
  }
}
