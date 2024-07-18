import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformesRoutingModule } from './informes-routing.module';
import { ProyectoInformesComponent } from './pages/proyecto-informes/proyecto-informes.component';
import { JornadaInformesComponent } from './pages/jornada-informes/jornada-informes.component';
import { EquipoInformesComponent } from './pages/equipo-informes/equipo-informes.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProyectoInformesComponent,
    JornadaInformesComponent,
    EquipoInformesComponent
  ],
  imports: [
    CommonModule,
    InformesRoutingModule,
    FormsModule
  ]
})
export class InformesModule { }
