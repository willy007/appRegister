import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPagePageRoutingModule } from './registro-page-routing.module';

import { RegistroPagePage } from './registro-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistroPagePage]
})
export class RegistroPagePageModule {}
