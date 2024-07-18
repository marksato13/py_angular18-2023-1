import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PyalumnRoutingModule } from './pyalumn-routing.module';
import { PyalumnPagesComponent } from './pages/pyalumn-pages/pyalumn-pages.component';



import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PyalumnPagesComponent
  ],
  imports: [
    CommonModule,
    PyalumnRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule, 
  ]
})
export class PyalumnModule { }
