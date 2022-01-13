import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthComponent } from './pages/auth/auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { NewComponent } from './components/new/new.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    NewComponent,
    AuthComponent,
   
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
    
  ]
})
export class AuthModule { }
