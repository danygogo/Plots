import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthComponent } from './pages/auth/auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { NewComponent } from './components/new/new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../PrimeNgModule/prime-ng.module';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    LoginComponent,
    NewComponent,
    AuthComponent,
   
  ],
  providers: [ MessageService ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    PrimeNgModule
    
  ]
})
export class AuthModule { }
