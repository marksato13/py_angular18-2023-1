import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeguridadPagesComponent } from './pages/seguridad-pages/seguridad-pages.component';

const routes: Routes = [{
  path:"",
  component: SeguridadPagesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
