import { NgModule } from '@angular/core';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {ToastModule} from 'primeng/toast';



@NgModule({
  exports: [
    DialogModule,
    ButtonModule,
    CheckboxModule,
    ToastModule
  ]
})
export class PrimeNgModule { }
