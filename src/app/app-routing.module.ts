import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 
    {path: 'dashboard' , component: DashboardComponent},
    {path: 'home' , component: HomeComponent},
    {path: 'login' , component: LoginComponent},
    {path: '**' , redirectTo:'/login' }
       
     
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
