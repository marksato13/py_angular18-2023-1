import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConveniosPagesComponent } from './pages/convenios-pages/convenios-pages.component';

const routes: Routes = [  {
  path: '',
  component:ConveniosPagesComponent
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConveniosRoutingModule { }
