import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConveniosRoutingModule } from './convenios-routing.module';
import { ConveniosPagesComponent } from './pages/convenios-pages/convenios-pages.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ConveniosPagesComponent
  ],
  imports: [
    CommonModule,
    ConveniosRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule, 
  ]
})
export class ConveniosModule { }
