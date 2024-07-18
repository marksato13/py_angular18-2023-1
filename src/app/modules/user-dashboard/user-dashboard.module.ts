import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardPagesComponent } from './pages/user-dashboard-pages/user-dashboard-pages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardService } from './service/dashboard.service';

@NgModule({
  declarations: [
    UserDashboardPagesComponent,
  ],  
  imports: [
    CommonModule,
    SharedModule,
    UserDashboardRoutingModule
  ],
  providers:[
    DashboardService
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class UserDashboardModule { }
