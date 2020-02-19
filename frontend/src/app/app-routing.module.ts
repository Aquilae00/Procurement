import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import { ManufacturerSearchComponent } from "./manufacturer-search/manufacturer-search.component";
import {ManufacturerDetailedComponent} from "./manufacturer-detailed/manufacturer-detailed.component";
import {FactoryDetailedComponent} from "./factory-detailed/factory-detailed.component";
import {ManufacturerResolve} from "./services/manufacturer.resolve.service";
import {FactoriesResolve} from "./services/factories.resolve.service";
import {ManufacturersResolve} from "./services/manufacturers.resolve.service";
import {FactoryResolve} from "./services/factory.resolve.service";
import {MachineResolve} from "./services/machines.resolve.service";

const routes: Routes = [
  {
    path: '',
    component: ManufacturerSearchComponent,
    resolve: {
      manufacturers: ManufacturersResolve
    }
  },
  {
    path: 'manufacturer/:id',
    component: ManufacturerDetailedComponent,
    resolve: {
      manufacturer: ManufacturerResolve,
      factories: FactoriesResolve
    }
  },
  {
    path: 'manufacturer/:manufacturer-id/factory/:id',
    component: FactoryDetailedComponent,
    resolve: {
      factory: FactoryResolve,
      machines: MachineResolve
    }
  }
];

export const routing = RouterModule.forRoot(routes)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    ManufacturersResolve,
    ManufacturerResolve,
    FactoriesResolve,
    FactoryResolve,
    MachineResolve
  ]
})

export class AppRoutingModule { }
