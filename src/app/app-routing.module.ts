import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { SubjectComponent } from './component/subject/subject.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 
    {path: 'dashboard' , component: DashboardComponent},
    {path: 'home' , component: HomeComponent},
    {path: 'login' , component: LoginComponent},
    {path: 'subject' , component: SubjectComponent},
    {path: '' , component: SubjectComponent},

    {path: 'NotFound' , component: NotFoundComponent},
    {path: '**' , redirectTo:'/NotFound' }
       
     
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
