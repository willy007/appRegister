import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformeRamoPagePageRoutingModule } from './informe-ramo-page-routing.module';

import { InformeRamoPagePage } from './informe-ramo-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformeRamoPagePageRoutingModule
  ],
  declarations: [InformeRamoPagePage]
})
export class InformeRamoPagePageModule {}
