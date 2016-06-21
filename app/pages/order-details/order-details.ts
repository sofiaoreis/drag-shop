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
  orderPrice: number;

  constructor(private nav: NavController, navParams: NavParams, private clientsService: ClientsService, private messagesService: MessagesService) {
    this.order = navParams.get('order');
    this.orderPrice = 0.0;
    for (let entry of this.order.products) {
        this.orderPrice = this.orderPrice + entry.price;
    }
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

  onPageDidEnter() {
    //get all clients
    console.log("heyyyyy");
    this.clientsService.getAllClients().subscribe(
          data => {
            this.client = data[this.order.client_id - 1];
            console.log(this.client);

          },
          err => {console.log(err);},
          () => {console.log("Finished fetching clients");}
      );

      console.log(this.client);


  }
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

   alert.addInput({
     type: 'radio',
     label: 'Shipped',
     value: '1',
     checked: (this.order.status === 1 ? true : false)
   });

   alert.addInput({
     type: 'radio',
     label: 'In Traffic',
     value: '2',
     checked: (this.order.status === 2 ? true : false)
   });

   alert.addInput({
     type: 'radio',
     label: 'Pending',
     value: '3',
     checked: (this.order.status === 3 ? true : false)
   });

   alert.addInput({
     type: 'radio',
     label: 'Canceled',
     value: '4',
     checked: (this.order.status === 4 ? true : false)
   });

   alert.addButton('Cancel');
   alert.addButton({
     text: 'OK',
     handler: data => {
       this.testRadioOpen = false;
       this.testRadioResult = data;
       this.order.status = parseInt(this.testRadioResult);

     }
   });
   this.nav.present(alert).then(() => {
      this.testRadioOpen = true;
    });

}
}
