import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Factory} from "../models/factory.model";

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {

  @Input()
  factory: Factory;
  private factoryName: string;
  private factoryCity: string;
  private factoryRegion: string;
  private factoryZipCode: string;

  @Output()
  factorySelected = new EventEmitter<Factory>();

  constructor() { }

  ngOnInit() {
    this.factoryName = this.factory.name;
    this.factoryCity = this.factory.address.city;
    this.factoryRegion = this.factory.address.region;
    this.factoryZipCode = this.factory.address.zip_code;
  }

  onFactorySelected() {
    this.factorySelected.emit(this.factory);
  }

}
