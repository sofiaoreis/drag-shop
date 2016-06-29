import {OrderProduct} from './orderProduct'

export class Order {
  id: number;
  client_id: number;
  city: string;
  payment: string;
  address: string;
  products: OrderProduct[];
  status: number;
  employee: string;

  constructor() {
      //this.content = obj.content;
  }
}
