export class Client {
  id: number;
  gender: string;
  first_name: string;
  last_name: string;
  email: string;
  birthday: string;
  address: Array<{address_line: string, city: string, state: string, zip_code: string}>;
  alternate_address: Array<{address_line: string, city: string, state: string, zip_code: string}>;

  constructor() {

  }
}
