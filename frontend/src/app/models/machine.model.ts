import {Product} from "./product.model";

export class Machine {
  constructor(
    public id: number,
    public machine_name: string,
    public manufacturer_id: number,
    public rpm: string,
    public products: Array<Product>,
  ) { }
}
