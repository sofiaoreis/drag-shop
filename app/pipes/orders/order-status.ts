import {Order} from '../../models/order';
import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'seeAllOrdersPipe'
})
export class OrderSeeAllPipe implements PipeTransform {
  transform(allOrders: Order[]) : Order[] {
    if (!allOrders || !allOrders.length) { return; }
    console.log("akljshgdfkals");
    return allOrders.filter(order => (order.status == 1) || (order.status == 2) || (order.status==3) || (order.status == 4));

  }

}
