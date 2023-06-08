import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
// import { LoginComponent } from './pages/login/login.component';
// import { SignupComponent } from './pages/signup/signup.component';
// import { AddtaskComponent } from './pages/addtask/addtask.component';

const routes: Routes = [
  { path:'',redirectTo:'user',pathMatch:'full'},
  { path: 'user', loadChildren: () => import('./module/user/user.module').then(m => m.UserModule) },
  { path: 'task', loadChildren: () => import('./module/task/task.module').then(m => m.TaskModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
