import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectoInformesComponent } from './pages/proyecto-informes/proyecto-informes.component';
import { JornadaInformesComponent } from './pages/jornada-informes/jornada-informes.component';

const routes: Routes = [
  {
    path:'',
    component:ProyectoInformesComponent
  },
  {
    path:'jornadas/:id',
    component:JornadaInformesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformesRoutingModule { }
