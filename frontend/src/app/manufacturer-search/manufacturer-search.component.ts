import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Manufacturer} from "../models/manufacturer.model";
import {AppApiService} from "../services/app-api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-manufacturer-search',
  templateUrl: './manufacturer-search.component.html',
  styleUrls: ['./manufacturer-search.component.css']
})
export class ManufacturerSearchComponent implements OnInit {

  manufacturerListSubs: Subscription;
  manufacturerList: Manufacturer[];

  constructor(
    private route: ActivatedRoute,
    private manufacturerApi: AppApiService,
    private router: Router
              ) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { manufacturers: Manufacturer[] }) => {
      this.manufacturerList = data.manufacturers;
    });
  }

  onEnter(search_term: string) {
    this.manufacturerListSubs = this.manufacturerApi
      .getManufacturersByName(search_term)
      .subscribe(res => {
          this.manufacturerList = res;
        },
        console.error
      );
  }

  onKeyStroke(search_term: string) {
    if (search_term === '') {
      this.searchAll()
    }
  }

  searchAll() {
    this.manufacturerListSubs = this.manufacturerApi
      .getManufacturers()
      .subscribe(res => {
          this.manufacturerList = res;
        },
        console.error
      );
  }

  onManufacturerSelected(manufacturer: Manufacturer) {
    this.router.navigate(['/manufacturer/' + manufacturer.id])
  }

}
