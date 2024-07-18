import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosPagesComponent } from './pages/proyectos-pages/proyectos-pages.component';

const routes: Routes = [
  {
  path: '',
  component:ProyectosPagesComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
