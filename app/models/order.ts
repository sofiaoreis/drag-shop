import {Product} from './product'

export class Order {
  id: number;
  client: string;
  city: string;
  payment: string;
  address: string;
  status: string;
  products: number[];

  constructor() {
      //this.content = obj.content;
  }
}
