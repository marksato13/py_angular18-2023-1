// user-dashboard-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardPagesComponent } from './pages/user-dashboard-pages/user-dashboard-pages.component';

const routes: Routes = [
  {
    path: '',
    component: UserDashboardPagesComponent
  },
  // Puedes agregar más rutas relacionadas con el panel de control si es necesario.
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
