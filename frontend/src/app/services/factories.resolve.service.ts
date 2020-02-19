import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Manufacturer} from "../models/manufacturer.model";
import {AppApiService} from "./app-api.service";
import {Observable} from "rxjs";
import {Factory} from "../models/factory.model";

@Injectable()
export class FactoriesResolve implements Resolve<Factory[]> {
  constructor(private service: AppApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Factory[]> | Factory[] {
    let id = route.params['id'];
    return this.service.getManufacturersFactories(id);
  }
}
