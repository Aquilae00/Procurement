import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Manufacturer} from "../models/manufacturer.model";
import {AppApiService} from "./app-api.service";
import {Observable} from "rxjs";
import {Machine} from "../models/machine.model";

@Injectable()
export class MachineResolve implements Resolve<Machine[]>{
    constructor(private service: AppApiService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Machine[]> | Machine[] {
        let id = route.params['id'];
        return this.service.getFactoryMachines(id);
    }
}
