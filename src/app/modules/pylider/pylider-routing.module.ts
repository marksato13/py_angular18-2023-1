import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PyliderPagesComponent } from './pages/pylider-pages/pylider-pages.component';

const routes: Routes = [  {
  path: '',
  component:PyliderPagesComponent
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PyliderRoutingModule { }
