import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PyalumnPagesComponent } from './pages/pyalumn-pages/pyalumn-pages.component';

const routes: Routes = [  {
  path: '',
  component:PyalumnPagesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PyalumnRoutingModule { }
