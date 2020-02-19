import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Manufacturer} from "../models/manufacturer.model";
import {Address} from "../models/address.model";

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {

  @Input()
  manufacturer: Manufacturer
  private manufacturerName: string;
  private  address: Address
  private manufacturerCity: string
  private manufacturerRegion: string
  private manufacturerZipCode: string

  @Output()
  manufacturerSelected = new EventEmitter<Manufacturer>();

  constructor() {
  }

  ngOnInit() {
    this.manufacturerName = this.manufacturer.name
    this.address = this.manufacturer.address
    this.manufacturerCity = this.address.city
    this.manufacturerRegion = this.address.region
    this.manufacturerZipCode = this.address.zip_code
  }

  onManufacturerSelected() {
    this.manufacturerSelected.emit(this.manufacturer);
  }

}
