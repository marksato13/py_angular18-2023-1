import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JornadaPagesComponent } from './pages/jornada-pages/jornada-pages.component';
import { JornadaListProyectoComponent } from './pages/jornada-list-proyecto/jornada-list-proyecto.component';

const routes: Routes = [
  {
    path: 'list/:id',
    component:JornadaPagesComponent
  },
  {
    path:'proyecto',
    component:JornadaListProyectoComponent
  },
  {
    path:'**',
    redirectTo:'proyecto'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JornadasRoutingModule { }
