import {Address} from './address.model';
import {Factory} from './factory.model';
import {Contact} from "./contact.model";


export class Manufacturer {
  constructor(
    public id: number,
    public name: string,
    public address: Address,
    public contact: Contact,
    public factories: Array<Factory>,
  ) { }
}

