import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AppApiService} from "../services/app-api.service";
import {Manufacturer} from "../models/manufacturer.model";
import {Factory} from "../models/factory.model";
import {Address} from "../models/address.model";
import {Machine} from "../models/machine.model";

@Component({
  selector: 'app-factory-detailed',
  templateUrl: './factory-detailed.component.html',
  styleUrls: ['./factory-detailed.component.css']
})
export class FactoryDetailedComponent implements OnInit {

  private factory: Factory;
  private factoryName: string;
  private factoryCity: string;
  private factoryRegion: string;
  private factoryZipCode: string;
  private machineList: Machine[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: {factory: Factory, machines: Machine[] }) => {
      this.factory = data.factory;
      this.machineList = data.machines;
      this.initProps();
      }
    );
  }


  initProps() {
    this.factoryName = this.factory.name;
    let address = this.factory.address;
    this.factoryCity = address.city;
    this.factoryRegion = address.region;
    this.factoryZipCode = address.zip_code;
  }

  goBack() {
    this.router.navigate(['../../'], {relativeTo: this.route})
  }

}
