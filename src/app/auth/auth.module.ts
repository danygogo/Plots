import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { NewComponent } from './components/new/new.component';
import { AuthComponent } from './pages/auth/auth.component';


@NgModule({
  declarations: [
    LoginComponent,
    NewComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
