import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleAsistenciaPagePage } from './detalle-asistencia-page.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleAsistenciaPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleAsistenciaPagePageRoutingModule {}
