import {Order} from '../../models/order';
import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'seeAllOrdersPipe'
})
export class OrderSeeAllPipe implements PipeTransform {
  transform(allOrders: Order[]) : Order[] {
    if (!allOrders || !allOrders.length) { return; }
    return allOrders.filter(order => (order.status == 1) || (order.status == 2) || (order.status==3) || (order.status == 4) || (order.status == 5));

  }
}

  @Pipe({
    name: 'seeShippedOrderPipe'
  })
  export class OrderShippedPipe implements PipeTransform {
    transform(allOrders: Order[]) : Order[] {
      if (!allOrders || !allOrders.length) { return; }
      return allOrders.filter(order => (order.status == 1));

    }
}

@Pipe({
  name: 'seeInTrafficOrderPipe'
})
export class OrderInTrafficPipe implements PipeTransform {
  transform(allOrders: Order[]) : Order[] {
    if (!allOrders || !allOrders.length) { return; }
    return allOrders.filter(order => (order.status == 2));

  }
}

@Pipe({
  name: 'seePendingOrderPipe'
})
export class OrderPendingPipe implements PipeTransform {
  transform(allOrders: Order[]) : Order[] {
    if (!allOrders || !allOrders.length) { return; }
    return allOrders.filter(order => (order.status == 3));

  }
}

@Pipe({
  name: 'seeCanceledOrderPipe'
})
export class OrderCanceledPipe implements PipeTransform {
  transform(allOrders: Order[]) : Order[] {
    if (!allOrders || !allOrders.length) { return; }
    return allOrders.filter(order => (order.status == 4));

  }
}

@Pipe({
  name: 'seeUnfinishedOrderPipe'
})
export class OrderUnfinishedPipe implements PipeTransform {
  transform(allOrders: Order[]) : Order[] {
    if (!allOrders || !allOrders.length) { return; }
    return allOrders.filter(order => (order.status == 5));

  }
}
