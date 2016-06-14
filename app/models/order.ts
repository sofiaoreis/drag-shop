import {OrderProduct} from './orderProduct'

export class Order {
  id: number;
  client: string;
  city: string;
  payment: string;
  address: string;
  status: string;
  products: OrderProduct[];
  employee: string;

  constructor() {
      //this.content = obj.content;
  }
}
