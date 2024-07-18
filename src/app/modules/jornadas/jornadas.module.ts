import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';;
import { JornadasRoutingModule } from './jornadas-routing.module';
import { JornadaPagesComponent } from './pages/jornada-pages/jornada-pages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { JornadaListProyectoComponent } from './pages/jornada-list-proyecto/jornada-list-proyecto.component';
import { ProyectosService } from '../proyectos/services/proyectos.service';


@NgModule({
  declarations: [
    JornadaPagesComponent,
    JornadaListProyectoComponent
  ],
  imports: [
    FormsModule, 
    CommonModule,
    JornadasRoutingModule,
    SharedModule,
    ReactiveFormsModule, 

  ],
  exports: [JornadaPagesComponent],
  providers:[ProyectosService]
})
export class JornadasModule { }
