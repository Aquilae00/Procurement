import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppApiService} from './services/app-api.service';
import { ManufacturerSearchComponent } from './manufacturer-search/manufacturer-search.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { RouterModule} from "@angular/router";
import { routing } from "./app-routing.module";
import { ManufacturerDetailedComponent } from './manufacturer-detailed/manufacturer-detailed.component';
import { FactoryComponent } from './factory/factory.component';
import { MachineComponent } from './machine/machine.component';
import { FactoryDetailedComponent } from './factory-detailed/factory-detailed.component';
import {ManufacturerResolve} from "./services/manufacturer.resolve.service";
import {FactoriesResolve} from "./services/factories.resolve.service";
import {ManufacturersResolve} from "./services/manufacturers.resolve.service";
import {FactoryResolve} from "./services/factory.resolve.service";
import {MachineResolve} from "./services/machines.resolve.service";

@NgModule({
  declarations: [
    AppComponent,
    ManufacturerSearchComponent,
    ManufacturerComponent,
    ManufacturerDetailedComponent,
    FactoryComponent,
    MachineComponent,
    FactoryDetailedComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    RouterModule
  ],
  providers: [
    AppApiService,
    ManufacturerResolve,
    ManufacturersResolve,
    FactoriesResolve,
    FactoryResolve,
    MachineResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


