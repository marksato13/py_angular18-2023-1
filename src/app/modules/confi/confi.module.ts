import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiRoutingModule } from './confi-routing.module';
import { ConfiPagesComponent } from './pages/confi-pages/confi-pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ConfiPagesComponent
  ],
  imports: [
    CommonModule,
    ConfiRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,  SharedModule

  ]
})
export class ConfiModule { }
