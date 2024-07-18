import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiPagesComponent } from './pages/confi-pages/confi-pages.component';

const routes: Routes = [  {
  path: '',
  component:ConfiPagesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiRoutingModule { }
