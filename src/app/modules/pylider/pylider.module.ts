import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PyliderRoutingModule } from './pylider-routing.module';
import { PyliderPagesComponent } from './pages/pylider-pages/pylider-pages.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PyliderPagesComponent
  ],
  imports: [
    CommonModule,
    PyliderRoutingModule,
    FormsModule,
    SharedModule, 
    ReactiveFormsModule, 
  ]
})
export class PyliderModule { }
