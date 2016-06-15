import {Page, NavController, NavParams} from 'ionic-angular';
import {Order} from '../../models/order'
import {Product} from '../../models/product'
import {FreeEmployeeList} from '../free-employee-list/free-employee-list'
import {ClientProfilePage} from "../client-profile/client-profile"
import {ClientsService} from '../../providers/clients-service/clients-service'
import {Client} from '../../models/client'

@Page({
  templateUrl: 'build/pages/order-details/order-details.html',
  providers: [ClientsService]
})
export class OrderDetails {
  order: Order;
  client: Client;

  constructor(private nav: NavController, navParams: NavParams, private clientsService: ClientsService) {
    this.order = navParams.get('order');
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
    this.clientsService.getAllClients().subscribe(
        data => {
          this.client = data[this.order.client_id - 1];
          console.log("Cliente " + this.client);
        },
        err => {console.log(err);},
        () => {console.log("Finished fetching clients");}
    );
  }


  itemTapped(item) {
    this.nav.push(ClientProfilePage, {
      client: item
    });
  }

  /*doRadio() {
   let alert = Alert.create();
   alert.setTitle('Lightsaber color');

   alert.addInput({
     type: 'radio',
     label: 'Blue',
     value: 'blue',
     checked: true
   });

   alert.addButton('Cancel');
   alert.addButton({
     text: 'OK',
     handler: data => {
       this.testRadioOpen = false;
       this.testRadioResult = data;
     }
   });

}*/
}
