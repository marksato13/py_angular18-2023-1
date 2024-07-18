import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramaProyectoComponent } from './pages/programa-proyecto/programa-proyecto.component';

const routes: Routes = [
  {
    path:'',
    component:ProgramaProyectoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramaPruectoRoutingModule { }
