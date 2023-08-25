import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { SignOnComponent } from './sign-on/sign-on.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignOnComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule      
  ]
})
export class LoginModule { }
