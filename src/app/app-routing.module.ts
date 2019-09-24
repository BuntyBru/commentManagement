import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {AuthService} from './auth.service';

const routes: Routes = [{
  path:'',
  component:LoginComponent
},
{
  path:'login',
  component:LoginComponent
},

{
  path:'main',
 // canActivate:[AuthService],
  component:MainComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
