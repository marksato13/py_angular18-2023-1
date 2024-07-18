import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './modules/home/pages/home-pages/home-pages.component';
import { UserDashboardPagesComponent } from './modules/user-dashboard/pages/user-dashboard-pages/user-dashboard-pages.component';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((e) => e.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/user-dashboard/user-dashboard.module').then((e) => e.UserDashboardModule),
  },
  {
    path: 'home',
    component: HomePagesComponent,
    loadChildren: () => import('./modules/home/home.module').then((e) => e.HomeModule)
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
