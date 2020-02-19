import {Component, Input, OnInit} from '@angular/core';
import {Machine} from "../models/machine.model";
import {Product} from "../models/product.model";

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent implements OnInit {

  @Input()
  machine: Machine;
  private machineName: string;
  private  machineRpm: string;
  private products: Product[]

  constructor() { }

  ngOnInit() {
    this.machineName = this.machine.machine_name;
    this.machineRpm = this.machine.rpm;
    this.products = this.machine.products;
  }

}
