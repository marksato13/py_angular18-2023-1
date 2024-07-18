import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquiposRoutingModule } from './equipos-routing.module';
import { EquiposPagesComponent } from './pages/equipos-pages/equipos-pages.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { SharedModule } from 'src/app/shared/shared.module';
import { EquiposService } from './service/equipos.service';
import { EquiposAddComponent } from './pages/equipos-add/equipos-add.component';
import { ModalAddComponent } from './components/modal-add/modal-add.component';

@NgModule({
  declarations: [
    EquiposPagesComponent,
    EquiposAddComponent,
    ModalAddComponent
  ],
  imports: [
    CommonModule,
    EquiposRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule, 
  ],
  providers:[
    EquiposService
  ]
})
export class EquiposModule { }
