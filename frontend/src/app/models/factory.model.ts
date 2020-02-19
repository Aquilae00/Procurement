import {Address} from "./address.model";
import {Machine} from "./machine.model";

export class Factory {
  constructor(
    public id: number,
    public name: string,
    public manufacturer_id: number,
    public address_id: number,
    public address: Address,
    public machines?: Array<Machine>,
  ) { }
}
