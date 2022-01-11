import { NgModule } from '@angular/core';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';






@NgModule({

  exports: [
    DialogModule,
    ButtonModule,
    CheckboxModule
  ]
})
export class PrimeNgModule { }
