import {Product} from './product'

export class Order {
  id: number;
  client: string;
  city: string;
  payment: string;
  address: string;
  status: number;
  products: Product[];
  employee: string;

  constructor() {
      //this.content = obj.content;
  }
}
