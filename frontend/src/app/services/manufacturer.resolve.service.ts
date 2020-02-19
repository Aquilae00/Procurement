import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Manufacturer} from "../models/manufacturer.model";
import {AppApiService} from "./app-api.service";
import {Observable} from "rxjs";

@Injectable()
export class ManufacturerResolve implements Resolve<Manufacturer>{
    constructor(private service: AppApiService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Manufacturer> | Manufacturer {
        let id = route.params['id'];
        return this.service.getManufacturerById(id);
    }
}
