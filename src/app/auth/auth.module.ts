import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule
  ]
})
export class AuthModule { }
