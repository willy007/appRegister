import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformeRamoPagePage } from './informe-ramo-page.page';

const routes: Routes = [
  {
    path: '',
    component: InformeRamoPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformeRamoPagePageRoutingModule {}
