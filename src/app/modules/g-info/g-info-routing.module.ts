import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GInfoPagesComponent } from './pages/g-info-pages/g-info-pages.component';

const routes: Routes = [  {
  path: '',
  component:GInfoPagesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GInfoRoutingModule { }
