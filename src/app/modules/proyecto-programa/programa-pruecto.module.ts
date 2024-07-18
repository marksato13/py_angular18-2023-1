import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramaPruectoRoutingModule } from './programa-pruecto-routing.module';
import { ProgramaProyectoComponent } from './pages/programa-proyecto/programa-proyecto.component';
import { ProyectosService } from '../proyectos/services/proyectos.service';
import { FormsModule } from '@angular/forms';
import { JornadasService } from '../jornadas/services/jornadas.service';


@NgModule({
  declarations: [
    ProgramaProyectoComponent
  ],
  imports: [
    CommonModule,
    ProgramaPruectoRoutingModule,
    FormsModule
  ],
  providers:[
    ProyectosService,
    JornadasService
  ]
})
export class ProgramaPruectoModule { }
