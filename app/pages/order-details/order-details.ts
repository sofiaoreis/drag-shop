import {Page, NavController, NavParams} from 'ionic-angular';
import {Order} from '../../models/order'
import {OrderProduct} from '../../models/orderProduct'
import {FreeEmployeeList} from '../free-employee-list/free-employee-list'

@Page({
  templateUrl: 'build/pages/order-details/order-details.html',
})
export class OrderDetails {
  order: Order;

  constructor(private nav: NavController, navParams: NavParams) {
    this.order = navParams.get('order');
  }

  processProduct(product: OrderProduct){
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
}
