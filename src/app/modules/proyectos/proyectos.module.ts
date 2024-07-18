import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosPagesComponent } from './pages/proyectos-pages/proyectos-pages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalProyectoComponent } from './components/modal-proyecto/modal-proyecto.component';
import { ViewProyectoComponent } from './components/view-proyecto/view-proyecto.component';


@NgModule({
  declarations: [
    ProyectosPagesComponent,
    ModalProyectoComponent,
    ViewProyectoComponent
  ],
  imports: [
    FormsModule, 
    CommonModule,
    ProyectosRoutingModule,
    SharedModule,
    ReactiveFormsModule, 

  ],
  exports:[],schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ProyectosModule { }
