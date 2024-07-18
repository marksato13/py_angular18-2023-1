import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { ContenidoinicioComponent } from './pages/contenidoinicio/contenidoinicio.component';


@NgModule({
  declarations: [
    ContenidoinicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
