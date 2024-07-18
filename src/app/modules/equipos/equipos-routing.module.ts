import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquiposPagesComponent } from './pages/equipos-pages/equipos-pages.component';
import { EquiposAddComponent } from './pages/equipos-add/equipos-add.component';

const routes: Routes = [  {
  path: '',
  component:EquiposPagesComponent
},
{
  path:'add/:id',
  component:EquiposAddComponent
}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquiposRoutingModule { }
