import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  //   { path: 'user', component: UserComponent },
  // { path: 'home', component:HomeComponent },
  // {path:'',redirectTo:'user',pathMatch:'full'},
  // { path: 'sign', component:SignupComponent },
  // { path: 'login', component:LoginComponent },
  { path: '', redirectTo: 'dash', pathMatch: 'full' },
  {
    path: 'dash', component: UserComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: '**', redirectTo: 'dash' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
