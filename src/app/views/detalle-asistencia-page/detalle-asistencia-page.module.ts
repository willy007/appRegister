import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleAsistenciaPagePageRoutingModule } from './detalle-asistencia-page-routing.module';

import { DetalleAsistenciaPagePage } from './detalle-asistencia-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAsistenciaPagePageRoutingModule
  ],
  declarations: [DetalleAsistenciaPagePage]
})
export class DetalleAsistenciaPagePageModule {}
