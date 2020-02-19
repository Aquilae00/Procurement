import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {Manufacturer} from "../models/manufacturer.model";
import {AppApiService} from "../services/app-api.service";
import {Factory} from "../models/factory.model";
import {Contact} from "../models/contact.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-manufacturer-detailed',
  templateUrl: './manufacturer-detailed.component.html',
  styleUrls: ['./manufacturer-detailed.component.css']
})
export class ManufacturerDetailedComponent implements OnInit {

  private manufacturer: Manufacturer;
  private factoryList: Factory[];
  private manufacturerName: string;
  private manufacturerCity: string;
  private manufacturerRegion: string;
  private manufacturerZipCode: string;
  private contactInfo: Contact;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AppApiService
  ) {
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.route.data.subscribe((data: { manufacturer: Manufacturer, factories: Factory[] }) => {
      this.manufacturer = data.manufacturer;
      this.factoryList = data.factories;
      this.initProps();
    });
  }

  initProps() {
    this.manufacturerName = this.manufacturer.name;
    let address = this.manufacturer.address;
    this.manufacturerCity = address.city;
    this.manufacturerRegion = address.region;
    this.manufacturerZipCode = address.zip_code;
    this.contactInfo = this.manufacturer.contact;
  }

  goBack() {
    this.router.navigate([''])
  }

  onFactorySelected(factory: Factory) {
    this.router.navigate(['./factory/' + factory.id], {relativeTo: this.route});
  }

}
