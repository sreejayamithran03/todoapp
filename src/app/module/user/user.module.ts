import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { AsyncEmailValidator } from 'src/app/validators/email.validators';


@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    AsyncEmailValidator
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    MaterialModule,
   
    
  ]
})
export class UserModule { }
