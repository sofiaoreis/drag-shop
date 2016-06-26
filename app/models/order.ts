import {OrderProduct} from './orderProduct'

export class Order {
  id: number;
  client_id: number;
  city: string;
  payment: string;
  address: string;
<<<<<<< HEAD
  status: string;
  products: OrderProduct[];
=======
  status: number;
  products: Product[];
>>>>>>> master
  employee: string;

  constructor() {
      //this.content = obj.content;
  }
}
