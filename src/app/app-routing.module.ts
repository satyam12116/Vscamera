import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { CctvOrderComponent } from './cctv-order/cctv-order.component';
import { LoginComponent } from './login/login.component'
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EditDashboardComponent } from './edit-dashboard/edit-dashboard.component';
import { RequestAccessComponent } from './request-access/request-access.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'service',component:ServiceComponent},
  {path:'contact',component:ContactComponent},
  {path:'cctvorder',component:CctvOrderComponent},
  {path:'user-auth',component:LoginComponent},
  {path:'admin-auth',component:AdminLoginComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'req',component:RequestAccessComponent},
  {path:'editprofile',component:EditDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
