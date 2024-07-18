import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { SeguridadPagesComponent } from './pages/seguridad-pages/seguridad-pages.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SeguridadPagesComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    SharedModule,

  ]
})
export class SeguridadModule { }
