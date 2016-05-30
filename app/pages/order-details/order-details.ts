import {Page, NavController, NavParams} from 'ionic-angular';
import {Order} from '../../models/order'
import {Product} from '../../models/product'
import {FreeEmployeeList} from '../free-employee-list/free-employee-list'

@Page({
  templateUrl: 'build/pages/order-details/order-details.html',
})
export class OrderDetails {
  order: Order;

  constructor(private nav: NavController, navParams: NavParams) {
    //this.order = navParams.get('order');
    this.order = new Order();
    this.order.id = 1;
    this.order.client = "Paula Vasquez";
    this.order.city = "Macon";
    this.order.payment = "Payment option"
    this.order.address = "6 Waywood Parkway";
    this.order.status = "Status";
    this.order.employee = "Carlos Fernandes";

    let product1 = new Product();
    product1.id = 1;
    product1.name = "Potatoes";
    product1.weight = 25;
    product1.units = "Kg";
    product1.price = 10;
    product1.processed = false;

    let product2 = new Product();
    product2.id = 3;
    product2.name = "Rice";
    product2.weight = 5;
    product2.units = "Kg";
    product2.price = 15;
    product2.processed = true;


    let products = [product1, product2];

    this.order.products = products;
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
}
