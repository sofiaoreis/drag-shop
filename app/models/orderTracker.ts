export class Order {
  id: number;
  status: string;
  fullName: string;
  address: string;
  products: Array<{name: string, quantity: number, unidade: string}> = [];

  constructor() {

  }
}
