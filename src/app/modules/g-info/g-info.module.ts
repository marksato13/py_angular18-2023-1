import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule

import { GInfoRoutingModule } from './g-info-routing.module';
import { GInfoPagesComponent } from './pages/g-info-pages/g-info-pages.component';
import { VmodalComponent } from './pages/vmodal/vmodal.component';


@NgModule({
  declarations: [
    GInfoPagesComponent,
    VmodalComponent
  ],
  imports: [
    FormsModule, // Añade FormsModule a la lista de módulos importados
    CommonModule,
    GInfoRoutingModule
  ]
})
export class GInfoModule { }
