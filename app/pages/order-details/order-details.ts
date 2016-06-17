import {Page, NavController, Alert, NavParams} from 'ionic-angular';
import {Order} from '../../models/order'
import {Product} from '../../models/product'
import {FreeEmployeeList} from '../free-employee-list/free-employee-list'
import {ClientProfilePage} from "../client-profile/client-profile"
import {ClientsService} from '../../providers/clients-service/clients-service'
import {Client} from '../../models/client'
import {MessagesPage} from "../messages/messages"
import {MessagesService} from '../../providers/messages-service/messages-service'
import {Message} from '../../models/message'
import {ClientNamePipe} from '../../pipes/messages/client-name'



@Page({
  templateUrl: 'build/pages/order-details/order-details.html',
  providers: [ClientsService, MessagesService],
  pipes: [ClientNamePipe]
})
export class OrderDetails {
  order: Order;
  messages: Message[];
  conversations: Array<{id: number, name: string, messages: Message[]}> = [];
  client: Client;
  clients: any;
  testRadioOpen: boolean;
  testRadioResult: any;

  constructor(private nav: NavController, navParams: NavParams, private clientsService: ClientsService, private messagesService: MessagesService) {
    this.order = navParams.get('order');
    this.client = new Client();
    this.client.id = 2;
    this.client.gender = "Male";
    this.client.first_name = "Fred"
    this.client.last_name = "Perry"
    this.client.email = "fperry1@mashable.com"
    this.client.birthday= "12/01/1978"
    let address:any = {};
    address.address_line = "6 Waywood Parkway";
    address.city = "Macon";
    address.state="Georgia";
    address.zip_code="31296";
    this.client.address = address;
    let alternate_address:any = {};
    alternate_address.address_line="4140 Chive Drive";
    alternate_address.city="Austin";
    alternate_address.state="Texas";
    alternate_address.zip_code="78783";
    this.client.alternate_address = alternate_address;
  /*
    this.client.address.address.city = "Macon"
    this.client.address.state="Georgia"
    this.client.address.zip_code="31296"
    this.client.alternate_address.address_line="4140 Chive Drive"
    this.client.alternate_address.city="Austin"
    this.client.alternate_address.state="Texas";
    this.client.alternate_address.zip_code="78783";*/
  }

  processProduct(product: Product){
   if(this.order.products[product.id].processed == false)
      this.order.products[product.id].processed = true;
    else
      this.order.products[product.id].processed = false;
  }

  allocateEmploye(){
    console.log(this.order);
    this.nav.push(FreeEmployeeList,{order: this.order});
  }

  editAllocateEmploye(employee){
    console.log(employee);
  }

  /*onPageDidEnter() {
    //get all clients
    this.clientsService.getAllClients().subscribe(
        data => {
          this.client = data[this.order.client_id - 1];
          console.log("Cliente " + this.client);
        },
        err => {console.log(err);},
        () => {console.log("Finished fetching clients");}
    );
  }*/
  goToWishList(item) {
    this.nav.push(ClientProfilePage, {
      client: item,
      trigger: "wishlist"
    });
  }

  goToMessages(item) {

    this.messagesService.getMessageList().subscribe(
        data => {
          this.conversations = [];
          this.messages = data[0];
          this.clients = data[1];

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

          let otherPersonId = this.client.id;
          let conversation = this.conversations.filter(x => x.id === otherPersonId)[0];

          this.nav.push(MessagesPage, {
            messages: conversation.messages,
            clientName: conversation.name
          });


        },
        err => {console.log(err);},
        () => {console.log("Finished fetching client messages");}
    );


  }

  itemTapped(item) {
    this.nav.push(ClientProfilePage, {
      client: item
    });
  }


  doRadio() {
  let alert = Alert.create();
   alert.setTitle('Order Status');
/*pending (azul)
canceled (vermelho)
in traffic (amarelo)
shipped (verde)*/
   alert.addInput({
     type: 'radio',
     label: 'Shipped',
     value: 'Shipped',
     checked: false
   });

   alert.addInput({
     type: 'radio',
     label: 'In Traffic',
     value: 'In Traffic',
     checked: false
   });

   alert.addInput({
     type: 'radio',
     label: 'Pending',
     value: 'Pending',
     checked: true
   });

   alert.addInput({
     type: 'radio',
     label: 'Canceled',
     value: 'Canceled',
     checked: false
   });

   alert.addButton('Cancel');
   alert.addButton({
     text: 'OK',
     handler: data => {
       this.testRadioOpen = false;
       this.testRadioResult = data;
       this.order.status = this.testRadioResult;
       //console.log(this.order.status);
       //console.log(this.testRadioResult);
     }
   });
   this.nav.present(alert).then(() => {
      this.testRadioOpen = true;
    });

}
}
